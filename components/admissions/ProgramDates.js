import React from 'react';
import { Table } from 'semantic-ui-react';
import ProgramDatesDesktop from './ProgramDatesDesktop';
import ProgramDatesMobile from './ProgramDatesMobile';
import { programDates } from '../../lib/constants';

const sortByLength = (programs, length, selectedProgram) => {
  return programs.filter(program => program.length === length && program.typeId === selectedProgram);
};

function makeRow(program) {
  const {
    capacity = 20,
    confirmed = 0,
    enrolled = 0,
    manualClose = false,
  } = program;

  const cellColor = (confirmed + enrolled >= capacity || manualClose) ?
    '#FB605B' :
    'rgba(0,0,0,.87)';

  return (
    <Table.Row key={program.id}>
      <Table.Cell style={{ color: cellColor }}>{program.date}</Table.Cell>
    </Table.Row>
  );
}

function makeTable(programDates, header) {
  return (
    <div className="program-dates-tables">
      <Table compact collapsing textAlign='center' basic='very' columns={1} size="small">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>{header}</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {programDates.map(makeRow)}
        </Table.Body>
      </Table>
      <style jsx>{`
          .program-dates-tables {
            display: inline-block;
            padding-left: 20px;
            padding-right: 20px;
            vertical-align: top;
          }
        `}</style>
    </div>
  );
}

const ProgramDates = ({ selectedProgram = 'medical' }) => {
  // const oneWeek = sortByLength(programDates, '1 week', selectedProgram);
  // const twoWeek = sortByLength(programDates, '2 week', selectedProgram);

  return (
    <div>
      <div className="program-dates-header" id="dates">
        <h1>Dates</h1>
        <p className="program-dates-subheader">We are currently accepting applications for 2020. Positions are limited, apply today!</p>
      </div>
      <div className='program-dates-table program-dates-table-mobile'>
        <ProgramDatesMobile />
      </div>
      <div className='program-dates-table program-dates-table-desktop'>
        <ProgramDatesDesktop />
      </div>
      <style jsx>{`
        .program-dates-table {
          display: flex;
          justify-content: center;
        }

        .program-dates-header {
          width: 42.5%;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 24px;
          text-align: center;
        }

        .program-dates-header h1 {
          font-size: 40px;
          font-weight: 300;
          text-align: center;
          padding-top: 50px;
        }

        .program-dates-subheader {
          color: rgba(34,34,34,.7);
          font-size: 16px; 
          margin-top: 30px;
        }

        .table-legend {
          color: #FB605B;
          font-size: .8em;
          font-style: italic;
        }

        .program-dates-table-mobile {
          display: none;
        }
        @media (max-width: 768px) {
          .program-dates-table-desktop {
             display: none;
           }

          .program-dates-table-mobile {
             display: block;
           }

           .program-dates-header h1 {
              font-size: 30px;
            }
         }
      `}</style>
    </div>
  );
};

export default ProgramDates;
