function repeat(string, times) {
  if (times === 0) {
    return '';
  } else if (!Number(times) || times < 0) {
    return undefined;
  } else {
    var newString = '';
    for (times; times > 0; times--) {
      newString += string;
    }
    return newString;
  }
}
