var app = require('express').Router(); 
var userController = require('./controllers/users.js');

/*server端*/
// app.post('/todo', userController.addText)
app.post('/knows/userdata', userController.addUser)
app.post('/knows/login', userController.loginUser)

module.exports = app;
