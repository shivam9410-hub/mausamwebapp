import React from 'react'
import './Main.css'
import Current from './Current'
import Forecast from './Forecast'
const Main = () => {
  return (
    <div className='Main'>
  <Current></Current>
  <Forecast></Forecast>
    </div>
  )
}

export default Main
