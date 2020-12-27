let numberBottles = 99;

function beer() {
	while (numberBottles <= 99 && numberBottles >= 1) {
		if (numberBottles >= 1) {
			console.log(
				`${numberBottles} bottles of beer on the wall, ${numberBottles} bottles of beer, take 1 down, pass it around, ${
					numberBottles - 1
				} bottles of beer on the wall.`,
			);
			numberBottles--;
			if (numberBottles === 0) {
				console.log(
					'No more bottles of beer on the wall, no more bottles of beer, Got to the store an buy some more, 99 bottles of beer on the wall.',
				);
			}
		}
	}
}
