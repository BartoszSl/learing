const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const btn3 = document.querySelector('.btn-3');
const p = document.querySelector('p');

function Kontruktor(name, prize) {
	this.name = name;
	this.prize = prize;
}

const newObj = new Kontruktor('Jabłko', 12);
const newObj2 = new Kontruktor('Gruszka', 43);
const newObj3 = new Kontruktor('Kiwi', 40);

Kontruktor.prototype.showInfo = function () {
	console.log(`${this.name} kosztuje ${this.prize}zł.`);
};

btn1.addEventListener('click', () => newObj.showInfo());
btn2.addEventListener('click', () => newObj2.showInfo());
btn3.addEventListener('click', () => newObj3.showInfo());
