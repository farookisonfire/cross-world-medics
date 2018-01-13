import { Component } from 'react';
import PageHeader from '../common/PageHeader';

class DashboardPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
    const { activeIndex } = this.state;

    const pageHeader = 'My Dashboard'
    const pageSubheader = 'Page Subheader'
    const pageDescription = 'Page Description'
    
    return (
      <div>
        <div className="top-section">
          <PageHeader
            pageHeader={pageHeader}
            pageSubheader={pageSubheader}
            pageDescription={pageDescription} />
        </div>
        <div className="mid-section">
          <div>CONTENT</div>
        </div>
        <div className="bottom-section">
          <div>BOTTOM CONTENT</div>
        </div>
        <style jsx>{`
          .top-section {
            width: 85%;
            margin-left: auto;
            margin-right: auto;
            margin-top: 100px;
          }

          .mid-section {
            width: 100%;
            background-color: rgb(247,247,247);
          }

          .bottom-section {
            background-color: rgb(238, 238, 238);
          }
        `}</style>
      </div>
    );
  }
}

export default DashboardPage;
