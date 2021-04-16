//server setup for Gitpub app
const express = require('express');
const app = express();
const port = 3000;

//setup for app to listen to the port and console log that server is running
app.listen(port, () => {
    console.log('server is running on port: ', port)
})
//get route that sends "Welcome to the Gitpub app" to the screen at localhost:3000
app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!')
})
//variable for the "drinks" array to be exported into server.js
let drinks = require('./models/drinks.js');
console.log(drinks);
//get route to have the "drinks" array display as json at /drinks
// app.get('/drinks', (req, res) => {
//     res.send(drinks)
// })
//change the route to display the html of index.ejs, inserting css into the html fil
app.get('/drinks', (req, res) => {
    res.render('index.ejs')
})