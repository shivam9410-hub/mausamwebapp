import React, { useState } from 'react'
import './Header.css'
const Header = () => {
 const [place,setPlace]=useState('') ;
const  WAPI=`https://api.weatherapi.com/v1/forecast.json?key=ea0354227bb7462888d63005232004&q=${place}&aqi=no`;
async function searchtemp(){
    console.log(place)
    const data =await fetch(WAPI).then((d)=>d.json()).then((d)=>{
        console.log(d) ; 
    })
   
    console.log(data) ;
    setPlace('');
 }
  return (
    <div  className='Header'>
      <div><h3>MausamWebApp</h3></div>
      <div>
        <input className='input' value={place
        } onChange={(e)=>setPlace(e.target.value)}  placeholder='Enter the place'></input>
        <button  className='button' onClick={searchtemp}>Search</button>
      </div>

    </div>
  )
}

export default Header
