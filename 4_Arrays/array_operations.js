function push(array, value) {
  array[array.length] = value;
  return array.length;
}

function pop(array) {
  var newLength = array.length - 1;
  var value = array[newLength];
  array.length = newLength;
  return value;
}

function unshift(array, value) {
  for (var i = array.length; i > 0; i--) {
    array[i] = array[i - 1];
  }

  array[0] = value;
  return array.length;
}

function shift(array) {
  var first = array[0];
  for (var i = 0; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }

  array.length = array.length - 1;
  return first;
}

function indexOf(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }

  return -1;
}

function lastIndexOf(array, value) {
  for (var i = array.length - 1; i >= 0; i--){
    if (array[i] === value) {
      return i;
    }
  }

  return -1;
}

function splice(arr, startIdx, n) {
  var removedValues = [];
  for (var i = startIdx; i < arr.length; i++) {
    if (i < startIdx + n) {
      push(removedValues, arr[i]);
    }

    arr[i] = arr[i + n];
  }

  arr.length = arr.length - n;
  return removedValues;
}

function join(arr, str) {
  var newStr = '';
  newStr += String(arr[0]);
  for (var idx = 1; idx < arr.length; idx++) {
    newStr += (str + String(arr[idx]));
  }

  return newStr;
}

function arraysEqual(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }
  
  for (var idx = 0; idx < arr1.length; idx++) {
    if (arr1[idx] != arr2[idx]) {
      return false;
    }
  }
  
  return true;
}
