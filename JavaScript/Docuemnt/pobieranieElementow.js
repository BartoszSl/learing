// DOM, DOCUMENT, WINDOW

//  window - reprezentuje wszystko

// Typy:

// 1. getElementById // stare

const testID = document.getElementById('idItem');

console.log(testID);

// 2. getElementByTagName // stare

const testTagName = document.getElementsByTagName('li');

console.log(testTagName);

// 3. getElementByClassName // stare

const testClassName = document.getElementsByClassName('classItem');

console.log(testClassName);

// 4. querySelector // UŻYWANE !!

const testByQuerySelector = document.querySelector('li'); // pobiera JEDEN element // najbliższy
// jeśli chcemy się odnieść do klasy przed nazwą musimy dopisać "."
// Jeśli chcemy się odnieść do id przed nazwą musimy dopisać "#"

// możemy też zapisaćw taki sposób: 'li:nth-child(2)' - co jak w css daje nam, że pobieramy drugie dziecko li

console.log(testByQuerySelector);


// 5. querySelectorAll 

const testByQuerySelectorAll = document.querySelectorAll('.classItem') // pobeira wszystkie elementy 

console.log(testByQuerySelectorAll);