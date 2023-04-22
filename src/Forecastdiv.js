import React from 'react'
import { useSelector } from 'react-redux'
import './Forecastdiv.css'
const Forecastdiv = ({data}) => {
 ;
const date =  new Date(data.date) ;
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className='forecastdiv'>
       <div className='imgtemp'>
        <img src={data.day.condition.icon}/>
          <h3>{weekdays[date.getDay()]}</h3>
           <h4> Avg Temp: {data.day.avgtemp_c}&deg;C</h4>
        
       
        <p>{data.day.condition.text}</p>
       </div>
       <div className='otherinfo'></div>

    </div>
  )
}

export default Forecastdiv
