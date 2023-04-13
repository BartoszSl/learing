const checkAge = (age) => {
	return new Promise((resolve, reject) => {
		if (age >= 18) {
			resolve();
		} else {
			reject('Masz za mało lat!');
		}
	});
};

const doubleCheck = () => {
	return new Promise((resolve) => {
		console.log('Sprawdzam jeszcze raz...');
		setTimeout(() => {
			resolve('Faktycznie, wiek się zgadza.');
		}, 1000);
	});
};

checkAge(50)
	.then(() => {
		console.log('Chyba możesz wejść');
        return doubleCheck()
	})
    .then(res => console.log(res))
    .then(() => {
        console.log('Weryfikacja zakończona');
    })
	.catch((error) => console.error(error));
