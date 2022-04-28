import React,{useState,useRef} from 'react'

//css
import "../header/header.css"
//icons
import { FaSistrix } from "react-icons/fa";
import { BsFillCloudSunFill} from "react-icons/bs";

const Header = ({searchCity}) => {
  const [city,setCity]=useState("")
  const inputCity = useRef(null);

  const enter = (e) => {
    if(e.key === 'Enter'){
      search() 
    }
  }

  const cleanInput = ()=>{
    inputCity.current.value = ""
  }

  const search = ()=>{
    searchCity(city)
    cleanInput()
  }
 
  return (
    <header className='header'>
      <h1><BsFillCloudSunFill className='logoMain'/>WheaterApp</h1>
      <div  className='contenedorBuscador'>
        <input ref={inputCity} type="search" onKeyUp={enter} pattern='[a-z]*' placeholder='localidad..' autocomplete="off" id='search' onChange={(e)=> setCity( e.target.value )} />
        <button onClick={search}><FaSistrix className='lupa'/></button>
      </div>
      
    </header>
  )
}

export default Header