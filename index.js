const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];
//callback takes 2 args, error - if there is any error searching, and desc, which is the data we get back
fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details: ', error);
  } else {
    console.log(desc);
  }
});