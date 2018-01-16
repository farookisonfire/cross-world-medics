import { Component } from 'react';
import PageHeader from '../common/PageHeader';
import Program from '../program/Program';
import ProgramCost from './ProgramCost';
import SelectProgram from './SelectProgram';
import ProgramDates from './ProgramDates';
import { typeformURL } from '../../lib/constants';

class AdmissionsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProgram: 'medical'
    }

    this.handleSelectProgram = this.handleSelectProgram.bind(this);
  }

  handleSelectProgram(selectedProgramId) {
    this.setState({selectedProgram: selectedProgramId});
  }
  
  componentDidMount() {
    if (!document && !document.location) return;
    if (document.location.hash) {
      const selectedProgram = document.location.hash.substring(1);
      this.setState({ selectedProgram });
    }
  }
  
  render() {
    const { selectedProgram } = this.state;

    const {
      pageData,
      handleSelectProgram
    } = this.props;
    
    const {
      pageHeader,
      pageSubheader,
      programs
    } = pageData;

    const programsToRender = programs.map((program) => {
      return (
        <Program
          key={program.key}
          programTitle={program.title}
          programSubtitle={program.subtitle}
          programDescription={program.description}
        />
      )
    })

    return (
      <div>
        <div className="admissions-top">
          <PageHeader
            pageHeader={pageHeader}
            pageSubheader={pageSubheader} />
        </div>
        <SelectProgram
          handleSelectProgram={this.handleSelectProgram}
          selectedProgram={selectedProgram}
        />
        <div className="program-description-container">
          {programsToRender}
        </div>
        <div>
          <ProgramCost />
        </div>
        <div>
          <ProgramDates />
        </div>
        <div className="admissions-cta-container">
          <p 
            onClick={() => window.open(`${typeformURL}webadmissions`, '_blank')}
            className="admissions-cta-button">Apply Now
          </p>
        </div>
        <style jsx>{`
          .admissions-top {
            width: 85%;
            margin-left: auto;
            margin-right: auto;
            padding-top: 100px;
          }

          .program-description-container {
            padding-bottom: 54px;
          }
          
          .admissions-cta-container {
            text-align: center;
            margin-top: 70px;
            margin-bottom: 70px;
          }

          .admissions-cta-button {
            cursor: pointer;
            font-size: 40px;
            font-weight: 300;
            text-align: center;
            padding-left: 24px;
            padding-right: 24px;
            padding-top: 16px;
            padding-bottom: 16px;
            transition-duration: .5s;
            border: 1px solid rgba(51,51,51,1);
            background-color: rgba(0,196,204,.8);
            color: white;
            width: 300px;
            margin: 0 auto;
          }

          .admissions-cta-button:hover {
            color: rgba(0,196,204,1);
            background-color: rgba(250,250,250,.9);
            border: 1px solid rgba(51,51,51,1);
            border-radius: 4px;
          }
        `}</style>
      </div>
    );
  }
}

export default AdmissionsPage;
