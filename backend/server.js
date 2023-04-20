
const express=require('express') ;
const app= express() ; 
const axios=require('axios')
WAPI='https://api.weatherapi.com/v1/forecast.json?key=ea0354227bb7462888d63005232004&q=London&aqi=no';
app.listen(5000,()=>{
    console.log("server is running at port 5000")
})
app.get('/temp' ,async function(req,res){
const data =  await fetch(WAPI).then(d=>d.json()).then((d)=>{
  return d;
})
 return res.json(data.forecast)
} )