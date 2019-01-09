const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

// connect to mongodb
const url = 'mongodb://hdgknsn:lino7196@ds151864.mlab.com:51864/ninjas';

mongoose.connect(url, { useCreateIndex: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;

//set up static files
app.use(express.static('public'));

// use body-parser middleware
app.use(bodyParser.json());

// initialize routes
app.use('/api', require('./routes/api'));

// error handling middleware
app.use(function(err, req, res, next){
    console.log(err); // to see properties of message in our console
    res.status(422).send({error: err.message});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('now listening for requests');
});