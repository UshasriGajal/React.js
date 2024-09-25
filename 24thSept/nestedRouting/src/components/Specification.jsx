import React from 'react'
import { useLocation } from 'react-router-dom';

const Specification = () => {
  const location = useLocation();
  const { specification} = location.state 
  return (
    <div>
      <ul>
      {specification.map((element)=>(
        <li key={element.id}>
          {element}
        </li>
      ))}
      </ul>
      
      
    </div>
  )
}

export default Specification
