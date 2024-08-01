const express = require('express')
const router = express.Router();
const dataController = require('../controllers/dataController');

/**
 * @swagger
 * /data:
 *   get:
 *     summary: Get all data
 *     responses:
 *       200:
 *         description: A list of data
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DataItem'
 */
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
        const filterOrder = order === 'desc' ? 'desc' : 'asc';
        data = dataController.getSortedData(filterOrder, data);
    }

    // Return the data
    res.json(data);

});

/**
 * @swagger
 * /data/{id}:
 *   get:
 *     summary: Get data by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the data item
 *     responses:
 *       200:
 *         description: A single data item
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DataItem'
 *       404:
 *         description: Data item not found
 */
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