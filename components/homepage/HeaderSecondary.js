const HeaderSecondary = () => (
  <div className="header-secondary">
    <h1 className="header-secondary-title">MEDICAL INTERNSHIPS ABROAD </h1>
    <h1 className="header-secondary-title">FOR 18-25 YEAR OLDS</h1>
    <style jsx>{`
        .header-secondary {
        text-align: center;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        color: white;
      }

      .header-secondary-title {
        font-size: 48px;
        font-weight: 400;
        margin: 0;
      }

      @media (max-width: 768px) {
        .header-secondary {
          top: 35%;
          color: black;
        }

        .header-secondary-title {
          font-size: 30px;
          font-weight: 500;
          margin: 16px;
        }
      }
    `}</style>
  </div>
);

export default HeaderSecondary;
