const express = require("express");
const bodyParser = require("body-parser");

const {PORT} = require('./config/serverConfig');
const setupAndStartServer = async ()=>{
    //create the express obj
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));


     // const PORT = process.env.PORT;
    app.listen(PORT, ()=> {
        console.log("server started on port", PORT);
    })
}

setupAndStartServer();