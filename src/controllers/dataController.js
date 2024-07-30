const dataService = require('../services/dataServices') // import the services for the controller

const getData = async(req, res) => {

    try{
        const data = await dataService.fetchData();
        res.json(data);
    }
    catch(err){
        res.status(500).send(`Error fetching data`);
    }
};

module.exports = {getData};