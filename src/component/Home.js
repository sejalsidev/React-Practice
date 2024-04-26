import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate();
  let x=true;
  const navToPage=()=>{
     
      if(x){
        navigate('/about')
      }
      else{
        navigate('/filter')
      }
  }
  return (
    <div>
        <h1>Home page</h1>
       {/*  <link to="/about" >Go to About page....</link><br/> */}
        <button onClick={()=>navToPage()}>Go to About Page</button><br/>
        <button onClick={()=>navigate('/filter')}>Go to filter Page</button>
    </div>
  )
}

export default Home