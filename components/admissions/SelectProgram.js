import React from 'react';

const SelectProgram = (props) => {
  const {
    handleSelectProgram = () => {},
    selectedProgram
  } = props;

  return (
    <div>
      <div>
        <button
          onClick={() => handleSelectProgram('medical')}
          className={selectedProgram === 'medical' ?
            "select-program-btn selected" :
            "select-program-btn"
        }>Medical</button>
        <button
          onClick={() => handleSelectProgram('nursing')}
          className={selectedProgram === 'nursing' ?
            "select-program-btn selected" :
            "select-program-btn"
        }>Nursing</button>
        <button
          onClick={() => handleSelectProgram('midwifery')}
          className={selectedProgram === 'midwifery' ?
            "select-program-btn selected" :
            "select-program-btn"
        }>Midwifery</button>
        <button
          onClick={() => handleSelectProgram('veterinary')}
          className={selectedProgram === 'veterinary' ?
            "select-program-btn selected" :
            "select-program-btn"
        }>Veterinary</button>
      </div>
      <style jsx>{`
        .select-program-btn {
          width: 25%;
          padding: 20px;
          background-color: rgba(50,50,50,.8);
          color: white;
        }

        .selected {
          background-color: rgba(0,196,204,.8);
          color: white;
        }
        @media (max-width: 768px) {
          .select-program-btn {
            width: 100%;
            padding: 10px;
          }
        }
      `}</style>
    </div>
  )
}

export default SelectProgram;
