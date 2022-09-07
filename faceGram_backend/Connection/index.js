const express = require('express');
const port = 4000;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/facegram')
const app = express();
app.use(express.urlencoded({extended:true}));

app.use(express.json());

// app.use(require('../Router/Router'));

app.use(require('../Route/Routes'))


 

 
app.listen(port,()=>{
    console.log("connected to db at port" , port);
})