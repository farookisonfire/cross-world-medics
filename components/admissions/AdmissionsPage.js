import { Component } from 'react';
import PageHeader from '../common/PageHeader';
import Program from '../program/Program';

class AdmissionsPage extends Component {
  render() {
    const {
      pageHeader,
      pageSubheader,
      programs
    } = this.props.pageData;

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
        <div>
          {programsToRender}
        </div>
        <style jsx>{`
          .admissions-top {
          width: 85%;
          margin-left: auto;
          margin-right: auto;
          padding-top: 100px;
          }
        `}</style>
      </div>
    );
  }
}

export default AdmissionsPage;
