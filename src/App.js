import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Navigate,Route, Routes} from 'react-router-dom'
import Table from 'react-bootstrap/Table'

import Test from './Test';
import User from './User';
import Student from './Student';
import Profile from './Profile';
import Login from './Login';
import Users from './component/Users';
import Members from './component/Members';
import Tester from './Tester';
import Table1 from './Table';
import Employee1 from './component/Employee';
import Stud from './Stud';
import About from './component/About';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Page404 from './component/Page404';
import Emp from './component/Emp';
import Filter from './component/Filter';
import Cannel from './component/Cannel';
import Contact from './component/Contact';
import Company from './component/Company';
import Others from './component/Others';
import Protected from './component/Protected';




function App() {
  const [data,setdata]=useState([]);
  useEffect(()=> {
    fetch('https://fakestoreapi.com/products').then((result)=>{
      result.json().then((resp)=>{
        // console.log("result",resp)
        setdata(resp);
      })
})
},[])
console.warn(data)
  
  //  const [data,setData]=useState(0);
  //  function updateData(){
  //      setData(data+1)
  //  }
  //  function getData(){
  //     alert("get a data")
  //  }
  return (
    <div className="App">
      <h1>Get Data</h1>
      <Table stripped bordered hover size="sm" variant="dark">
        <thead>
          <tr>
            <td>Id</td>
            <td>Title</td>
            <td>Price</td>
            <td>Description</td>
            </tr></thead><tbody>
            {
              data.map((item)=>
            <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
            </tr>
              )
            }
          </tbody>
      </Table>
       {/* <h1>{data}</h1>
      <button onClick={updateData}>Update Data</button>
      <Test/>
      <User/>
      <Student name={"harshiv"} email="harshiv@gmail.com"/>
      <Profile/>
      <Login/>
      <Users/>
      <Members data={getData}/>
      <Tester/> */}
      {/* <Table1/> */}
      {/* <Employee1/> */}
      {/* <Stud/> */}
     
    {/*   <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Protected Component={Home}/>}/>
        <Route path="/about" element={<Protected Component={About}/>}/>
        <Route path="/*" element={<Navigate to="/"/>}/>
        <Route path="/emp/:name" element={<Emp/>}/>
        <Route path="/filter" element={<Filter/>}/>
        <Route path="/contact" element={<Protected Component={Contact}/>}/>
        <Route path="/cannel" element={<Cannel/>}/>
        <Route path="/company" element={<Company/>}/>
        <Route path="/others" element={<Others/>}/>
        <Route path="/Login" element={<Login/>}/>
        

      </Routes>
      </BrowserRouter>
   */}
    </div>
    
  );
}

export default App;
