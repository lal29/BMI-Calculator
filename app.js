const express = require('express');

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use("/static",express.static("public"));

app.set('view engine','pug')

app.get("/",(req,res)=>{
    res.render("bmi");
})

app.post("/", (req, res)=> {
    console.log(req.body)
    var age = req.body.age
    var weight = Number(req.body.weight)
    var height = Number(req.body.height)
    var heightInMeters = height/100;
    var bmi = weight / Math.pow(heightInMeters,2);
    res.render("bmi",{
        result: "Your BMI Result is: "+bmi.toFixed(1),
        weight: weight,
        height: height,
        age: age
    })
});

app.listen(3000,()=>{
    console.log("App is running in port 3000");
})