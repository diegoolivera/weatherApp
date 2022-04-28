import React from 'react'
//css
import "../home/home.css"
import Card from '../card/Card';

const Home = ({city,close}) => {
  if (city.length === 0) {
    return(
      <div className='centerMessage'>
        <p className='typeCity'>Type a Location...</p>
      </div> 
    ) 
  }
  
  return (
    <div className='grid'>
      {city.map(c=>{
        return(
          <Card c={c} close={close}/> 
        )

      })}</div>
    

    
  
  
         
 )
  }

export default Home