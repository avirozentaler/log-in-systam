const express = require('express');
const routeUSers = express.Router();

const userController = require('../../controllers/users');
const userAuthentication = require('../../controllers/authentication');



routeUSers.post('/register',userController.register);
routeUSers.post('/log-in',userController.logIn);
routeUSers.get('/token',userAuthentication.authntication);
// routeUSers.post('/set-token',userAuthentication.setToken);
// routeUSers.get('/get-token',userAuthentication.getToken);



module.exports = routeUSers;
