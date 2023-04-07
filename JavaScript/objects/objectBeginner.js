// const myObject = {
//     key: value,
//     key: value,
//     key: value
// }

const newUser = {
	name: 'Lisa',
	age: 23,
	car: {
		brand: 'Audi',
		model: 'A3',
		color: 'czarny',
		sound() {
			console.log('brum brum');
		},
	},
};

const employee = {
	name: 'Szymon',
	age: 17,
	title: 'Junior Python Developer',
	salary: 2 + '$',
	manager: {
		id: 1,
		name: 'Bartek',
	},
	region: {
		id: 4,
		name: 'Bugaj',
	},
	dept: {
		name: 'sales',
	},
};

console.log(
	`Mam na imię ${newUser.name}, mam ${newUser.age} lat i jeżdzę ${newUser.car.brand} koloru ${newUser.car.color}`
);

console.log(employee.salary);

newUser.car.sound();
