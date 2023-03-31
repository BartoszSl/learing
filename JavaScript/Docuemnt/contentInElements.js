const btn = document.querySelector('button');

btn.outerHTML = '123' // usuwa prztcisk i w jego miejsce wstawilismy tekst

btn.innerHTML = '123' // zmienia tylko zawartość W przycisku

document.body.innerHTML = ' ' //  wpływa to na całe body, np. to usuw wszystko co znajduje sięw body

btn.innerHTML = '<li> 123 </li>'; // Tworzymy li w guziku za pomocą <li>

// innterHTML - używamy TYLKO wtedy, kiedy my coś dodajemy do strony, danie takiej możliwości dla użytkownika jest NIEBEZPIECZNE!!


// innerText // textContent


const innerT = document.querySelector('.inner-text') // zwraca tylko tekst, czyli to co widzimy na stronie internetowej

const textC = document.querySelector('.text-content') // zwraca wszystko co znajduje się w paragrafie, nawet te niewidoczne elementy

