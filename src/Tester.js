import React from 'react'
import './Style.css'
import {Button} from 'react-bootstrap';

const Tester = () => {
  return (
    <div>
        <h1 className='primary'>style sheet react js</h1>
        <Button onClick={()=>alert("Hello")}>Click me</Button>
    </div>
  )
}

export default Tester