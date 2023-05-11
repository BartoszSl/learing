const btn = document.querySelector('button');

const btnAnimation = (e) => {
	// Pozycja, w którą klikamy
	const top = e.clientY;
	const left = e.clientX;

	// Pozycja przycisku
	const btnTopPosition = e.target.offsetTop;
	const btnLeftPosition = e.target.offsetLeft;

	const currentTop = top - btnTopPosition;
	const currentLeft = left - btnLeftPosition;

	const circle = document.createElement('span');
	circle.classList.add('circle');
	circle.style.top = currentTop + 'px';
	circle.style.left = currentLeft + 'px';

	e.target.append(circle);

	setTimeout(() => {
		circle.remove();
	}, 300);
};

btn.addEventListener('click', btnAnimation);
