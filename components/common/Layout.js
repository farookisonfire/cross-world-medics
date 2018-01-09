import { Component } from 'react';
import Head from './Head';
import Navbar from '../navbar/Navbar';

class Layout extends Component {
  render() {
    return (
      <div>
        <Head />
        <Navbar />
        {this.props.children}
      </div>
    )
  }
}

export default Layout;
