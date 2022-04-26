import React,{useState} from 'react'

//css
import "../header/header.css"
//icons
import { FaSistrix } from "react-icons/fa";
import { BsFillCloudSunFill} from "react-icons/bs";

const Header = ({searchCity}) => {
  const [city,setCity]=useState("")

  const enter = (e) => {
    if(e.key === 'Enter'){
      searchCity(city)
    }
  }
 
  return (
    <header className='header'>
      <h1><BsFillCloudSunFill className='logoMain'/>WheaterApp</h1>
      <div  className='contenedorBuscador'>
        <input type="search" pattern='[a-z]*' autocomplete="off" id='search' onChange={(e)=> setCity( e.target.value )} />
        <button onClick={()=>searchCity(city)} onKeyDown={enter} ><FaSistrix className='lupa'/></button>
      </div>
      
    </header>
  )
}

export default Header