const numbers = [0.5, 4, 'abc']

const names = ['Ania', 'Szymon', 'David', 'Bartek']

numbers.forEach(num => console.log(num * num)) // foreach wykonuje działanie z osobnymi elementami z tablicy 

const bigNames = names.map(name => name.toUpperCase()) // map działa jak foreach tylko zwraca wynik w tabeli
console.log(bigNames);

const showBigNames = name => {
    console.log(name.toUpperCase());
}

names.forEach(showBigNames)

// krótszy zapis

names.forEach(el => console.log(el.toUpperCase()))