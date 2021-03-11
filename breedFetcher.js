const cliArg = process.argv.slice(2);
const request = require('request');

const breedInput = cliArg[0];

// const breedDescription = fetchBreedDescription('siberian', (error, description) => {



// });

const fetchBreedDescription = (breedName, callback) => {

  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    //console.log(typeof body) // body is a string, because its a JSON STRING!!!!!
    if (error) {
      callback(error);
      return;
    }
    if (response.statusCode !== 200) {
      console.log(`your Status code was ${response.statusCode} the search was not completed, there may be something wrong with the site`);
      callback(error);
      return;
    }
    const returnData = JSON.parse(body); //it is now an object in an array
    if (returnData.length === 0) {
      console.log(`Your search ${breedInput} did not return any results`);
      callback(error);
      return;
    }
    return returnData[0]['description']; //returning the description key value from the first element in the returnData array
    //console.log(typeof returnData) // is now an object after the JSON.parse();

  })
};

module.exports = { fetchBreedDescription }