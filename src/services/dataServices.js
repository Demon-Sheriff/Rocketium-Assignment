const axios = require('axios');

let TempData = []; // non-persistent form of memory
const url = 'https://microsoftedge.github.io/Demos/json-dummy-data/256KB.json';

// fetch data service
const fetchData = async () => {

    if(TempData.length === 0){
        try{
            const response = await axios.get(url);

            if(response.status >= 200 && response.status < 300) {
                console.log('Data fetched successfully:', response.data);
                TempData.push(response.data);
            }
        }
        catch(error){
            console.error(`Error fetching data : `, error);
            throw error;
        }
    }
    return TempData;
}

module.exports = {fetchData};