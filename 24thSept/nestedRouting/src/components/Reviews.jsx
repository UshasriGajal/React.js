import React from 'react'
import { useLocation } from 'react-router-dom';
const Reviews = () => {

  const location = useLocation();
  const { reviews} = location.state ;
  return (
    <div>
      <h3>{reviews}</h3>
    </div>
  )
}

export default Reviews
