// After Midnight 1

function timeOfDay(n) {
  var myTime = new Date();
  var hours = n >= 0 ? Math.floor(n / 60) : Math.ceil(n / 60);
  var minutes = n % 60;
  
  myTime.setHours(hours);
  myTime.setMinutes(minutes);
  
  return myTime.toString().split(' ')[4].slice(0, 5);
}

// After Midnight 2

function afterMidnight(str) {
	var hours = parseInt(str.split(':')[0], 10);
	var minutes = parseInt(str.split(':')[1]);
	
	return hours * 60 + minutes;
}

function beforeMidnight(str) {
  return 24 * 60 - afterMidnight(str);
}
