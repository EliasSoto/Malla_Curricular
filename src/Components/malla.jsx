import React from 'react';
import './styles.css';

export default function Malla({ subjects, handleSubjectClick, getBackgroundColor }) {

 
  return (
    <div className="container_malla">
    
      {subjects.map((subject, index) => (
        
          <div
            key={index}
            className="elemento_malla"
            onClick={() => handleSubjectClick(subject)}
            style={{
              gridRow: subject.semester % 2 === 0 ? 2 : 1, 
              backgroundColor: getBackgroundColor(subject.name),
            }}
          >
            <div>{subject.name}</div>

          </div>
        ))
      }
    </div>
  );
}
