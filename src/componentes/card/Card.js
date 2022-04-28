import React from 'react'
import { WiStrongWind ,WiHumidity} from "react-icons/wi";
import { ImCross } from "react-icons/im";

//css
import "../card/card.css"
const Card = ({c,close}) => {
  return (
    <article className='card'>
              <header className='headerCard'>
                <p></p>
                <p className='cityName'>{c.country}, {c.name}</p>
                <div className='cross'>
                  <ImCross onClick={()=>close(c.id)}/>
                </div>
              </header>
              <main className='contentCard'>
                <img className="iconoClima" alt='logoClima' src={"http://openweathermap.org/img/wn/"+c.image+"@2x.png"}/>
                <div className='grades'>{Math.round(c.temperature-273.15)}°</div>
                <div className='climate'>{c.climate}</div>
                <div className='flex'>
                  <div className='contentDates'>
                    <WiStrongWind className='datesLogo'/>
                    <p className='date'>{Math.round(c.wind)} km/h</p>
                    <p className='description'>wind</p>
                  </div >
                  <div className='contentDates'>
                    <WiHumidity className='datesLogo humidiy'/>
                    <p className='date'>{c.humidity}%</p>
                    <p className='description'>humidity</p>
                  </div>
                </div>
              </main>
            </article>
  )
}

export default Card