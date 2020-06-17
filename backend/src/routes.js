const express = require('express');
const OngsController = require('./controllers/OngsController');
const IncidentsController = require('./controllers/IncidentsController');
const SessionController = require('./controllers/SessionController');
const ProfileController = require('./controllers/ProfileController');

const routers = express.Router();
routers.get('/incidents',IncidentsController.get);
routers.post('/incidents',IncidentsController.create);
routers.delete('/incidents/:id',IncidentsController.delete);

routers.get('/profile',ProfileController.get);

routers.post('/sessions',SessionController.create);

routers.get('/ongs',OngsController.get);
routers.post('/ongs',OngsController.create);

module.exports = routers;