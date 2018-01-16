import { Component } from 'react';
import PageHeader from '../common/PageHeader';
import DashboardApplied from './DashboardApplied';
import DashboardAccepted from './DashboardAccepted';
import DashboardEnrolled from './DashboardEnrolled';
import { USER_STATUS } from '../../lib/constants';

class DashboardPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  componentDidMount() {
    this.props.getPrograms();
  }

  render() {
    const {
      programs,
      isProgramSelected,
      selectedProgramId,
      closePaymentPortal,
      handleEnrollClick,
      handleWaitlistClick,
      enrollType,
      userData,
      updateUserData
    } = this.props;

    const { activeIndex } = this.state;
    const { status } = userData;

    const pageHeader = 'My Dashboard'
    const pageSubheader = 'Page Subheader'
    const pageDescription = 'Page Description'

    const resolveDashboardPageToRender = (userStatus) => {
      const {
        APPLIED,
        ACCEPTED,
        ENROLLED,
        ENROLLED_WAITLIST,
        CONFIRMED,
        DENIED,
        DEFERRED
      } = USER_STATUS
      
      switch(userStatus) {
        case APPLIED: return (
          <DashboardApplied />
        );
        case ACCEPTED: return (
          <DashboardAccepted
            userData={userData}
            programs={programs}
            selectedProgramId={selectedProgramId}
            isProgramSelected={isProgramSelected}
            enrollType={enrollType}
            closePaymentPortal={closePaymentPortal}
            handleEnrollClick={handleEnrollClick}
            handleWaitlistClick={handleWaitlistClick}
            updateUserData={updateUserData}
          />);
        case ENROLLED: return (
          <DashboardEnrolled
            userData={userData}
            programs={programs}
          />
        );
        default: return <div></div>
      }
    }

    const dashboardPageToRender = resolveDashboardPageToRender(status);
    
    return (
      <div>
        <div className="top-section">
          <PageHeader
            pageHeader={pageHeader}
            pageSubheader={pageSubheader}
            pageDescription={pageDescription} />
        </div>
        <div className="mid-section">
          { dashboardPageToRender }
        </div>
        <div className="bottom-section">
          <div></div>
        </div>
        <style jsx>{`
          .top-section {
            width: 85%;
            margin-left: auto;
            margin-right: auto;
            margin-top: 100px;
          }

          .mid-section {
            width: 85%;
            margin-left: auto;
            margin-right: auto;
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
