import { Divider } from 'semantic-ui-react';

const PageHeader = (props) => {
  const {
    pageHeader = '',
    pageSubheader = '',
    pageDescription = ''
  } = props;

  return (
    <div>
      <div className="page-header">
        <h1 className="unstyled-header">{pageHeader}</h1>
      </div>
      <Divider />
      <div className="page-subheader">
        <h1>{pageSubheader}</h1>
        <p>{pageDescription}</p>
      </div>
      <style jsx>{`
        .page-header {
          display: flex;
        }
        
        .page-header h1 {
          font-size: 36px;
          font-weight: 300;
          margin-top: 0;
          margin-bottom: 0;
        }

        .page-subheader h1 {
          margin-top: 30px;
          font-weight: 300;
          font-size: 24px;
        }
        
        .page-subheader p {
          color: rgba(34,34,34,.7);
          font-size: 16px;
          margin-bottom: 30px;
        }

        .unstyled-header {
          width: 50%;
        }

        @media (max-width: 768px) {
          .page-header {
            flex-direction: column;
          }
          
          .page-header h1 {
            font-size: 30px;
          }

          .unstyled-header {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
};

export default PageHeader;
