// This controller is responsible for reading the file and exposing it's contents through the api

// import the file from which we have to read data
const path = require('path');
const fs = require('fs');
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
        return {err};
    }

};

const getDataById = (id) => {

    const data = readData();

    if(!fs.existsSync(path.dirname(filePath))){

        console.log("Run the initialisation script first to fetch the data");
        return {Error_Message : "Run the initialisation script first to fetch the data, Refer the docs on how to run the script"};
    }

    if(data === null) return null;
    
    // check if the id exists or not.
    for(let i=0; i<data.length; i++){

        if(data[i].id === id){
            console.log("Data with id found")
            return data[i];
        }
    }

    console.log("Id doesn't exist")
    return {Error_Message : "Id doesn't exist"};
};

const getSortedData = (order = 'asc', data = null) => {

    // if the script has not been intialised yet.
    if(!fs.existsSync(path.dirname(filePath))){

        console.log("Run the initialisation script first to fetch the data");
        return {Error_Message : "Run the initialisation script first to fetch the data, Refer the docs on how to run the script"};
    }

    if(!data){
        data = readData();
    }
    
    if(data === null) {
        return null; 
    }

    // Sort data by name
    resData = data.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if (nameA < nameB) return order === 'asc' ? -1 : 1;
        if (nameA > nameB) return order === 'asc' ? 1 : -1;
        return 0;
    });

    return resData;
};

// filter by language
const getDataByLanguage = (language) => {

    // if the script has not been intialised yet.
    if(!fs.existsSync(path.dirname(filePath))){

        console.log("Run the initialisation script first to fetch the data");
        return {Error_Message : "Run the initialisation script first to fetch the data, Refer the docs on how to run the script"};
    }

    const data = readData();

    const resData = data.filter(item => item.language && item.language.toLowerCase() === language.toLowerCase());
    return resData.length > 0 ? resData : {Error_Message : "Language does not exist"};;
};


module.exports = {readData, getDataById, getSortedData, getDataByLanguage};