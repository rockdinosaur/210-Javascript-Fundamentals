function startsWith(string, searchString) {
  for (var idx = 0; idx < searchString.length; idx++) {
    if (string[idx] !== searchString[idx]) {
      return false;
    }
  }

  return true;
}
