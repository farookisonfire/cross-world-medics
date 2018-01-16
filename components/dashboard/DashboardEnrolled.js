const DashboardEnrolled = (props) => {
  const { userData, programs } = props;
  const { selectedProgramId } = userData;
  
  let selectedProgram = programs.filter(program => program.id === selectedProgramId);
  selectedProgram = selectedProgram.length ? selectedProgram[0] : {};

  const {
    type,
    length,
    date,
  } = selectedProgram;

  return (
    <div>
      Selected Program Details
    </div>
  );
}

export default DashboardEnrolled;
