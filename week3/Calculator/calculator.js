import express from "express";
import bodyParser from "body-parser";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    console.log(__dirname + "/index.html");
    res.sendFile(__dirname + "/index.html");
})

app.post("/",(req,res)=>{
    console.log(req.body);
    let result = parseInt(req.body.num1) + parseInt(req.body.num2);
    res.send(`The sum of ${req.body.num1} and ${req.body.num2} is ${result}`);
})

const port = 3000;
app.listen(3000, ()=>{
    console.log(`The server is up and running on port ${port}`)
})