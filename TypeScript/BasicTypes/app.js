function add(n1, n2, showResult, text) {
    var result = n1 + n2;
    if (showResult) {
        return tekst + result;
    }
}
var number1 = 6;
var number2 = 2.5;
var printResult = true;
var tekst = 'Wynik to: ';
var result = add(number1, number2, printResult, tekst);
console.log(result);
