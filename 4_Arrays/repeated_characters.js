function repeatedCharacters(str) {
	var letters = str.toLowerCase().split('');
  var letterCount = {};
  
  for (var i = 0; i < letters.length; i++) {
    if (letterCount[letters[i]]) {
      letterCount[letters[i]]++;
    } else {
      letterCount[letters[i]] = 1;
    }
  }
  
  for (var letter in letterCount) {
    if (letterCount[letter] < 2) {
      delete letterCount[letter];
    }
  }
  
  return letterCount;
}
