import React from "react";
import Forecastdiv from "./Forecastdiv";
import "./Forecast.css";
import { useSelector } from "react-redux";

const Forecast = () => {
  const data = useSelector((s)=>s) ; 

  const forecastday=data.placedata[0].data.forecast.forecastday;
  return (<>
  <div className="forecast">
    <h1>Next 4 day forecast</h1>
    <div className="forecast1">
   
      {forecastday.map((each)=>{
        return <Forecastdiv data={each}/>
      })}
    </div>
    </div>
    </>
  );
};

export default Forecast;
