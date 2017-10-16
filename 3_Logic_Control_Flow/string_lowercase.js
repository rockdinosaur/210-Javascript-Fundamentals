function toLowerCase(string) {
  var newStr = '';

  for (var idx = 0; idx < string.length; idx++) {
    asciiNumeric = string.charCodeAt(idx);
    if (asciiNumeric > 64 && asciiNumeric < 91) {
      newStr += String.fromCharCode(asciiNumeric + 32);
    } else {
      newStr += string[idx];
    }
  }

  return newStr;
}
