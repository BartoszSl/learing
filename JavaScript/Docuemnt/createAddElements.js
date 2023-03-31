const ulList = document.createElement('ul');
const liItem = document.createElement('li');

liItem.textContent = 'cześć';

document.body.appendChild(ulList); // .body oznacza, że chcemy dodać w body, a nie np. w Headzie

ulList.appendChild(liItem) // dodajemy "dziecko" do naszej listy


const div = document.createElement('div')
const p = document.createElement('p')
const h2 = document.createElement('h2')

// div.appendChild(p, h2)

// inna lepsza wersja:

div.append(p, h2, 'Cześć') // możemy dodać kilka elementów na raz + typ string