import { Icon } from 'semantic-ui-react';
import Router from 'next/router';
import Link from 'next/link';

const SelectProgramOverlay = (props) => {
  const {
    handleOverlayClose,
    showOverlay
  } = props;

  if (!showOverlay) return null;
  
  return (
    <div className="select-program-overlay">
          <Icon 
            size="huge"
            name="close"
            style={{cursor: 'pointer', position: 'absolute', top: 24, right: 24, zIndex: 11}}
            onClick={handleOverlayClose}
          />
          <div className="programs-container">
            <Link href="/admissions#medical"><a>MEDICAL</a></Link>
            <Link href="/admissions#nursing"><a>NURSING</a></Link>
          </div>
          <style jsx>{`
          .select-program-overlay {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100vh;
            overflow: hidden;
            background-color: rgba(50,50,50,.99);
            z-index: 10;
            color: white;
          }

          .programs-container {
            text-align: center;
            color: white;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
          }
          .programs-container a {
            font-weight: 300;
            font-size: 48px;
            cursor: pointer;
            display: block;
            padding: 24px;
            color: white;
          }
          .programs-container a:hover {
            color: rgba(0,196,204,1);
          }
        `}</style>
        </div>
  )
}

export default SelectProgramOverlay;
