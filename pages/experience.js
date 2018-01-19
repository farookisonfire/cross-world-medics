import { Component } from 'react';
import Layout from '../components/common/Layout';
import ExperiencePage from '../components/experience/ExperiencePage';

const pageData = { pageHeader: 'The Experience' };

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
