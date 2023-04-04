const sizeUp = document.querySelector('.sizeUp');
const sizeDown = document.querySelector('.sizeDown');
const color = document.querySelector('.color');
const text = document.querySelector('.text p');

let fontSize = 36;

const up = () => {
	fontSize += 5;
	text.style.fontSize = fontSize + 'px';
};

const down = () => {
	if (fontSize <= 21) return;
	fontSize -= 5;
	text.style.fontSize = fontSize + 'px';
};

const newColor = () => {
	const colors = Math.floor(Math.random() * 1000000);

	text.style.color = `#${colors}`;
};

sizeUp.addEventListener('click', up);
sizeDown.addEventListener('click', down);
color.addEventListener('click', newColor);
