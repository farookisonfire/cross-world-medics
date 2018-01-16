import { Component } from 'react';
import Layout from '../components/common/Layout';
import DashboardPage from '../components/dashboard/DashboardPage';
import DashboardAuth from '../components/dashboard/DashboardAuth';
import { fetchUserData } from '../lib/networkHelper';


class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state ={
      inputText: '',
      inputError: false,
      userData: undefined,
    }
    
    this.handleInputChange=this.handleInputChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleInputChange(e, data) {
    const inputText = data.value;
    this.setState({ inputText, inputError: false });
  }

  handleInputSubmit() {
    const { inputText } = this.state;
    fetchUserData(inputText)
      .then(userData => {
        if (userData) return this.setState({userData});
        else return this.setState({ inputError: true })
      });
  }

  handleKeyPress(e) {
    if(e.key === 'Enter') this.handleInputSubmit();
  }

  render() {
    console.log('Dashboard Component State ---->', this.state)
    const {
      inputText,
      inputError,
      userData,
    } = this.state;

    const DashboardPageToRender = userData ?
      (<DashboardPage
        userData={userData}/>) :
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
