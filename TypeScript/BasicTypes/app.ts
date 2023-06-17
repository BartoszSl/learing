function add(n1: number, n2: number, showResult: boolean, text: string) {
	const result = n1 + n2;
	if (showResult) {
		return tekst + result;
	}
}

const number1 = 6;
const number2 = 2.5;
const printResult = true;
const tekst = 'Wynik to: ';

const result = add(number1, number2, printResult, tekst);
console.log(result);
