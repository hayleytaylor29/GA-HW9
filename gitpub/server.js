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