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
        <Table.HeaderCell width='4' colSpan='2'>WINTER</Table.HeaderCell>
        <Table.HeaderCell width='3' >SPRING</Table.HeaderCell>
        <Table.HeaderCell width='4' colSpan='2'>SUMMER</Table.HeaderCell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell>1 week</Table.HeaderCell>
        <Table.HeaderCell>2 week</Table.HeaderCell>
        <Table.HeaderCell>Custom</Table.HeaderCell>
        <Table.HeaderCell>1 week</Table.HeaderCell>
        <Table.HeaderCell>2 week</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Jan 7 - Jan 11</Table.Cell>
        <Table.Cell>Jan 7 - Jan 18</Table.Cell>
        <Table.Cell>1-6 week programs are available. Please note your preferred dates in your application.</Table.Cell>
        <Table.Cell>June 3 - June 7</Table.Cell>
        <Table.Cell>May 27 - June 7</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jan 14 - Jan 18</Table.Cell>
        <Table.Cell>Jan 14 - Jan 25</Table.Cell>
        <Table.Cell />
        <Table.Cell>June 10 - June 14</Table.Cell>
        <Table.Cell>June 10 - June 21</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jan 21 - Jan 25</Table.Cell>
        <Table.Cell />
        <Table.Cell />
        <Table.Cell>June 17 - June 21</Table.Cell>
        <Table.Cell>June 24 - July 5</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell>June 24 - June 28</Table.Cell>
        <Table.Cell />
      </Table.Row>
      <Table.Row>
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell>July 1 - July 5th</Table.Cell>
        <Table.Cell />
      </Table.Row>
      <Table.Row>
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell>July 8 - July 12</Table.Cell>
        <Table.Cell />
      </Table.Row>
    </Table.Body>
  </Table>
)

export default ProgramDatesDesktop;