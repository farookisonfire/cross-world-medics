import DashboardSelectProgram from './DashboardSelectProgram';
import DashboardPaymentPortal from './DashboardPaymentPortal';
import DashboardWaitlistPortal from './DashboardWaitlistPortal';

const DashboardAccepted = (props) => {
  const {
    programs,
    isProgramSelected,
    closePaymentPortal,
    handleEnrollClick,
    handleWaitlistClick,
    enrollType,
    selectedProgramId,
    userData,
    updateUserData
  } = props;

  let selectedProgram = programs.filter(program => program.id === selectedProgramId);
  selectedProgram = selectedProgram.length ? selectedProgram[0] : {};

  return (
    <div>
      <DashboardSelectProgram
        programs={programs}
        handleEnrollClick={handleEnrollClick}
        handleWaitlistClick={handleWaitlistClick}
      />
      <DashboardPaymentPortal
        isProgramSelected={isProgramSelected}
        closePaymentPortal={closePaymentPortal}
        enrollType={enrollType}
        selectedProgram={selectedProgram}
        userData={userData}
        updateUserData={updateUserData}
      />
      <DashboardWaitlistPortal
        isProgramSelected={isProgramSelected}
        closePaymentPortal={closePaymentPortal}
        enrollType={enrollType}
      />
    </div>
  );
}

export default DashboardAccepted;