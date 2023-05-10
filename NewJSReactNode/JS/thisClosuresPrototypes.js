// * ======================= call / apply / bind

// const car = {
// 	brand: 'Ford',
// 	printData: function (model, color) {
// this to obiekt car
// 		console.log(this.brand, model, color);
// 	},
// };

// car.printData('T', 'black');

// const obj = { brand: 'Dodge' };

// car.printData.call(obj, 'Viper', 'blue'); // ! Pożyczamy dane, zastąpując brand danymi w obj
// car.printData.apply(obj, ['Viper', 'blue']); // ! ten sam efekt, tylko wysyłamy tablice

// const viperPrintData = car.printData.bind(obj, 'Viper', 'red'); // ! Przekazujemy na stałe - Tworząc funkcję
// viperPrintData();

// * ======================= This in addEventListener

// const div = document.querySelector('div');
// const p = document.querySelector('p');
// const article = document.querySelector('article')

// div.addEventListener('click', function (event) {
// 	console.log(this); // ! Wskazuje na element div
// 	console.log(event.target); // ? Ten sam efekt

// 	setTimeout(function () {
// 		console.log(this); // Obiekt window
// 	}, 0);
// });

// p.addEventListener('click', function (event) {
// 	const self = this;

// 	setTimeout(function () {
// 		console.log(self); // ! Takim sposobem możemy uniknąć Window
// 	}, 0);
// });

// article.addEventListener('click', function (event) {

// 	setTimeout(() => {
// 		console.log(this); // ? Funkcja strzałkowa powoduje to, że this wskazuje dalej na obiekt
// 	}, 0);
// });

// * ======================= this in constructor
// ! Staramy się nie używać takiego zapisu

// function User(name) {
//     this.name = name
//     this.showData = () => {
//         console.log(this.name);
//     }
// }

// const user1 = new User("Ania") // ? Obiekt this normalnie działa w funkcji
// console.log(user1);

// const user2 = User("Bartek") // ! Obiekt Window
// console.log(window.name);

// ! Prototypy

// * ======================= Współdzielenie właściwości i metod

// const foo = (params) => {};

// console.dir(foo); // ? Podaje dane o funkcji

// const obj = {};

// console.log(obj); // ? Podaje dane o obiekcie obj


// ? Constructor


class Thing {
    constructor(name) {
        this.name = name;
    }
} 

Thing.prototype.weight = 1
Thing.prototype.year = 2023
Thing.prototype.printInfo = function () {
    console.log(this.name, this.weight);
}

console.log(typeof Thing.prototype); // ? Object

const book = new Thing("book")
book.printInfo() // ? book 1

const telephone = new Thing("telephone")
telephone.printInfo() // ? telephone 1

console.log(telephone);
console.log(telephone.name); // ? Telephone
console.log(telephone.weight); // ? 1

console.log(telephone.printInfo === book.printInfo); // ! True, ponieważ to te same funkcje