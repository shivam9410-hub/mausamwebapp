import React, { useEffect, useReducer, useState } from "react";
import "./Header.css";
import { useDispatch } from "react-redux";
import store from "./redux/store";


const Header = () => {
  const [place, setPlace] = useState("");
 
  const dispatch = useDispatch();
  async function searchtemp(e) {
    e.preventDefault();
    const placedata = { place: place };
    dispatch({ type: "SET_LOADING" ,payload:true});
    const data = await fetch("http://localhost:5000/temp", {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(placedata),
      method: "POST",
    })
      .then((d) => d.json()).catch((err)=>{
        console.log(err) ;
      })
      .then((d) => {
            if(d['data'].error){


              dispatch({type:"SET_ERROR"}) ;
              return ;
            }
              
        dispatch({ type: "SET_LOADING" ,payload:false});

        dispatch({ type: "SET_DATA", payload: d });
      }) 

    setPlace("");
  }
 

  return (
    <div className="Header">
      <div>
        <h3>MausamWebApp</h3>
      </div>
      <form onSubmit={searchtemp}>
        <input
          className="input"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          placeholder="Enter The Place"
        ></input>
        <button className="button" type="submit">
          Search 
        </button>
      </form>
    </div>
  );
};

export default Header;
