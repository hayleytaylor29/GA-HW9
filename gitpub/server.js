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

let food = require('./models/food.js');
console.log(food);

//change the route to display the html of show.ejs, inserting css into the html fil
app.get('/drinks', (req, res) => {
    res.render('index.ejs', {
        allDrinks: drinks,
        allFood: food
    })
})

// app.get('/drinks/:id', (req, res) => {
//     res.send(req.params.id);
// })



app.get('/drinks/:indexDrinks', (req, res) => {
    res.render('show.ejs', {
        allDrinks: drinks[req.params.indexDrinks]
    })
})

app.get('/drinks/food/:indexFood', (req, res) => {
    res.render('showfood.ejs', {
        allFood: food[req.params.indexFood]
    })
})