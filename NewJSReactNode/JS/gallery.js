const lightBox = {
	gallery: document.querySelector('.gallery'),
	init: function () {
		this.container = document.createElement('div');
		this.container.classList.add("lightBox");
		document.body.append(this.container);

		this.lightBoxImg = document.createElement('img');
		this.container.append(this.lightBoxImg);

		this.loadImages();
	},
	loadImages: function (keywordsArr, defSize = '300x300') {
		const keywords = [
			'car',
			'bicycle',
			'sun',
			'water',
			'bike',
			'sea',
			'green',
			'laptop',
			'monitor',
			'planet',
			'milkyway',
			'house',
			'pen',
			'ocean',
			'hot',
			'valey',
		];

		if (keywordsArr) keywords = keywordsArr;

		let htmlCode = '';

		for (let keyword of keywords) {
			keyword = keyword.trim().toLowerCase();

			const url = `https://source.unsplash.com/${defSize}?${keyword}`;
			htmlCode += `<img src="${url}">`;
		}
		this.gallery.innerHTML = htmlCode;

		this.addListeners();
	},
	addListeners: function () {
		const images = document.querySelectorAll('.gallery img');

		images.forEach((img) => {
			img.addEventListener('click', 
            (event) => this.galleryImgClicked(img));
		});

		this.container.addEventListener('click', (event) => this.hide());
	},
	galleryImgClicked: function (img) {
		this.show(img);
	},
	show: function (img) {
		this.lightBoxImg.src = img.src;
		this.container.classList.add('active');
	},
	hide: function () {
		this.container.classList.remove('active');
	},
};

lightBox.init();
