import React from 'react';
import ProgramCostTable from './ProgramCostTable';

const ProgramCost = ({selectedProgram}) => (
  <div className="program-cost">
    <ProgramCostTable selectedProgram={selectedProgram}/>
    <style jsx>{`
      .program-cost {
        background-color: rgb(247,247,247);
        text-align: center;
        padding-bottom: 54px;
      }

      .program-cost h1 {
        font-size: 40px;
        font-weight: 300;
        text-align: center;
        padding-top: 50px;
      }

      .program-cost p {
        color: rgba(34,34,34,.7);
        font-size: 16px; 
        margin-top: 30px
      }
    `}</style>
  </div>
);

export default ProgramCost;