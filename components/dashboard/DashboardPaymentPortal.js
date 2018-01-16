import { Portal, Segment, Button } from 'semantic-ui-react';
import { ENROLLMENT_FEE, programFees } from '../../lib/constants';
import { resolveChargeDescription } from '../../lib/utils';
import DashboardCheckout from './DashboardCheckout';

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
    fontSize: 28,
    marginBottom: 24
  },

  portalContentStyle: {
    margin: '24px auto 0 auto',
    maxWidth: 280,
    textAlign: 'center'
  },

  checkoutContainer: {
    marginTop: 24,
    marginBottom: 48
  }
}

const DashboardPaymentPortal = (props) => {
  const {
    closePaymentPortal = () => {},
    isProgramSelected,
    enrollType,
    selectedProgram,
    userData,
    updateUserData
  } = props;

  const {
    segmentStyle,
    buttonStyle,
    portalContentStyle,
    portalHeaderStyle,
    checkoutContainer
  } = styles;

  const { userId, status } = userData;
  const { lengthId, id } = selectedProgram;
  const programFee = programFees[lengthId];
  const chargeDescription = resolveChargeDescription(status);

  return (
    <Portal open={isProgramSelected && enrollType === 'enroll'}>
      <Segment style={segmentStyle}>
        <div style={portalContentStyle}>
          <Button
            circular
            onClick={closePaymentPortal}
            style={buttonStyle}
            icon="long arrow left" />
          <h2 style={portalHeaderStyle}>Secure Your Position</h2>
          <p>Program Fee: ${programFee}</p>
          <hr/>
          <p>Due Today: ${ENROLLMENT_FEE}</p>
        </div>
        <div style={checkoutContainer}>
          <DashboardCheckout
            description={'Secure your position!'}
            amount={'300'}
            handlePaymentFail
            handlePaymentSuccess
            closePaymentPortal={closePaymentPortal}
            label={'Secure your Position'}
            selectedProgramId={id}
            userId={userId}
            chargeDescription={chargeDescription}
            updateUserData={updateUserData}
          />
        </div>
      </Segment>
    </Portal>
  );
}

export default DashboardPaymentPortal;
