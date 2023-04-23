
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
const PORT=process.env.PORT||5000
app.listen(PORT,()=>{
    console.log("server is running at port 5000")
})

const cache =require('memory-cache') ; 

 if(process.env.NODE_ENV='production'){
  const path=require('path') ; 
  app.get('/',(req,res)=>{
    app.use(express.static(path.resolve(__dirname,'client','build')))

    res.sendFile(path.resolve(__dirname ,'client','build','index.html')) ; 

  })
 }

app.post('/temp' ,async function(req,res){
  const place = req.body.place;
 const cachedData=cache.get(place) ;
 if(cachedData) {
  res.send(cachedData) ;
  return ;
 }


const data =  await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ea0354227bb7462888d63005232004&q=${place}&aqi=no&days=4`).then(
         
(d)=>{
 
  return d.json()}
)
.then((d)=>{
   console.log(d) ;
  return d;
}) 

const tempofplace= JSON.stringify({data:data}) ;
cache.put(place,tempofplace,5*60*1000) ;
 return res.send(tempofplace) ;

} )