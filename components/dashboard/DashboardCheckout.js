import 'whatwg-fetch';
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { SERVER_URL, STRIPE_PUBLISHABLE } from '../../lib/constants';

const DashboardCheckout = (props) => {
  const {
    description = 'Secure your position!',
    amount,
    handlePaymentFail = () => {},
    handlePaymentSuccess = () => {},
    closePaymentPortal = () => {},
    label = 'Secure your Position',
    selectedProgramId = '',
    userId = '',
    chargeDescription,
    updateUserData
  } = props;

  const onToken = (token) => {
    const payload = {
      token,
      selectedProgramId,
      amount,
      userId,
      chargeDescription
    };

    const paymentUrl = `${SERVER_URL}/checkout`;

    fetch(paymentUrl, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    })
    .then(response => response.json())
    .then(({ nextStatus, selectedProgramId }) => {
      closePaymentPortal();
      console.log('CHECKOUT NEXT STATUS --->', nextStatus);
      updateUserData(nextStatus, selectedProgramId);
      // resetSelectionSuccess();
      // return handlePaymentSuccess();
    })
    .catch((err) => {
      console.log('Checkout error', err);
      // return handlePaymentFail();
    });
  };

  return (
    <div>
      <StripeCheckout
        image={'https://s3.amazonaws.com/minimal-spaces/single-heart-icon_9_3_17.png'}
        name={'Cross World Medics'}
        description={description}
        amount={amount * 100}
        locale={'auto'}
        panelLabel={'Pay'}
        label={label}
        zipCode
        billingAddress={false}
        allowRememberMe={false}
        token={onToken}
        stripeKey={STRIPE_PUBLISHABLE}
        style={{ width: 175 }} />
    </div>
  );
};

export default DashboardCheckout;
