function substring(string, startIdx, endIdx) {
  if (endIdx === undefined) {
    endIdx = string.length;
  }

  if (isNaN(endIdx) || endIdx < 0) {
    endIdx = 0;
  }

  if (isNaN(startIdx) || startIdx < 0) {
    startIdx = 0;
  }

  if (startIdx > endIdx) {
    var tempIdx = startIdx;
    startIdx = endIdx;
    endIdx = tempIdx;
  }
  
  var newStr = '';

  for (startIdx; startIdx < endIdx; startIdx++) {
    newStr += string[startIdx];
    if (startIdx >= string.length - 1) {
      break;
    }
  }

  return newStr;
}
