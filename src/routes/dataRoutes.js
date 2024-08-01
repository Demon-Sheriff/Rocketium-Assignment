const express = require('express')
const router = express.Router();
const dataController = require('../controllers/dataController');

router.get('/data', (req, res) => {
    const data = dataController.readData();
    res.json(data);
});

module.exports = router;