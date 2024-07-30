const express = require('express');
const app = express() 

const port = 3000 || config.port

app.listen(port, (err) => {

    if(err) return console.log(`Error occured : ${err}`)
    console.log(`testing the server, running on port ${port}`)

})

