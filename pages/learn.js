import { Component } from 'react';
import Layout from '../components/common/Layout';
import LearnPage from '../components/learn/LearnPage';

const pageData ={
  pageHeader: 'About Cross World Medics',
  pageSubheader: 'Our mission is to create the highest quality medical programs in the world to accelerate the careers of our interns and uplift the communities we serve. By integrating elements across disciplines we are able to design unparallelled experiences that incorporate specialty shadowing, health innovation and technology, and community health development in some of the most beautiful yet underserved locations in the world.',
  pageDescription: 'By joining Cross World Medics you are becoming a member of one of the fastest growing medical networks in the World. A tribe of doctors, health professionals, and mentors dedicated to overcoming the global health challenges of the 21st century.'
};

class Learn extends Component {
  render() {
    return (
      <Layout>
        <LearnPage pageData={pageData}/>
      </Layout>
    );
  }
}

export default Learn;
