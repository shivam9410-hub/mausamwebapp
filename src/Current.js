import React from 'react'
import './Current.css'
const Current = ({data}) => {
  const wdata=data[0].data;
  return (
    <div className='Current'>

      <div className='upperdiv'>
      <img src={`https:${wdata.current.condition.icon}`}></img>
      <div className='tempinfo'>
      <h2>{wdata.current.condition.text}</h2>
      <span> {wdata.current.temp_c}&deg;C</span>
       <h3>Place: {wdata.location.name}</h3>
      </div>
      </div>
    
     
     <div className='lowerdiv'>
     <div className='div'>
     <p>State: {wdata.location.region}</p>
        <p>Country: {wdata.location.country}</p>
     </div>
      <div className='div'>
      <p>Humidity: {wdata.current.humidity}</p>
       <p>Wind Speed : {wdata.current.wind_kph} KPH</p>
   
      </div>

     </div>
       
      
    
   
    </div>
  )
}

export default Current
