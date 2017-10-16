function greetings(nameArr, info) {
	var fullName = nameArr.join(' ');
	var fullTitle = info.title + " " + info.occupation;
	console.log("Hello " + fullName + "! Nice to have a " + fullTitle + " around.");
}