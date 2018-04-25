const express = require('express');
const app     = express.Router();

const controller = require('../controllers/api/index');

app.get('/events', (req, res) => {
    controller.getEvents(req, res);
})

app.post('/rsvp', (req, res) => {
    controller.rsvp(req, res);
})

module.exports = app;