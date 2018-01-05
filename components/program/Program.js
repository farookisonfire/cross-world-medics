// import HealthInnovationCircles from './HealthInnovationCircles';
// import ProgramCost from './ProgramCost';
// import ProgramDates from './ProgramDates';
// import ApplyNow from './ApplyNow';
// import Footer from '../footer/Footer';

const Program = (props) => {
  const {
    programTitle,
    programSubtitle,
    programDescription
  } = props;

  return (
    <div>
      <div className="program-header">
        <h1>{programTitle}</h1>
        <h2>{programSubtitle}</h2>
        <p>{programDescription}</p>
      </div>
      <style jsx>{`
      .program-header {
        width: 60%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 48px;
        text-align: center;
      }

      .program-header h1{
        font-size: 40px;
        font-weight: 300;
        text-align: center;
        margin-bottom: 8px;
      }
      
      .program-header h2{
        font-size: 18px;
        font-weight: 300;
        text-align: center;
        margin-top: 0;
      }

      .program-header p {
        color: rgba(34,34,34,.7);
        font-size: 16px; 
        margin-top: 30px
      }

      @media (max-width: 768px) {
      .program-header h1{
        font-size: 30px;
      }
    }
    `}</style>
  </div>
  );
};


export default Program;