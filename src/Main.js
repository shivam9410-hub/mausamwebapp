import React, { useEffect, useState } from 'react'
import './Main.css'
import Current from './Current'
import Forecast from './Forecast'

import store from './redux/store'
import { useFetcher } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Main = () => {
    
 const data=useSelector((s)=>{
   return s;
 }) ;



 if(data.isLoading===null){
 
 return <h2>Search the temperature</h2>}
 if(data.error===true){
  return <h1>No Such Place Found Please Try Again.</h1>
 }
  return (
    <div className='Main'>
 {
  data.isLoading===true ?<h1 style={{color:'whitesmoke'}}>Loading...</h1> :(
     <>
      <Current data={data.placedata} ></Current>
      <Forecast data={data.placedata} ></Forecast>
      </>
    )
 }
    </div>
  )
}

export default Main
