const express = require("express");
const port = process.env.PORT || 4000;
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/facegram').then(()=>{
    console.log("connection successfull");
}).catch((e)=>{
    console.log(e);
})
const app = express();
var cors = require('cors');


app.use(cors());

app.use(bodyParser.json());
  
app.use(require('../Route/Routes'))
    
app.listen(port, () => {
  console.log(`Server is running on port 4000.`);
});