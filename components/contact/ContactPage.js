import PageHeader from '../common/PageHeader';

const ContactPage = (props) => {
  const { pageData } = props;
  
  const {
      pageHeader,
      pageSubheader,
      pageDescription
    } = pageData;
  
  return (
    <div>
      <div className="contact-top">
        <PageHeader
          pageHeader={pageHeader}
          pageSubheader={pageSubheader}
          pageDescription={pageDescription} />
      </div>
      <style jsx>{`
        .contact-top {
          width: 85%;
          margin-left: auto;
          margin-right: auto;
          margin-top: 100px;
          margin-bottom: 50px;
        }
      `}</style>
    </div>
  )
};

export default ContactPage;