import { Component } from 'react';
import VidLoop from './VidLoop';
import HeaderPrimary from './HeaderPrimary';
import HeaderSecondary from './HeaderSecondary';
import HeaderTertiary from './HeaderTertiary';
import SelectProgramOverlay from './SelectProgramOverlay';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showOverlay: false
    }
    this.handleOverlayOpen = this.handleOverlayOpen.bind(this);
    this.handleOverlayClose = this.handleOverlayClose.bind(this);
  }
    handleOverlayOpen() {
      this.setState({showOverlay: true});
    }
    
    handleOverlayClose() {
      this.setState({showOverlay: false});
    }
  
  render() {
    const {
      handleSelectProgram,
    } = this.props;

    const {
      showOverlay
    } = this.state;

    return (
      <div>
        <VidLoop />
        <HeaderSecondary />
        <HeaderTertiary handleOverlayOpen={this.handleOverlayOpen} />
        <SelectProgramOverlay 
          showOverlay={showOverlay}
          handleOverlayClose={this.handleOverlayClose}/>
      </div>
    );
  }
}

export default HomePage;
