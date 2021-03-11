const cliArg = process.argv.slice(2);
const request = require('request');

const breedInput = cliArg[0]

request('https://api.thecatapi.com/v1/breeds/search?q=' + breedInput, (error, response, body) => {
  //console.log(typeof body) // body is a string, because its a JSON STRING!!!!!
  const returnData = JSON.parse(body); //it is now an object in an array
  console.log(returnData[0]['description']); //returning the description key value from the first element in the returnData array
  console.log(typeof returnData);
})