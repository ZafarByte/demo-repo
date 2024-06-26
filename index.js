const express = require("express");

const app = express();



var users = [{
    name:'zafar',
    kidneys:[{
        healthy:false
    },{
       healthy:true
    }]
}]

app.use(express.json());

app.get("/",function(req,res){
   let zafarkidneys=users[0].kidneys;
   const numberofkidneys =  zafarkidneys.length;
   let numberofhealthykidney=0;
   for(let i=0;i<zafarkidneys.length;i++){
    if(zafarkidneys[i].healthy){
        numberofhealthykidney =numberofhealthykidney+1;
    }
   }
   const numberofunhealthykidneys = numberofkidneys-numberofhealthykidney;
   res.json({
    zafarkidneys,
    numberofkidneys,
    numberofhealthykidney,
    numberofunhealthykidneys
   })
})

app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })

    res.json({
        msg:"done !"
    })
})

app.put("/",function(req,res){
    for(let i=0;i<users.length;i++){
        users[0].kidneys[i].healthy=true;
    }

    res.json({})
})

app.delete("/",function(req,res){
    
})

app.listen(3000);