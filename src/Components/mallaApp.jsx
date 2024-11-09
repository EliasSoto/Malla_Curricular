import React, { useState, useEffect } from 'react';
import { Stack } from '@mantine/core';
import Titulo from './titulo';
import './styles.css';
import Semestres from './semestres';
import PiePagina from './pie_pagina';


export default function MallaApp() {
  const [subjects, setSubjects] = useState([]); 
  const [highlighted, setHighlighted] = useState({ prev: [], next: [] });
  const [clickedSubject, setClickedSubject] = useState(null); 

  // Cargar datos con useEffect
  useEffect(() => {
    fetch('/ramos.json')
      .then((response) => response.json())
      .then((data) => setSubjects(data.subjects))
      .catch((error) => console.error('Error al cargar los datos:', error));
  }, []);

  // Función para manejar el clic en una materia
  const handleSubjectClick = (subject) => {
    setHighlighted({ prev: subject.prev, next: subject.next });
    setClickedSubject(subject.name);
  };

  // Función para verificar si la materia es previa
  function isPrev(subjectName) {
    return highlighted.prev.includes(subjectName);
  }

  // Función para verificar si la materia es siguiente
  function isNext(subjectName) {
    return highlighted.next.includes(subjectName);
  }

  // Función para obtener el color de fondo basado en si es previa, siguiente o ninguna
  function getBackgroundColor(subjectName) {
    // Cambia el color al hacer clic en una materia
    if (clickedSubject === subjectName) return '#C5F0B9'; 
    if (isPrev(subjectName)) return '#DBF7FC';
    if (isNext(subjectName)) return '#BEEBE3';
    
  }

  const filteredSubjects = (subjects, semesters) => {
    return subjects.filter(subject => semesters.includes(subject.semester));
  };

  const semesterPairs = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
    [11]
  ];

  const años = ['Primer Año', 'Segundo Año', 'Tercer Año', 'Cuarto Año', 'Quinto Año', 'Sexto Año', 'Séptimo Año'];
  
  return (

    <Stack className='pagina_malla'>
      <Titulo />

      {semesterPairs.map((semesters, index) => (
        <Semestres 
          key={index}
          subjects={subjects}
          highlighted={highlighted}
          handleSubjectClick={handleSubjectClick}
          getBackgroundColor={getBackgroundColor}
          filteredSubjects={filteredSubjects}
          semesters={semesters} 
          año={años[index]}
        />
      ))}
      <PiePagina />

   
    </Stack>

  );
}
