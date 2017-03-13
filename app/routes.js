var app = require('express').Router(); 
var userController = require('./controllers/users.js');

/*server端*/
app.post('/todo', userController.addText)

module.exports = app;
