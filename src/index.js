const express = require("express");
// require('dotenv').config();

const {PORT} = require('./config/serverConfig');
const setupAndStartServer = async ()=>{
    //create the express obj
    const app = express();
    app.listen(PORT, ()=> {
        console.log("server started on port", PORT);
    })
}

setupAndStartServer();