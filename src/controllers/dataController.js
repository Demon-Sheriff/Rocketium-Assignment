// This controller is responsible for reading the file and exposing it's contents through the api

// import the file from which we have to read data
const path = require('path');
const fs = require('fs');
const { measureMemory } = require('vm');
const filePath = path.join(__dirname, '..', 'data', 'Data.json');

const readData = () => {

    try{
        // if the file has not been created yet using the script
        if(!fs.existsSync(path.dirname(filePath))){

            console.log("Run the initialisation script first to fetch the data");
            return {Error_Message : "Run the initialisation script first to fetch the data, Refer the docs on how to run the script"};
        }

        // read data fromt the file
        const rawData = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(rawData);
    }
    catch(err){
        console.error("Error reading data:", err.message);
        return null;
    }

};

module.exports = {readData};