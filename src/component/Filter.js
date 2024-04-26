import React from 'react'
import { useSearchParams } from 'react-router-dom'
const Filter = () => {
    const [searchParams,setSearchParams]=useSearchParams();
    const age = searchParams.get('age')
    const city = searchParams.get('city')
  return (
    <div>
        <h1>Filter page</h1>
        <h3>Age is : {age}</h3>
        <h3>City name is : {city}</h3>
        <button onClick={()=>setSearchParams({age:40,city:"surat"})}> Set Age in Query Param </button>
    </div>
  )
}

export default Filter