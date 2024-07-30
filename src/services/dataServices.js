const axios = require('axios');

let TempData = []; // non-persistent form of memory
const url = 'https://microsoftedge.github.io/Demos/json-dummy-data/256KB.json';

// fetch data service
const fetchData = async () => {

    if(TempData.length === 0){
        try{
            const response = await axios.getAdapter(url);
            TempData.push(response);
        }
        catch(error){
            console.error(`Error fetching data : `, error);
            throw error;
        }
    }

    return TempData;
}

module.exports = {fetchData};