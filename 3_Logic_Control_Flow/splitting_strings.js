function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log("ERROR: No delimiter!");
    return;
  }

  var newStr = '';

  for (idx = 0; idx < string.length; idx++) {
    if (string[idx] === delimiter) {
      console.log(newStr);
      newStr = '';
    } else if (delimiter === '') {
      console.log(string[idx]);
    } else if (string[idx] !== delimiter) {
      newStr +=  string[idx];
    }
  }

  if (newStr.length > 0) {
    console.log(newStr);
  }
}
