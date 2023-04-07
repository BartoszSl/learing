// bind

// function test() {
// 	console.log(this);
// 	console.log(this.name);
// }

// const car1 = {
// 	name: 'Audi',
// };

// const car2 = {
// 	name: 'Dodge',
// };

// const car3 = {
// 	name: 'Nissan',
// };

// test.bind(car1)();
// test.bind(car2)();
// test.bind(car3)();

// CALL & APPLY

const movie = {
	title: 'Avengers',
};

function showMovie(price, cinema) {
    console.log(`Film ${this.title}, cena: ${price}, kino: ${cinema}`);
}


showMovie(30, 'SuperKino')

// funkcja.call(OBIEKT, ARGUMENTY)
showMovie.call(movie, 39, 'NajlepszeKino')

// funkcja.apply(OBIEKT, TABLICA)

const movieData = [34, 'SłabszeKino']

showMovie.apply(movie, movieData)
showMovie.apply(movie, [32, 'SłabszeKino'])