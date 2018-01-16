import { Component } from 'react';
import Layout from '../components/common/Layout';
import DashboardPage from '../components/dashboard/DashboardPage';
import DashboardAuth from '../components/dashboard/DashboardAuth';
import { fetchUserData, fetchPrograms } from '../lib/networkHelper';


class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state ={
      inputText: '',
      inputError: false,
      userData: undefined,
      programs: [],
      isProgramSelected: false,
      enrollType: '',
      selectedProgramId: ''
    }
    
    this.handleInputChange=this.handleInputChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.getPrograms = this.getPrograms.bind(this);
    this.closePaymentPortal = this.closePaymentPortal.bind(this);
    this.handleEnrollClick = this.handleEnrollClick.bind(this);
    this.handleWaitlistClick = this.handleWaitlistClick.bind(this);
    this.updateUserData = this.updateUserData.bind(this);
  }

  handleInputChange(e, data) {
    const inputText = data.value;
    this.setState({ inputText, inputError: false });
  }

  handleInputSubmit() {
    const { inputText } = this.state;
    fetchUserData(inputText)
      .then((userData) => {
        if (userData) return this.setState({ userData });
        else return this.setState({ inputError: true })
      });
  }

  handleKeyPress(e) {
    if(e.key === 'Enter') this.handleInputSubmit();
  }

  getPrograms() {
    fetchPrograms()
      .then((programs) => {
        if (programs) return this.setState({programs});
      })
  }

  closePaymentPortal() {
    this.setState({
      isProgramSelected: false,
      selectedProgramId: ''
    });
  }

  handleEnrollClick(e, data) {
    const { id } = data;
    this.setState({
      selectedProgramId: id,
      isProgramSelected: true,
      enrollType: 'enroll'
    });
  }

  handleWaitlistClick(e, data) {
    const { id } = data;
    this.setState({
      selectedProgramId: id,
      isProgramSelected: true,
      enrollType: 'waitlist'
    });
  }

  updateUserData(nextStatus, selectedProgramId) {
    const { userData } = this.state;
    const updatedUser = Object.assign({}, userData, { status: nextStatus, selectedProgramId });
    this.setState({ userData: updatedUser })
  }

  render() {
    console.log('Dashboard Component State ---->', this.state)
    const {
      inputText,
      inputError,
      userData,
      programs,
      isProgramSelected,
      selectedProgramId,
      enrollType
    } = this.state;

    const DashboardPageToRender = userData ?
      (<DashboardPage
        userData={userData}
        programs={programs}
        getPrograms={this.getPrograms}
        isProgramSelected={isProgramSelected}
        enrollType={enrollType}
        selectedProgramId={selectedProgramId}
        closePaymentPortal={this.closePaymentPortal}
        handleEnrollClick={this.handleEnrollClick}
        handleWaitlistClick={this.handleWaitlistClick}
        updateUserData={this.updateUserData}
      />) :
      (<DashboardAuth
        handleInputChange={this.handleInputChange}
        handleInputSubmit={this.handleInputSubmit}
        handleKeyPress={this.handleKeyPress}
        inputText={inputText}
        inputError={inputError}
      />);

    return(
      <Layout>
        {DashboardPageToRender}
      </Layout>
    );
  }
}

export default Dashboard;
