import React from 'react';
import { Table } from 'semantic-ui-react';

const ProgramDatesDesktop = () => (
  <Table
    textAlign='center'
    compact
    collapsing
    textAlign='center'
    basic='very'
    size='small'>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan="1" >1 WEEK</Table.HeaderCell>
        <Table.HeaderCell colSpan="1">2 WEEK</Table.HeaderCell>
        <Table.HeaderCell colSpan="1">4 WEEK</Table.HeaderCell>
      </Table.Row>
      <Table.Row>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>June 1 - June 5</Table.Cell>
        <Table.Cell>June 1 - June 12</Table.Cell>
        <Table.Cell>June 1 - June 26</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>June 15 - June 19</Table.Cell>
        <Table.Cell>June 15 - June 26</Table.Cell>
        <Table.Cell>June 15 - June 26</Table.Cell>
        <Table.Cell />
      </Table.Row>
      <Table.Row>
        <Table.Cell>July 6 - July 10 </Table.Cell>
        <Table.Cell>July 6 - July 17 </Table.Cell>
        <Table.Cell>July 6 - July 31</Table.Cell>
        <Table.Cell />
      </Table.Row>
      <Table.Row>
      <Table.Cell>July 20 - July 24 </Table.Cell>
      <Table.Cell>July 20 - July 31</Table.Cell>
        <Table.Cell />
      </Table.Row>
      <Table.Row>
      <Table.Cell>Aug 3 - Aug 7 </Table.Cell>
      <Table.Cell>Aug 3 - Aug 14</Table.Cell>
        <Table.Cell />
      </Table.Row>
      <Table.Row>
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
      </Table.Row>
    </Table.Body>
  </Table>
)

export default ProgramDatesDesktop;
