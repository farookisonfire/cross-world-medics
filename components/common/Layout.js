import Head from './Head';
import Navbar from '../navbar/Navbar';

const Layout = props => (
  <div>
    <Head />
    <Navbar />
    {props.children}
  </div>
);

export default Layout;
