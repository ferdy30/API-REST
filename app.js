const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());


//MIDDLEWARE
const postsRoute = require('./Rutas/posts.js');
app.use('/posts', postsRoute);


//RUTAS
app.get('/',(req,res)=>{
    res.send('We are on home')
});



//MOSTRAR
app.listen(4000);




mongoose.connect('mongodb+srv://luisfer1:fernando2016@ap1.ttlogyk.mongodb.net/?retryWrites=true&w=majority', 
{useNewUrlParser: true},
()=> console.log('connect to db')
);