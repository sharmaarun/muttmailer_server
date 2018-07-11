// server.js entry point for the backend server

const express               = require("express");
const mongoClient           = require("mongodb").MongoClient;
const bodyParser            = require("body-parser");
const cors                  = require("cors");
const app                   = express();



// setup port to listen to
const port                  = 8000;

//body parser for making app capable of parsing urlEncoded requests
app.use(bodyParser.urlencoded({extended:true}));

//create/init REST routes
// Add headers
app.use(cors());
require("./app/routes")(app,{});


//spin the server
app.listen(port, ()=>{
    console.log("=======================");
    console.log("Listening on port : " + port);
});

