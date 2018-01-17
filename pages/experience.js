import { Component } from 'react';
import Layout from '../components/common/Layout';
import ExperiencePage from '../components/experience/ExperiencePage';
import { experiencePageData } from '../lib/constants';

const pageData = {
  pageHeader: 'The Experience'
};

pageData.sections = experiencePageData;

class Experience extends Component {
  render() {
    return (
      <Layout>
        <ExperiencePage pageData={pageData}/>
      </Layout>
    );
  }
}

export default Experience;
