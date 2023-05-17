
const btn = document.querySelector('.button');
const errorAlert = document.querySelector('.search__info-alert');
const errorSpan = document.querySelector('.error-model');
const img = document.querySelector('.car__info img');

const carModel = document.querySelector('.carModel');
const kolor = document.querySelector('.kolor');
const silnik = document.querySelector('.silnik');
const paliwo = document.querySelector('.paliwo');
const przebieg = document.querySelector('.przebieg');

const prize = document.querySelector('.prizeValue');
const lastPrizeValue = document.querySelector('.lastPrizeValue');

const buyBtn = document.querySelector('.car__buy-btn');
const buyAlert = document.querySelector('.car__buy-alert');

const carSection = document.querySelector('.car')

const auta = {
	data: ['Sedan', 'Suv', 'Kabriolet', 'Coupe'],
	href: [
		'./dist/img/carModel1.png',
		'./dist/img/carModel2.webp',
		'./dist/img/carModel3.jpeg',
		'./dist/img/carModel4.jpg',
	],
	kolor: ['Zielony', 'Fioletowy', 'Czarny', 'Szary'],
	silnik: ['Dobry', 'Słaby', 'Mocny', 'W miarę git'],
	paliwo: ['Nie drogie', 'Drogie', 'Bardzo drogie', 'Tanie'],
	przebieg: ['Ostatnio kręcone', 'Mały', 'Średni', 'Wystarczający'],
	prize: ['62 453', '32 123', '98 231', '76 453'],
};

const searchFunction = () => {
	const input = document.querySelector('.searchData').value;
	const inputToLower = input.toLowerCase();
	const checkInput = inputToLower.charAt(0).toUpperCase() + inputToLower.slice(1)
	
	for (let i = 0; i < auta.data.length; i++) {
		if (checkInput == auta.data[i]) {
			errorAlert.style.display = 'none';
			buyAlert.style.display = 'none';
			carSection.style.display = ''

			carModel.textContent = auta.data[i];
			img.setAttribute('src', auta.href[i]);
			kolor.textContent = auta.kolor[i];
			silnik.textContent = auta.silnik[i];
			paliwo.textContent = auta.paliwo[i];
			przebieg.textContent = auta.przebieg[i];
			prize.textContent = auta.prize[i];

			const prizeToFloat = parseFloat(auta.prize[i]);
			const lastPrize = prizeToFloat * 1000 * 1.2;
			const lPString = lastPrize.toString();
			const lastPrizeWithSpace = lPString.slice(0, 2) + ' ' + lPString.slice(2);

			if (checkInput == auta.data[2]) {
				const lastPrizeWithSpace =
					lPString.slice(0, 3) + ' ' + lPString.slice(3);
				lastPrizeValue.textContent = lastPrizeWithSpace;
				break;
			}

			lastPrizeValue.textContent = lastPrizeWithSpace;

			break;
		} else {
			errorSpan.textContent = checkInput;
			errorAlert.style.display = 'inline';
			buyAlert.style.display = 'none';
			carSection.style.display = 'none'
		}
	}
};

const buyFunction = () => {
	buyAlert.style.display = 'block';
};

btn.addEventListener('click', searchFunction);
buyBtn.addEventListener('click', buyFunction);
