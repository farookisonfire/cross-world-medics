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
      userData: undefined
    }
    
    this.handleInputChange=this.handleInputChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
  }

  handleInputChange(e, data) {
    const inputText = data.value;
    this.setState({inputText});
  }

  handleInputSubmit() {
    const { inputText } = this.state;
    fetchUserData(inputText)
      .then(userData => {
        if (userData) {
          this.setState({userData});
        }
      });
    console.log('submit -->', inputText);
  }

  render() {
    console.log('Dashboard Component State ---->', this.state)
    const { inputText, userData } = this.state;

    const DashboardPageToRender = userData ?
      (<DashboardPage userData={userData}/>) :
      (<DashboardAuth
        handleInputChange={this.handleInputChange}
        handleInputSubmit={this.handleInputSubmit}
        inputText={inputText}
      />);

    return(
      <Layout>
        {DashboardPageToRender}
      </Layout>
    );
  }
}

export default Dashboard;
