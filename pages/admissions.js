import React, { Component } from 'react';
import Layout from '../components/common/Layout'
import AdmissionsPage from '../components/admissions/AdmissionsPage';

const pageData ={
  pageHeader: 'Beyond Shadowing',
  pageSubheader: 'Comprehensive Pre-Health Internships Abroad',
  programs: [
    {
      key: 'pre-med-pre-health-internship',
      title: 'Pre-Med/Pre-Health Internship',
      subtitle: '(required enrollment in or completion of undergraduate pre-health major)',
      description: 'World class internships designed to accelerate the development and competitiveness of undergraduate students applying to medical school or preparing for a health related field.'
    }
  ]
};

class Admissions extends Component {
  render() {
    return (
      <Layout pageName={this.props.url.pathname}>
        <AdmissionsPage pageData={pageData} />
      </Layout>
    );
  }
}

export default Admissions;
