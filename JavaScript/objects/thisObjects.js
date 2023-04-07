const user = {
	name: 'Bartek',
	showName() {
		console.log(this.name);
	},
};

user.showName();

// Konstruktor // prototyp

function Konstruktor(name, age) {
	this.name = name;
	this.age = age;
}

const newUser = new Konstruktor('Klauida', 23);
const newUser2 = new Konstruktor('Bartek', 20);
const newUser3 = new Konstruktor('Szymon', 17);

console.log(newUser, newUser2, newUser3);

Konstruktor.prototype.hello = function () {
	console.log(`Cześć ${this.name}`);
};

Konstruktor.prototype.country = 'Polska';

// this ciąg dalszy

const person = {
	name: 'Olek',
	'fav-meal': 'pizza',
	showInfo() {
		console.log(this);
		console.log(this['fav-meal']);
	},
	address: {
		city: 'Warszawa',
		'zip-code': '00-000',
		showCity() {
			console.log(this.city);
		},
	},
};

person.showInfo();
person.address.showCity();

// this w konstruktorz, w skazuje na obiekt, stworzony na podstawie konstruktora

function Food(name) {
	this.name = name;
}

const meal1 = newFood('kebab');
const meal2 = newFood('pepsi');

// To jest to samo co

const meal = {
	name: 'nazwy w nawiasach',
};

console.log(meal1, meal2);
