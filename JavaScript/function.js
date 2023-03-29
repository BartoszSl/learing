// deklaracja funkcji - nie używamy

function test() {
	console.log('cześć');
}

test();

// wyrażenie funkcyjne - używamy

const helloWorld = function () {
	console.log('cześć, wyrażenie funkcyjne');
};

helloWorld();

// funkcja z argumentami

function add(parametr) {
	// parametr
	console.log('podany parametr to: ' + parametr);
}

add('elo'); // argument w nawiasach

// map() - zwraca nam nową tablicę
// return - zwraca nam wartość , z której możemy w przyszłości skorzystać

const hello = (name, age) => {
	console.log(`Cześć mam na imie ${name} i mam ${age} lat`);
};

hello('Bartek', 17);

// funkcja anonimowa

const heading = document.querySelector('h1');

heading.addEventListener('click', function () {
	console.log('Kliknięto mnie!');
});

// lepsza wersja

const headingTest = function () {
	console.log('Kliknięto mnie!');
};

heading.addEventListener('click', headingTest);

// funkcja strzałkowa - używamy {skrót nfn przy wtyczce JavaScript}

const arrowFunction = (name) => {
	console.log(`Mam na imię ${name}`);
};

arrowFunction(`Bartek`)

// inny zapis

const arrowFunction2 = age => console.log(`Mam ${age} lat`);

arrowFunction2(17)

// dwa parametry

const arrowFunction3 = (name, age) => console.log(`Jestem ${name} i mam ${age} lat`);

arrowFunction3(`Bartek`, 17)






// Cześć IMIE jak się masz?

const helloNew = (name = 'drogi użytkowniku') => {
    console.log(`Cześć ${name}, jak się masz?`);
}

helloNew('David')


// SPREAD

const arr = [1, 2, 3, 4]
console.log(arr);
console.log(...arr);


// REST

const numbers = (x, y, ...z) => {
    console.log(x, y, z);

    console.log(z.map(el => el * 2)); // Mnoży każdy element tablicy przez 2
}

numbers(13, 54, 564, 756, 34, 434, 394, 535, 56)








//