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
            <Table.HeaderCell>1 WEEK</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>June 1 - June 5</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>June 15 - June 19</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>July 6 - July 10</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>July 20 - July 24</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>August 3 - August 7</Table.Cell>
          </Table.Row>
          {/* <Table.Row>
            <Table.HeaderCell>2 week</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>June 1 - June 12</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>June 15 - June 26</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>July 6 - July 17</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>July 20 - July 31</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>August 3 - August 14</Table.Cell>
          </Table.Row> */}
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
            <Table.HeaderCell>2 WEEK</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
        <Table.Row>
            <Table.Cell>June 1 - June 12</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>June 15 - June 26</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>July 6 - July 17</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>July 20 - July 3</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>August 3 - August 14</Table.Cell>
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
            <Table.HeaderCell>4 WEEK</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>June 1 - June 26</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>July 6 - July 31</Table.Cell>
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
