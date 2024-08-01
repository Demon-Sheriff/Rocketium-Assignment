const axios = require('axios');
const fs = require('fs');
const path = require('path');

// path of the file where the data will be saved
const filePath = path.join(__dirname, 'data', 'Data.json');

const url = 'https://microsoftedge.github.io/Demos/json-dummy-data/256KB.json';


// fetch data service
const fetchData = async () => {

    // if our 
    try{

        // if the file has already been created using the script
        if(fs.existsSync(filePath)){
            console.log(`Data already fetched and saved at : ${filePath}`);
            return;
        }

        const response = await axios.get(url);

        if(response.status >= 200 && response.status < 300) {
            console.log('Data fetched successfully:', response.data);
            TempData.push(response.data);

            // get the directory part of the file path
            const dir = path.dirname(filePath);

            // check if the directory exists
            if(!fs.existsSync(dir)){
                // create the directory
                fs.mkdirSync(dir, {recursive : true});
            }

            fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
            console.log('Data successfully fetched and saved.');
        }

    }
    catch(error){
        console.error(`Error fetching data : `, error);
    }
    return TempData;
}


fetchData();
module.exports = {fetchData};