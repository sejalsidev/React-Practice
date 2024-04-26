import React from 'react'
import Study from './Study'

const Stud = () => {
    const user = [{name:'sejal', email:'sejal@gmail.com', contactNo:'123'},
                  {name:'keval', email:'keval@gmail.com', contactNo:'111'},
                  {name:'harshiv', email:'harshiv@gmail.com', contactNo:'123'},
                  {name:'Navadiya', email:'navadiya@gmail.com', contactNo:'222'},]
  return (
    <div>
        <h1>Student List</h1>
        {
        user.map((item,i)=>
        <Study data={item}/>
        )
    }
    </div>
  )
}

export default Stud