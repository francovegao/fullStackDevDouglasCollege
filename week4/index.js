import express from "express";    //to create the server easily
import bodyParser from "body-parser";  //middleware to preprocess the request
import axios from "axios";         //to send a request to an external server (third party service)
import fetch from "node-fetch";

const app = express();
app.use(bodyParser.urlencoded({extended:true})); //this is used to read form data from the http request


app.get("/myapi", async(req,res)=>{
    const url = "https://v2.jokeapi.dev/joke/Any";
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
})

app.get("/",async (req,res)=>{
    try{
        const response = await axios.get("https://bored-api.appbrewery.com/random");
        const result = response.data;
        //console.log(response.status,response.data);
        
        res.render("index.ejs",{data: result});

    }catch(err){
        console.log("failed to make a request", err.message);
        res.render("index.ejs",{error: err.message});
    }
})

app.post("/",async (req,res)=>{
    console.log(req.body);
    try{
        const {type, participants}= req.body;
        console.log(type);
        console.log(participants);
        const url=`https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`
        const response = await axios.get(url);
        const results = response.data;
        const result = results[Math.floor(Math.random()*results.length)];
        //console.log(response.status,response.data);
        
        res.render("index.ejs",{data: result});

    }catch(err){
        console.log("failed to make a request", err.message);
        res.render("index.ejs",{error: err.message});
    }
})

const port = 3000;

app.listen(port, ()=>{
    console.log(`The server is up and listening on port ${port}`);
})