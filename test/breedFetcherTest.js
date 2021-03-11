const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description of a valid breed via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  it('returns an error message if an invalid search is entered', (done) => {
    fetchBreedDescription('asasas', (err, desc) => {
      assert.equal(desc, null);

      const expectedErr = `Your search did not return any results`;

      assert.equal(expectedErr, err);
      // assert.equal(expectedErr, err.trim());

      done();
    });
  });


});
