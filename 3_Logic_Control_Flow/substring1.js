function substr(string, start, length) {
  var newStr = '';

  if (start < 0) {
    start = string.length + start;
  }


  for (var idx = start; idx < start + length; idx++) {
    newStr += string[idx];

    if (idx >= string.length - 1) {
      break;
    }
  }

  return newStr;
}
