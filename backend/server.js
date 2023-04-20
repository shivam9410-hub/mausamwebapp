
const express=require('express') ;
const app= express() ; 
const axios=require('axios')
const bodyparser= require('body-parser') 
var jsonParser = bodyparser.json()
 app.use(jsonParser) ;
 app.use(bodyparser.urlencoded({ extended: false }))
WAPI='https://api.weatherapi.com/v1/forecast.json?key=ea0354227bb7462888d63005232004&q=London&aqi=no';
app.listen(5000,()=>{
    console.log("server is running at port 5000")
})
app.post('/temp' ,async function(req,res){
  console.log(req.body) ;
const data =  await fetch(WAPI).then(d=>d.json()).then((d)=>{
  return d;
})
 return res.json(data.forecast)
} )