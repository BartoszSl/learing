const link = document.querySelector('a')
const img = document.querySelector('img')
const p = document.querySelector('p')

// setAtibute dodaje i ustawia nowy atrybut

link.setAttribute('href', '#')
link.setAttribute('target', '_blank')


console.log(img.getAttribute('alt')); // getAtribute pobiera wartość, która jest przypisana do danego atrybutu

console.log(p.hasAttribute('style')); // Sprawdza czy mamy jakiś atrybut 

link.removeAttribute('href')