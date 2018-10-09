import React from 'react';
import { Table } from 'semantic-ui-react';

const ProgramDatesMobile = () => (
  <div>
    <div className="program-dates-tables">
      <Table
        compact
        collapsing
        textAlign='center'
        basic='very'
        columns={1}
        size="small">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>WINTER</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.HeaderCell>1 week</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Jan 7 - Jan 11</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Jan 14 - Jan 18</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Jan 21 - Jan 25</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>2 week</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Jan 7 - Jan 18</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Jan 14 - Jan 25</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
    <div className="program-dates-tables">
      <Table
        compact
        collapsing
        textAlign='center'
        basic='very'
        columns={1}
        size="small">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>SPRING</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.HeaderCell>Custom</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>1-6 week</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
    <div className="program-dates-tables">
      <Table
        compact
        collapsing
        textAlign='center'
        basic='very'
        columns={1}
        size="small">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>SUMMER</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.HeaderCell>1 week</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>June 3 - June 7</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>June 10 - June 14</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>June 17 - June 21</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>June 24 - June 28</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>July 1 - July 5</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>July 8 - July 21</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>2 week</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>May 27 - June 7</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>June 10 - June 21</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>June 24 - July 5</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
    <style jsx>{`
      .program-dates-tables {
        display: flex;
        justify-content: center;
        margin-bottom: 48px;
      }
    `}</style>
</div>
)

export default ProgramDatesMobile;
