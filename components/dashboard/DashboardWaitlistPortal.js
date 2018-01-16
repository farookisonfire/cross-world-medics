import { Portal, Segment, Button } from 'semantic-ui-react';

const styles = {
  segmentStyle: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: '25%',
    marginLeft: 'auto',
    marginRight: 'auto',
    zIndex: '1000',
    width: '75%',
    textAlign: 'center',
    backgroundColor: 'rgba(250,250,250,.95)',
  },
  
  buttonStyle: {
    position: 'absolute',
    left: 24,
    top: 24,
    cursor: 'pointer'
  },

  portalHeaderStyle: {
    fontWeight: 300,
    fontSize: 28
  },

  portalContentStyle: {
    margin: '24px auto 0 auto',
    maxWidth: 280,
    textAlign: 'center'
  }
}

const DashboardWaitlistPortal = (props) => {
  const {
    closePaymentPortal = () => {},
    isProgramSelected,
    enrollType
  } = props;

  const {
    segmentStyle,
    buttonStyle,
    portalContentStyle,
    portalHeaderStyle
  } = styles;

  return (
    <Portal open={isProgramSelected && enrollType === 'waitlist'}>
      <Segment style={segmentStyle}>
        <div style={portalContentStyle}>
          <Button
            circular
            onClick={closePaymentPortal}
            style={buttonStyle}
            icon="long arrow left" />
          <h2 style={portalHeaderStyle}>Join the Waitlist</h2>
        </div>
      </Segment>
    </Portal>
  );
}

export default DashboardWaitlistPortal;
