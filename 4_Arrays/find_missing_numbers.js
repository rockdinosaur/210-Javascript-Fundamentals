function missing(arr) {
	var filledArr = [];
	
	for (var i = arr[0]; i < arr[arr.length - 1]; i++) {
		if (arr.includes(i)) {
			continue;
		} else {
			filledArr.push(i);
		}
	}
	
	return filledArr;
}

console.log(missing([1, 5]));                  // [-1, 0, 2, 3, 4]


console.log('hi');
console.log(5);