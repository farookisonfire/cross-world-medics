import { Input, Button } from 'semantic-ui-react'

const styles = {
  btnStyle: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: '0.28rem',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: '0.28rem'
  },
}

const DashboardAuth = (props) => {
  const {
    btnStyle,
    inputStyle
  } = styles;

  const {
    inputText,
    inputError,
    handleInputChange,
    handleInputSubmit,
    handleKeyPress,
  } = props;

  return (
    <div>
      <div className="auth-page">
        <div className="auth-container">
          <p>Please enter your CWM-ID below</p>
          <Input
            error={inputError}
            placeholder="CWM-ID"
            value={inputText}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <Button
            style={btnStyle}
            className="auth-btn"
            onClick={handleInputSubmit}>
            Go
          </Button>
          {inputError && <p className="auth-error">The CWM-ID is invalid.</p>}
        </div>
      </div>
      <style jsx>{`
        .auth-page {
          height: 100vh;
          width: 100%;
          background-color: rgb(238, 238, 238);
        }
        .auth-container {
          border: 1px solid rgba(50,50,50,.2);
          box-shadow: 5px 5px 5px rgba(60,60,60,.2);
          background-color: white;
          padding: 100px 20px;
          width: 300px;
          margin: 0 auto;
          position: relative;
          top: 50%;
          transform: translateY(-50%);
          text-align: center;
        }

        .auth-btn {
          border-top-left-radius: 0;
          border-top-right-radius: 0.285714rem; 
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0.285714rem;
        }

        .auth-error {
          font-size: 10px;
          color: rgba(250,40,40,.8);
          margin-top: 8px;
        }
      `}</style>
    </div>
  );
}

export default DashboardAuth;
