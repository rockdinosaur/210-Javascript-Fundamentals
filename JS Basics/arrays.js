// Array Concat

function concat(array1, secondArgument) {
	var newArr = array1.slice();
	var i;
	
	if (Array.isArray(secondArgument)) {
		for (i = 0; i < secondArgument.length; i++) {
			newArr.push(secondArgument[i]);
		}
	} else {
		newArr.push(secondArgument);
	}
	
	return newArr;
}

// Array Concat 2

function concat2() {	
	var newArr = [];
	var i;
	var j;

	for (i = 0; i < arguments.length; i++) {
		if (Array.isArray(arguments[i])) {
			for (j = 0; j < arguments[i].length; j++) {
				newArr.push(arguments[i][j]);
			}
		} else {
			newArr.push(arguments[i]);
		}
	}
	
	return newArr;
}

// Array pop and push

function pop(arr) {
	if (arr.length === 0) return undefined;
	
	var last = arr[arr.length - 1];
	arr.length = arr.length - 1;
	return last;
}

function push(arr) {
	var i;
	for (i = 1; i < arguments.length; i++) {
		arr[arr.length] = arguments[i];
	}
	
	return arr.length;
}

// Array and String Reverse

function reverse(input) {
	var reversed = [];
	var strArr;
	var i;
	
	if (Array.isArray(input)) {
		for (i = input.length - 1; i >= 0; i--) {
			reversed[reversed.length] = input[i];	
		}
		return reversed;
	} else {
		strArr = input.split('');
		for (i = strArr.length - 1; i >= 0; i--) {
			reversed[reversed.length] = strArr[i];
		}
		return reversed.join('');
	}
}

// Array Shift and Unshift

function shift(arr) {
	var firstElement = arr[0];
	arr.splice(0, 1);
	return firstElement;
}

function unshift(arr) {
	var i;
	for (i = 1; i < arguments.length; i++) {
		arr.splice(0, 0, arguments[i]);
	}
	return arr.length;
}

// Array Slice and Splice

function slice(arr, begin, end) {
	var slicedArr = [];
	var i;
	for (i = begin; i < end && i < arr.length; i++) {
		slicedArr.push(arr[i]);
	}
	
	return slicedArr;
}

function splice(arr, start, deleteCount) {
	var deletedElements = [];
	var splicedArr = [];
	var i;
	var argumentsLength = arguments.length - 3;
	var length = arr.length + argumentsLength;
	
	for (i = 0; i <= length; i++) {
		if (i === start) {
			for (deleteCount; deleteCount > 0 && i + deleteCount < length; deleteCount--) {
				if (i >= length) break;
				deletedElements.push(arr.shift());
				i++;
			}
			for (var j = 3; j < arguments.length; j++) {
				splicedArr.push(arguments[j]);
				i++;
			}
		} else {
			splicedArr.push(arr.shift());
		}
	}
	
	for (var x = 0; x < splicedArr.length; x++) {
		arr.push(splicedArr[x]);
	}
	
	return deletedElements;
}

// Array Comparison

function areArraysEqual(array1, array2) {
	if (array1.length !== array2.length) return false;
	var i;
	array1.sort();
	array2.sort();
	
	for (i = 0; i < array1.length; i++) {
		if (array1[i] !== array2[i]) return false;
	}
	
	return true;
}



