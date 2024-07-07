const express=require("express") // to setup express that help node.js to create more functionalities, robustness and make it more efficient by providing other packages
const mysqlConnection=require('./database') //import mysql database package
const bodyParser = require("body-parser"); //to pass jason data
const productsRoutes=require("./productsRoutes")
//rest object
var app=express(); //express is initiated by app variable
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json()) //help when we are passing adjacent data or queries

//routes
app.use('/api/v1/products',productsRoutes)
app.get("/",(req,res)=>{
  res.send("<h1>Welcome to CRUD API by using MYSQL,NODE.JS AND EXPRESS.........</h1>");
 
});
//app.post('/post')
//port
const port =5000;
app.listen(port, () => {
  console.log(`server Running on port ${port}`);
});

  

