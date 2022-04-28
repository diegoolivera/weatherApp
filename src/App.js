import React,{useState} from "react"
import './App.css';
//router
import {BrowserRouter as Router,Route} from "react-router-dom";
import swal from "sweetalert2"
//componentes
import Home from "./componentes/home/Home";
import Header from "./componentes/header/Header";
const API_KEY = "b5dbd62a84858e6f35e06a16386d7c30";



function App() {
  const [city,setCity]=useState([]);

  const close = (id)=>{
    setCity(cities => cities.filter(c=> c.id !== id))
  }

  const searchCity = async (aCity) => {

    const dataObj = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${aCity}&appid=${API_KEY}`);
    const json = await dataObj.json();
    const data =  await json;
    
    console.log("probando si llega data",data.message)
    if (data.message === "city not found") {
      swal.fire({
        icon: 'error',
        title: 'Localidad NO ENCONTRADA',
        showConfirmButton: false,
        timer: 1200
      })

      return
    }
  
    const datesCiudad = {
      id: data.id,
      name: data.name,
      humidity: data.main.humidity,
      temperature: data.main.temp,
      climate: data.weather[0].main,
      image: data.weather[0].icon,
      wind: data.wind.speed,
      country: data.sys.country
    }
  
    if (city.length === 0) {
  
      setCity(prevCities => [...prevCities, datesCiudad]);
    }
    else {
  
      if (city.some(actualCity => actualCity.id === datesCiudad.id)) {
        swal.fire({
          icon: 'error',
          title: 'Ya ingresaste ese pais/localidad',
          showConfirmButton: false,
          timer: 1200
        })
        return
      }
  
      setCity(prevCities => [...prevCities, datesCiudad]);
    }
  }

  return (
    <div className="App">
      <Header searchCity={searchCity}/>
      <Router>
        
          <Route exact path="/">
            <div className="grid">
              <Home  city={city} close={close}/>
            </div>
          </Route>
        
      </Router>
    </div>
  );
}

export default App;
