function trim(str) {
  var beginningSpacesCounter = 0;
  var endingSpacesCounter = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      beginningSpacesCounter++;
      continue;
    }
    break;
  }

  for (var j = str.length - 1; j >= 0; j--) {
    if (str[j] === ' ') {
      endingSpacesCounter++;
      continue;
    }
    break;
  }

  var newString = '';

  for (var idx = beginningSpacesCounter; idx < str.length - endingSpacesCounter; idx++) {
    newString += str[idx];
  }

  return newString
}
