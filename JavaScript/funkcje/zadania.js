// Zadanie 1

// let score

// const add = (x, y) => {
//     const score = x + y

//     score % 2 === 0 ? parzysta(score) : nieparzysta(score)
// }

// const parzysta = (score) => console.log(`Liczba ${score} jest parzysta`);
// const nieparzysta = (score) => console.log(`Liczba ${score} jest nieparzysta`);

// add(2, 3)

// Zadanaie 2 Konwentor F na C

// let celsius
// let temp

// const fahrenheit = c => {
//     celsius = c
//     const temp = celsius * 1.8 + 32
//     console.log(`${celsius} stopni celsjusza to ${temp} stopni FahrenHeita`);
// }

// fahrenheit(10)

// Zadanie 3 forEach

const num = 10;
const numbers = [];

for (let i = 0; i < num; i++) {
	numbers.push(i);
}

const checkNumbers = number => {
    if (number % 3 === 0 && number !== 0) {
        console.log(`${number} jest podzielne przez 3`);
    }else {
        console.log(`${number} nie jest podzielne przez 3 lub jest rowne 0`);     
    }
}

numbers.forEach(checkNumbers)
