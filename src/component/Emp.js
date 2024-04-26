import React from 'react'
import { useParams } from 'react-router'
const Emp = () => {
    const params = useParams();
    const {name} = params;
    console.warn(name)
  return (
    <div>
        <h1>{name}</h1>
       
    </div>
  )
}

export default Emp