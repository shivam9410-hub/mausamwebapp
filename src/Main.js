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
 
 return <h1>Search the temperature</h1>}
 if(data.error===true){
  return <h1>No Such Place Found Please Try Again.</h1>
 }
  return (
    <div className='Main'>
 {
  data.isLoading===true ?<h1>Loading...</h1> :(
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
