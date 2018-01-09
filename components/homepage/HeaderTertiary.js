const HeaderTertiary = (props) => {
  const { handleOverlayOpen } = props;
  
  return (
    <div className="header-tertiary">
      <h1 className="header-tertiary-title">1-6 WEEKS</h1>
      <button 
        onClick={handleOverlayOpen}
        className="header-cta-button">Choose Your Program
      </button>
      <style jsx>{`
          .header-tertiary {
          text-align: center;
          position: absolute;
          top: 65%;
          transform: translateY(-50%);
          width: 100%;
          color: white;
        }

        .header-tertiary-title {
          font-size: 22px;
          font-weight: 300;
          margin: 24px;
        }

        .header-cta-button {
          cursor: pointer;
          font-size: 40px;
          font-weight: 300;
          text-align: center;
          padding-left: 24px;
          padding-right: 24px;
          padding-top: 16px;
          padding-bottom: 16px;
          transition-duration: .5s;
          border: 1px solid rgba(51,51,51,1);
          background-color: rgba(0,196,204,.8);
          color: white;
        }

        .header-cta-button:hover {
          color: rgba(0,196,204,1);
          background-color: rgba(250,250,250,.9);
          border: 1px solid rgba(51,51,51,1);
          border-radius: 4px;
        }

        @media (max-width: 768px) {
          .header-tertiary {
            top: 55%;
            color: black;
          }
          .header-cta-button {
            font-size: 22px;
          }
        }
      `}</style>
    </div>
  )
};

export default HeaderTertiary;
