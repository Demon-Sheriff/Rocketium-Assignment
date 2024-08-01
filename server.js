const app = require('./src/app');

const port = 3000 || config.port;

app.listen(port, (err) => {

  if(err){
    return console.log(`Error occurred: ${err}`);
  }
  console.log(`Server is running on port ${port}`);
  
});

 
// data (as of now) is being logged into an array, we will be storing it in our DB