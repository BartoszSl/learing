// zadanie 1

// const obrazek = document.querySelector('img')

// obrazek.setAttribute('src', 'zadanie.jpg')
// obrazek.setAttribute('alt', 'ptak przygotowujacy się do lotu')


// const timeSet = () => {
//     console.log('Hej');
// }

// setTimeout(timeSet, 2000)

// zadanie 2

const div = document.createElement('div')
const ulList = document.createElement('ul')

document.body.append(div)
div.classList.add('wrapper')
div.append(ulList)

const number = 5 

for(let i = 1; i <= number; i++) {
    const liElement = document.createElement('li')
    liElement.textContent = i
    liElement.setAttribute('data-atrybut', i)
    ulList.append(liElement)
}

const middleLi = document.querySelector('[data-atrybut="3"]')

console.log(middleLi);
console.log(middleLi.closest('.wrapper'));