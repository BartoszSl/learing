const URL = 'https://dog.ceo/api/breds/image/random';

fetch(URL)
	.then((res) => res.json())
	.then(data => console.log(data))
	.catch((error) => console.error(error));

async function test() {
	try {
		const res = await fetch(URL);
		const data = await res.json();

		console.log(data);
	} catch {
        console.error('Błąd');
    }
}

test();
