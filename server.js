const express = require('express');
const app = express();
const axios = require('axios');
const { copyFileSync } = require('fs');

const port = 3000 || config.port

app.listen(port, (err) => {

    if(err) return console.log(`Error occured : ${err}`)
    console.log(`testing the server, running on port ${port}`)

})

let TempData = []; // non persistent form of memory

const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    TempData.push(data);

  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const url = 'https://microsoftedge.github.io/Demos/json-dummy-data/256KB.json';
fetchData(url);

app.get('/data', (req, res) => {
    res.json(TempData);
    console.log(TempData[0].length);
})

