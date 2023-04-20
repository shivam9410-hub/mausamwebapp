import React, { useState } from 'react'
import './Header.css'
import { useDispatch } from 'react-redux';

const Header = () => {
 const [place,setPlace]=useState('') ;

const dispatch=useDispatch() ;
async function searchtemp(){
    const placedata={place:place};
    const data =await fetch('https://localhost:5000/temp',
        {
headers:{  'Content-Type': 'application/json'    },
body:JSON.stringify(placedata),
method:'POST'

        }
    ).then((d)=>d.json()).then((d)=>{
        console.log(d) ; 
    })
    console.log("hello")
    dispatch({type:'SET_DATA',payload:data}) ;
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
