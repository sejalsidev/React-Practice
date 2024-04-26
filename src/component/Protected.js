import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';

const Protected = (props) => {
    const {Component} = props;
    const navigate = useNavigate();
    useEffect(()=>{
            let login = localStorage.getItem('login');
            if(!login){
                navigate('login')
            }
    })
  return (
    <div>
        <h1> <Component/> </h1>
       
    </div>
  )
}

export default Protected