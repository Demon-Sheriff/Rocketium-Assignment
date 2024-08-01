const express = require('express')
const router = express.Router();
const dataController = require('../controllers/dataController');

// get complete data
router.get('/data', (req, res) => {
    const data = dataController.readData();
    res.json(data);
});

// get data by specific id
router.get('/data/:id', (req, res) => {

    const id = req.params.id;
    
    const dataWithID = dataController.getDataById(id); // Use getDataById to fetch the item

    if (dataWithID === null) {
        console.log("ID doesn't exist");
        return res.status(404).json({ error: "ID doesn't exist." });
    }

    res.json(dataWithID);
})

module.exports = router;