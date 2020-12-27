let names = ['Bob', 'Janis', 'Ben', 'Karen', 'Cindy', 'Johnny'];

function whosPaying(names) {
	const pickRandomNumber = Math.floor(Math.random() * names.length);
	const pickRandomPerson = names[pickRandomNumber];
	return `${pickRandomPerson} is going to buy lunch today!`;
}
