import { Component } from 'react';
import Layout from '../components/common/Layout';
import ContactPage from '../components/contact/ContactPage';

const pageData = {
  pageHeader: 'Contact',
  pageSubheader: 'We\'d love to hear from you.',
  pageDescription: 'We are proud to have a distributed, remote team, working from around the world to develop and lead our immersion experiences. For inquiries, please reach us at support@crossworldmedics.org.'
};

class Contact extends Component {
  render() {
    return (
      <Layout>
        <ContactPage pageData={pageData}/>
      </Layout>
    );
  }
}

export default Contact;
