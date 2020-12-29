let output = [];

function fibonacciGenerator(n) {
	if (n === 1) {
		output = [0];
	} else if (n === 2) {
		output = [0, 1];
		return output;
	} else {
		output = [0, 1];
		output.push(output[0] + output[1]);
		if (n === output.length) {
		} else {
			output.push(fibonacciGenerator(n - 1));
			output.push(output[output.length - 2] + output[output.length - 1]);
		}
	}
	return output;
}
fibonacciGenerator(55); //input # of fibonacci numbers to display
console.log(output);
