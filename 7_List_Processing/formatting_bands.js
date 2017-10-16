// We have the following Array of information for some popular bands:

var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

// There are problems with this data, though, so we first have to clean it up before we can use it:

// The band countries are wrong: all the bands should have 'Canada' as the country.
// The band name should have all words capitalized.
// Remove all dots from the band names.
// Write a function that can process the input band Array and return an Array that contains the fixed information:


// Solution 1: Non-mutating

function processBands(bands) {
  return bands.map(function(band) {
    return {
      name: band.name.replace('.', '').split(' ').map(function(titleWord) {
        return titleWord[0].toUpperCase() + titleWord.slice(1);
      }).join(' '),

      country: 'Canada',
      active: band.active,
    };
  });
}

// Solution 2: Mutating

function processBands2(bands) {
  bands.map(function(band) {
    band.name = band.name.replace('.', '').split(' ').map(function(titleWord) {
        return titleWord[0].toUpperCase() + titleWord.slice(1);
      }).join(' ');
    band.country = 'Canada';

    return band;
  })
}

// processBands(bands);
// processBands2(bands);

// bands;
