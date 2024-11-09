import React from 'react';
import Malla from './malla';

export default function Semestres({ subjects, highlighted, handleSubjectClick, getBackgroundColor, filteredSubjects, semesters, año }) {
    const semestres = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];
    
    return (
    <div className='content_one'>

        <div className='año'>{año}</div> 

        {semesters.length > 1 && (
                <>
                    <div className='semestre_1'>
                        <div className='content_semester'>
                        Semestre {semestres[semesters[0] - 1]}
                        </div> 
                    </div>
                    <div className='semestre_2'>Semestre {semestres[semesters[1] - 1]}</div>
                </>
            )}
            {semesters.length === 1 && (
                <div className='semestre_1'>Semestre {semestres[semesters[0] - 1]}</div>
        )}

        {semesters.map((semester, index) => (
            <div key={index} className={`ramos_semestre_${index+1}`}>
           
                <Malla 
                    subjects={filteredSubjects(subjects, [semester])} // Filtramos por semestre aquí
                    highlighted={highlighted} 
                    handleSubjectClick={handleSubjectClick} 
                    getBackgroundColor={getBackgroundColor}
                />
            </div>
        ))}

    </div>
  );
}
