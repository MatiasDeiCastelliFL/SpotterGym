import React from 'react'
import ProfessorDetails from '../../../Components/ProfessorDetails';


function CalificarProfesor({ params }: { params: { profesor: string } }) {
  return (
    <div>
        <ProfessorDetails params={params} />
    </div>
  )
}

export default CalificarProfesor;
