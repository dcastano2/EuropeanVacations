var database = [
	{
		username: "andrei",
		password: "supersecret"
	}
];

var newsFeed = [
	{
		username:  "Bobby",
		timeline:  "So tried from all that learning"
	}, 
	{
		username: "Sally",
		timeline: "Javascript is sooo cool" 
	}


];

var userNamePrompt = prompt("what is your username?");
var passwordPrompt = prompt("what is your password?");

function signIn(user, pass) {
	if (user === database[0].username && pass === database[0].password){
		console.log(newsFeed);
	}
	else {
		alert("Sorry, wrong username and password");
	}
}
signIn(userNamePrompt, passwordPrompt);