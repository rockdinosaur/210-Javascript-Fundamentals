function oddElementsOf(arr) {
	var oddIdxArr = [];
	
	for (var idx = 1; idx < arr.length; idx += 2) {
		oddIdxArr.push(arr[idx]);	
	}
	
	return oddIdxArr;
}

function combinedArray(even, odd) {
	var combined = [];
	
	for (var idx = 0; idx < even.length; idx++) {
		combined.push(even[idx]);
		combined.push(odd[idx]);
	}
	
	return combined;
}

function mirroredArray(arr) {
	return arr.concat(arr.slice().reverse());
}

function sortDescending(arr) {
	var copy = arr.slice();
	return copy.sort(function(a, b) { return b - a; });
}

function matrixSums(arr) {
	var sums = [];
	
	for (var idx = 0; idx < arr.length; idx++) {
		var total = 0;
		
		for (var i = 0; i < arr[idx].length; i++) {
			total += arr[idx][i];
		}
		
		sums.push(total);
	}
	
	return sums;
}

function uniqueElements(arr) {
	var uniqArr = [];
	var hasValue;
	
	for (var i = 0; i < arr.length; i++) {
		hasValue = false;
		
		for (var j = 0; j < uniqArr.length; j++) {
			if (uniqArr[j] === arr[i]) {
				hasValue = true;
				break;
			}
		}
		
		if (!hasValue) {
			uniqArr.push(arr[i]);
		}
	}
	
	return uniqArr;
}

