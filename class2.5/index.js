const express =require("express");
const app= express();
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
app.use(express.json());

app.get('/',(req,res)=>{
    res.send(`hello world!`);
})
app.listen(3000);

