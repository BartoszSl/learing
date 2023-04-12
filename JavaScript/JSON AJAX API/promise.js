setTimeout(() => {
	console.log(1);
	setTimeout(() => {
		console.log(2);
		setTimeout(() => {
			console.log(4);
			setTimeout(() => {
				console.log(5);
			}, 300);
		}, 300);
	}, 300);
}, 300);

// LEPSZY KOD - Promisy

const newPromise = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, 300);
	});
};

newPromise()
	.then(() => {
		console.log(1);
		return newPromise;
	})
	.then(() => {
		console.log(2);
		return newPromise;
	});

// Inny sposób

const test = new Promise((resolve, reject) => {
	if (true) {
		resolve('Jest okej');
	} else {
		reject('Błąd');
	}
});

test
    .then((info) => console.log(info)) 
    .catch((err) => console.log(err));
