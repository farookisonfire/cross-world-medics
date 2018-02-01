import PaymentHeader from './PaymentHeader';
import CheckoutForm from './CheckoutForm';

const PaymentPage = () => (
  <div>
    <div className="payment-top">
      <PaymentHeader />
    </div>
    <div className="payment-form-container">
      <CheckoutForm />
    </div>
    <style jsx>{`
      .payment-top {
        width: 85%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 100px;
      }

      .payment-form-container {
        background-color: rgb(238,238,238)
        width: 100%;
        padding: 40px;

      }
    `}</style>
  </div>
)

export default PaymentPage;