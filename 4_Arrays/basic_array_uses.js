function firstElementOf(arr) {
	return arr[0];
} 

function lastElementOf(arr) {
	return arr[arr.length - 1];
}

function nthElementOf(arr, index) {
	return arr[index];
}

function firstNOf(arr, count) {
	return arr.slice(0, count);
}

function lastNOf(arr, count) {
	if (count > arr.length) {
		return arr;
	} else {
	return arr.slice(arr.length - count);
	}
}

function endsOf(arr1, arr2) {
	return [firstElementOf(arr1), lastElementOf(arr2)];
}

