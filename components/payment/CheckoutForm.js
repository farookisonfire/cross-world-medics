import { Component } from 'react';
import scriptLoader from 'react-async-script-loader';
import { Message } from 'semantic-ui-react';
import 'whatwg-fetch';
import { FadingCircle } from 'better-react-spinkit';

import { Checkbox } from 'semantic-ui-react'
import { STRIPE_PUBLISHABLE, SERVER_URL } from '../../lib/constants';

class StripeJS extends Component {
  constructor() {
    super();

    this.state = {
      success: false,
      customerDetails: {
        name: '',
        phone: '',
        email: '',
        amount: '',
        internName: ''
      },
      valid: {
        name: true,
        phone: true,
        email: true,
        amount: true,
      },
      showDonationSpinner: false,
      enablePaymentButton: false
    };

    this.stripe;

    const style = {
      base: {
        iconColor: 'rgb(250,95,91)',
        color: '#31325F',
        lineHeight: '40px',
        fontWeight: 300,
        fontSize: '15px',

        '::placeholder': {
          color: '#CFD7E0',
        },
      },
    };

    this.onLoadSuccess = () => {
      this.stripe = Stripe(STRIPE_PUBLISHABLE);

      const elements = this.stripe.elements();
      this.card = elements.create('card', { style });
      this.card.mount('#card-element');

      this.card.addEventListener('charge', (event) => {
        this.setOutcome(event);
      });
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.setOutcome = this.setOutcome.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleDismiss = this.handleDismiss.bind(this);
    this.clearDonationForm = this.clearDonationForm.bind(this);
    this.showDonationModal = this.showDonationModal.bind(this);
    this.hideDonationModal = this.hideDonationModal.bind(this);
    this.handleNonRefundableCheck = this.handleNonRefundableCheck.bind(this);
  }

  componentDidMount() {
    const { isScriptLoaded, isScriptLoadSucceed } = this.props;
    if (isScriptLoaded && isScriptLoadSucceed) {
      this.onLoadSuccess();
    }
  }

  componentWillReceiveProps({ isScriptLoaded, isScriptLoadSucceed }) {
    if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
      if (isScriptLoadSucceed) {
        this.onLoadSuccess();
      } else {
        console.log('Stripe module load error.');
      }
    }
  }

  setOutcome(result) {
    const errorElement = document.querySelector('.error');
    errorElement.classList.remove('visible');

    if (result.token) {
      const customerDetails = this.state.customerDetails;
      const payload = JSON.stringify({ customerDetails, token: result.token.id });
      this.clearDonationForm();
      fetch(`${SERVER_URL}/checkout/payment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
      })
      .then((res) => {
        if (res.ok) return this.handleSuccess();
        
        this.hideDonationModal();
        throw new Error(res.statusText);
      })
      .catch((error) => {
        console.log(error);
      });
    } else if (result.error) {
      errorElement.textContent = result.error.message;
      errorElement.classList.add('visible');
      this.hideDonationModal();
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const formIsValid = this.validateForm();

    if (formIsValid) {
      this.showDonationModal();
      this.stripe.createToken(this.card).then(this.setOutcome);
    }
  }

  validateForm() {
    let isValid = true;
    const formInputs = Object.keys(this.state.valid);
    const validated = {
      name: true,
      phone: true,
      email: true,
      amount: true,
    };

    formInputs.forEach((input) => {
      if (this.state.customerDetails[input]) {
        validated[input] = true;
      } else {
        validated[input] = false;
        isValid = false;
      }
    });

    if (isNaN(this.state.customerDetails.amount)) {
      console.log('validate form - true');
      validated.amount = false;
      isValid = false;
    } else {
      validated.amount = true;
    }

    this.setState({ valid: validated });
    return isValid;
  }

  handleChange(event) {
    const update = {};
    update[event.target.name] = event.target.value;
    this.setState({ customerDetails: Object.assign({}, this.state.customerDetails, update) });
  }

  handleSuccess() {
    this.card.clear();
    this.hideDonationModal();
    this.setState({ success: true });
  }

  handleDismiss() {
    this.setState({ success: false });
  }

  showDonationModal() {
    this.setState({ showDonationSpinner: true });
  }

  hideDonationModal() {
    this.setState({ showDonationSpinner: false });
  }

  clearDonationForm() {
    const customerDetails = {
      name: '',
      phone: '',
      email: '',
      amount: '',
      internName: '',
    };

    this.setState({ customerDetails });
  }

  handleNonRefundableCheck(e, data) {
    const { checked } = data;
    this.setState({ enablePaymentButton: checked });
  }

  render() {
    const { valid } = this.state;
    return (
      <form>
        <div className="group">
          <label>
            <span>Name</span>
            <input
              name="name"
              className="field"
              placeholder="Card Holder's Full Name"
              onChange={this.handleChange}
              value={this.state.customerDetails.name} />
          </label>
          <div className={valid.name ? 'invalid-hidden' : "invalid-msg"}>This field is required</div>
          <label>
            <span>Intern's Name</span>
            <input
              name="internName"
              className="field"
              placeholder="Intern's Full Name"
              onChange={this.handleChange}
              value={this.state.customerDetails.internName} />
          </label>
          <label>
            <span>Phone</span>
            <input
              name="phone"
              className="field"
              placeholder="(123) 456-7890"
              type="tel"
              onChange={this.handleChange}
              value={this.state.customerDetails.phone} />
          </label>
          <div className={valid.phone ? 'invalid-hidden' : "invalid-msg"}>This field is required</div>
          <label>
            <span>Email</span>
            <input
              name="email"
              className="field"
              placeholder="jane.doe@gmail.com"
              onChange={this.handleChange}
              value={this.state.customerDetails.email} />
          </label>
          <div className={valid.email ? 'invalid-hidden' : "invalid-msg"}>This field is required</div>
          <label>
            <span>Amount</span>
            <input
              name="amount"
              type="number"
              className="field"
              placeholder="$100.00 (USD)"
              onChange={this.handleChange}
              value={this.state.customerDetails.amount} />
          </label>
          <div className={valid.amount ? 'invalid-hidden' : "invalid-msg"}>This field is required</div>
          </div>
        <div className="group">
          <label>
            <span>Card</span>
            <div id="card-element" className="field" />
          </label>
        </div>
        <div className="non-refundable-checkbox">
          <Checkbox
            onChange={this.handleNonRefundableCheck}
            style={{color: 'rgba(50,50,50,.7)'}}
            label='I understand that all payments are considered final and non-refundable.' />
        </div>
        <button
          onClick={this.handleSubmit}
          className={this.state.enablePaymentButton ? 'button-enabled': 'button-disabled'}
          disabled={!this.state.enablePaymentButton}
          type="submit">Submit Payment</button>
        <div className="outcome">
          <div className="error" role="alert"></div>
          <div>
            <Message
              compact
              color="green"
              hidden={!this.state.success}
              onClick={this.handleDismiss}>Payment Successful! </Message>
          </div>
        </div>
        {this.state.showDonationSpinner && (
          <div className="donation-loading-overlay">
            <div className="donation-loading-spinner">
              <p>Payment Processing...</p>
              <div className="fading-circle-container">
                <FadingCircle
                  size={50}
                  color={'white'} />
              </div>
            </div>
          </div>
        )}
        <style jsx>{`
          * {
              font-size: 15px;
              font-variant: normal;
              padding: 0;
              margin: 0;
            }

            html {
              height: 100%;
            }

            body {
              background: #E6EBF1;
              align-items: center;
              min-height: 100%;
              display: flex;
              width: 100%;
            }

            form {
              width: 480px;
              margin: 40px auto 200px auto;
            }

            .group {
              background: white;
              box-shadow: 0 7px 14px 0 rgba(49,49,93,0.10),
                          0 3px 6px 0 rgba(0,0,0,0.08);
              border-radius: 4px;
              margin-bottom: 20px;
            }

            label {
              position: relative;
              color: #8898AA;
              font-weight: 300;
              height: 40px;
              line-height: 40px;
              margin-left: 20px;
              display: block;
            }

            .group label:not(:last-child) {
              border-bottom: 1px solid #F0F5FA;
            }

            label > span {
              width: 20%;
              text-align: right;
              float: left;
            }

            .field {
              background: transparent;
              font-weight: 300;
              border: 0;
              color: #31325F;
              outline: none;
              padding-right: 10px;
              padding-left: 10px;
              cursor: text;
              width: 70%;
              height: 40px;
              float: right;
            }

            .field::-webkit-input-placeholder { color: #CFD7E0; }
            .field::-moz-placeholder { color: #CFD7E0; }
            .field:-ms-input-placeholder { color: #CFD7E0; }

            .button-enabled {
              float: left;
              display: block;
              background: rgba(0,196,204,1);
              color: white;
              box-shadow: 0 7px 14px 0 rgba(49,49,93,0.10),
                          0 3px 6px 0 rgba(0,0,0,0.08);
              border-radius: 4px;
              border: 0;
              margin-top: 20px;
              font-size: 15px;
              font-weight: 400;
              width: 100%;
              height: 40px;
              line-height: 38px;
              outline: none;
            }

            .button-disabled {
              float: left;
              display: block;
              background: rgba(80,80,80,.7);
              color: white;
              box-shadow: 0 7px 14px 0 rgba(49,49,93,0.10),
                          0 3px 6px 0 rgba(0,0,0,0.08);
              border-radius: 4px;
              border: 0;
              margin-top: 20px;
              font-size: 15px;
              font-weight: 400;
              width: 100%;
              height: 40px;
              line-height: 38px;
              outline: none;
              cursor: not-allowed;
            }

            .button-enabled:focus {
              background: rgba(0,196,204,1);
            }

            .button-enabled:active {
              background: rgba(0,196,204,1);
            }

            .outcome {
              float: left;
              width: 100%;
              padding-top: 8px;
              min-height: 24px;
              text-align: center;
            }

            .success, .error {
              display: none;
              font-size: 13px;
            }

            .success.visible, .error.visible {
              display: inline;
            }

            .error {
              color: #E4584C;
            }

            .success {
              color: rgb(250,95,91);
            }

            .success .token {
              font-weight: 500;
              font-size: 13px;
            }

            .invalid-msg {
              text-align: center;
              color: red;
              font-size: 12px;
            }

            .invalid-hidden {
              display: none;
            }

            .donation-loading-overlay {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100vh
              background-color: rgba(0,0,0,.7);
            }

            .donation-loading-spinner {
              position: relative;
              top: 50%;
              transform: translateY(-50%);
              color: white;
              text-align: center;
            }

            .donation-loading-spinner > p {
              font-size: 22px;
              font-weight: 200;
              margin-bottom: 10px;
            }

            .fading-circle-container {
              width:50%;
              position: relative;
              left: 50%;
              transform: translateX(-25px);
            }

            .non-refundable-checkbox {
              text-align: center;
            }

            @media (max-width: 768px) {
              form {
                width: 100%;
              }

              .group span {
                display: none;
              }

              label {
              margin-left: 0;
              }

              label > input {
                width: 100%;
                padding-left: 20px;
              }

              #card-element {
                width: 100%;
                padding-left: 20px;
              }
            }
        `}</style>
      </form>
    );
  }
}

export default scriptLoader('https://js.stripe.com/v3/')(StripeJS);
