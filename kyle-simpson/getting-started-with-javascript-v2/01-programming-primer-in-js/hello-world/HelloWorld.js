var teacher = "Kyle";
var twitterHandle = "getify";
var age = "38";

function whoAmI(myName, myNickname, myAge) {
	console.log(`
		Hi, I'm ${myName} (aka ${myNickname}),
		and I'm ${myAge} years old.
	`);
}

whoAmI(teacher, twitterHandle, age);