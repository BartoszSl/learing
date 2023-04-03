// Zadanie 1 - querySelector // querySelectorAll

// const heading = document.querySelector('h1');
// const paragrafy = document.querySelectorAll('p');

// const divTest = document.querySelector('.test');
// const idTest = document.querySelector('.test #test');

// Zadanie 2 - ceateElement // appendChild

// const divAppend = document.querySelector('div');

// const paragraf = document.createElement('p');

// divAppend.appendChild(paragraf)

// Zadanie 3 - createElements

// const ul = document.createElement('ul');
// document.body.append(ul)

// const number = 10

// for (let i = 1; i <= number; i++) {
//     const li = document.createElement('li');
//     li.textContent = i
//     ul.append(li)
// }

// const lastLi = document.querySelector('li:last-child')
// lastLi.textContent = 'Jestem ostatnim elementem listy.'

// lastLi.style.backgroundColor = 'royalblue'
// lastLi.style.padding = '20px 40px'
// lastLi.style.fontSize = '48px'

const burger = document.querySelector('.btn1');
const pizza = document.querySelector('.btn2');
const square = document.querySelector('.square');
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');

const hello = () => {
	console.log('cześć');
};

const redColor = () => {
	square.style.backgroundColor = 'tomato';
};

const blueColor = () => {
	square.style.backgroundColor = 'royalblue';
};

const toggleShow = () => {
	p1.classList.toggle('show');
	p2.classList.toggle('show');
};

burger.addEventListener('dblclick', hello);
square.addEventListener('mouseover', redColor);
square.addEventListener('mouseleave', blueColor);
pizza.addEventListener('click', toggleShow);
