import React from 'react'
import {Table} from 'react-bootstrap'

const Employee1 = () => {
    const users = [{name:'sejal', email:'sejal@gmail.com', address:[{hn:"10",city:"surat",country:"india"},
                                                                    {hn:"125",city:"surat",country:"canada"},
                                                                    {hn:"10",city:"rajkot",country:"australia"}]},
                   {name:'keval', email:'keval@gmail.com', address:[{hn:"125",city:"surat",country:"canada"},
                                                                    {hn:"125",city:"surat",country:"canada"},
                                                                    {hn:"10",city:"rajkot",country:"australia"}]},
                   {name:'harshiv', email:'harshiv@gmail.com', address:[{hn:"10",city:"rajkot",country:"australia"},
                                                                    {hn:"125",city:"surat",country:"canada"},
                                                                    {hn:"10",city:"rajkot",country:"australia"}]},
                   {name:'Navadiya', email:'navadiya@gmail.com', address:[{hn:"15",city:"baroda",country:"india"},
                                                                    {hn:"125",city:"surat",country:"canada"},
                                                                    {hn:"10",city:"rajkot",country:"australia"}]}]
  return (
    <div>
        <h1>List with nested Array</h1>
        <Table>
        <tbody>
            <tr>
                <td>No.</td>
                <td>Name</td>
                <td>Email</td>
                <td>Address</td>
            </tr>
            {
            users.map((data,i)=>
            
                <tr key={i}>
                    <td>{i+1}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>
                    <Table>
                        {data.address.map((item)=>
                        <tr>
                            <td>{item.hn}</td>
                            <td>{item.city}</td>
                            <td>{item.country}</td>
                        </tr>
                        )}
                        </Table>
                        </td>
                </tr>
            )  
            }
            </tbody>
        </Table>
       
    </div>
  )
}

export default Employee1