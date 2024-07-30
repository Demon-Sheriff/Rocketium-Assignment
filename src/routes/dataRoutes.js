const express = require('express')
const router = express.router();

const dataController = require('../controllers/dataController');

router.get('/data', dataController.getData);