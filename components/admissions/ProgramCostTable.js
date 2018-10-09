import React from 'react';
import { Table } from 'semantic-ui-react';
import { programFees } from '../../lib/constants';

const {
  oneWeek,
  twoWeek
} = programFees;

const ProgramCostTable = ({ selectedProgram }) => {

  const makeRow = (program) => {
    if (program.value === selectedProgram) {
      return (
        <Table.Row key={program.id}>
          <Table.Cell>{program.text}</Table.Cell>
          <Table.Cell>{program.length}</Table.Cell>
          <Table.Cell>{program.cost}</Table.Cell>
        </Table.Row>
      );
    }
    return null;
  };

  return (
    <div>
      <div className="program-cost-header" id="cost">
        <h1>Program Fee</h1>
      </div>
      <div className="program-cost-table">
        <Table textAlign="center" columns={3} basic="very" size="small">
          <Table.Body>
            <Table.Row>
              <Table.Cell>1 Week</Table.Cell>
              <Table.Cell>${oneWeek}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>2 Week</Table.Cell>
              <Table.Cell>${twoWeek}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
      <style jsx>{`
        .program-cost-header {
          width: 60%;
          margin-left: auto;
          margin-right: auto;
        }

        .program-cost-table {
          text-align: center;
          margin-left: auto;
          margin-right: auto;
          margin-top: 50px;
          width: 70%;
        }

        .program-cost-header h1 {
          font-size: 40px;
          font-weight: 300;
          text-align: center;
          padding-top: 50px;
        }

        .program-cost-header p {
          color: rgba(34,34,34,.7);
          font-size: 16px; 
          margin-top: 30px
        
        }
        @media (max-width: 768px) {
          .program-cost-header h1 {
            font-size: 30px;
          }
        }
      `}</style>
    </div>
  );
};

export default ProgramCostTable;
