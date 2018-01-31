import DonateHeader from './DonateHeader';
import CheckoutForm from './CheckoutForm';

const DonatePage = () => (
  <div>
    <div className="donate-top">
      <DonateHeader />
    </div>
    <div className="donate-form-container">
      <CheckoutForm />
    </div>
    <style jsx>{`
      .donate-top {
        width: 85%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 100px;
      }

      .donate-form-container {
        background-color: rgb(238,238,238)
        width: 100%;
        padding: 40px;

      }
    `}</style>
  </div>
)

export default DonatePage;