import React from 'react'
import {Table} from 'react-bootstrap'

const Table1 = () => {
    const user = [{name:'sejal', email:'sejal@gmail.com', contactNo:'123'},
                  {name:'keval', email:'keval@gmail.com', contactNo:'111'},
                  {name:'harshiv', email:'harshiv@gmail.com', contactNo:'123'},
                  {name:'Navadiya', email:'navadiya@gmail.com', contactNo:'222'},]
  return (
    <div className="Table" >
        <h1>Student Information</h1>
        <Table striped>
            <tr>
                <td>Name</td>
                <td>EmailId</td>
                <td>ContactNo</td>
            </tr>
            {
            user.map((data,i)=>
            data.contactNo === '123'?
            <tr key={i}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.contactNo}</td>
            </tr>:null
            )
            }
        </Table>    
        <div></div>
    </div>
  )
}

export default Table1