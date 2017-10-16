function indexOf(string, substring) {
  for (var i = 0; i <= string.length - substring.length; i++) {
    var matches = 0;

    for (var j = 0; j <= substring.length - 1; j++) {
      if (substring[j] !== string[i + j]) {
        break;
      }
      matches++;
    }

    if (matches === substring.length) {
      return i;
    }
  }
  return -1;
}

function lastIndexOf(string, substring) {
  for (var i = string.length - substring.length; i >= 0; i--) {
    var matches = 0;

    for (var j = substring.length - 1; j >= 0; j--) {
      if (substring[j] !== string[i + j]) {
        break;
      }
      matches++;
    }

    if (matches === substring.length) {
      return i;
    }
  }

  return -1;
}
