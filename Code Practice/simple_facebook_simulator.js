const database = [
	{
		username: 'John',
		password: '123',
	},
];

const newsfeed = [
	{
		username: 'David',
		timeline: 'Just woke up.',
	},
	{
		username: 'Nancy',
		timeline: 'My first cup of coffee.',
	},
	{
		username: 'Jennifer',
		timeline: 'Half asleep',
	},
];

const userNamePrompt = prompt('Username: ');
const passWordPrompt = prompt('Password: ');

function signIn(user, pass) {
	if (user === database[0].username && pass === database[0].password) {
		console.log(newsfeed);
	} else {
		alert('Wrong sign-in info');
	}
}

signIn(userNamePrompt, passWordPrompt);
