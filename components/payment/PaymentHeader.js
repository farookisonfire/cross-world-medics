import { Divider } from 'semantic-ui-react';

const PaymentHeader = () => (
  <div>
    <div className="payment-header">
      <h1>Pay Your Enrollment Fee</h1>
      <Divider />
    </div>
    <div className="payment-subheader">
      <h1>You are one step away from securing your position!</h1>
    </div>
    <style jsx>{`
    .payment-header h1 {
      font-weight: 300;
      font-size: 36px;
      margin-bottom: 20px;
    }

    .payment-subheader h1 {
      margin-top: 30px;
      font-weight: 300;
      font-size: 24px;
    }

    .payment-subheader p {
      color: rgba(34,34,34,.7);
      font-size: 16px;
    }  
    `}</style>
  </div>
);

export default PaymentHeader;
