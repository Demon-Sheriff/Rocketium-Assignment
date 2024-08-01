const express = require('express')
const router = express.Router();
const dataController = require('../controllers/dataController');

// get complete data/ sorted data (asc or desc)/ data with a specific language
router.get('/data', (req, res) => {

    const { language, order } = req.query;

    // fetch data
    let data = dataController.readData();

    if(data === null){
        return res.status(500).json({ error: "Data not available. Please run the initialization script." });
    }

    // filter by language if specified
    if(language){
        data = dataController.getDataByLanguage(language);
    }

    // sort data if specified
    if(order){
        data = dataController.getSortedData(order, data);
    }

    // Return the data
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
});

module.exports = router;