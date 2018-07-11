// server.js entry point for the backend server

const express               = require("express");
const mongoClient           = require("mongodb").MongoClient;
const bodyParser            = require("body-parser");

const app                   = express();



// setup port to listen to
const port                  = 8000;

//body parser for making app capable of parsing urlEncoded requests
app.use(bodyParser.urlencoded({extended:true}));

//create/init REST routes
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://easyfastloans.co:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
require("./app/routes")(app,{});


//spin the server
app.listen(port, ()=>{
    console.log("=======================");
    console.log("Listening on port : " + port);
});

