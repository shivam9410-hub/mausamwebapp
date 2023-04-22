
const express=require('express') ;
const app= express() ; 
const axios=require('axios')
const cors =require('cors') ;
const bodyparser= require('body-parser');
const  jsonParser = bodyparser.json()

const corsOptions = {
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));
 app.use(jsonParser) ;
 app.use(bodyparser.urlencoded({ extended: false }))
WAPI='https://api.weatherapi.com/v1/forecast.json?key=ea0354227bb7462888d63005232004&q=London&aqi=no&days=4';
app.listen(5000,()=>{
    console.log("server is running at port 5000")
})
app.post('/temp' ,async function(req,res){
   const place = req.body.place;

const data =  await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ea0354227bb7462888d63005232004&q=${place}&aqi=no&days=4`).then(
         
(d)=>{
 
  return d.json()}
)
.then((d)=>{
   console.log(d) ;
  return d;
}) 

const tempofplace= JSON.stringify({data:data}) ;
 return res.send(tempofplace) ;
} )