const btn1 = document.querySelector('.click')
const btn2 = document.querySelector('.najechano')
const btn3 = document.querySelector('.double-click')

// kliknięce

btn1.addEventListener('click', function () {
    console.log('Kliknięto mnie!');
})

// najechanie 

btn2.addEventListener('mouseover', () => console.log('najechano na mnie!'))

// Double click 

const test = () => {
   console.log('Double click!'); 
}

btn3.addEventListener('dblclick', test)

// ! Listenery powinny znajdować się na samym dole kodu

// wszystkie guziki za pomoca jednego

const btns = document.querySelectorAll('button')

const hej = () => {
    console.log('Hej');
}

// Musimy się odnieść do funkcji forEach, aby odnieść się do kązdego guzika 

btns.forEach(btn => btn.addEventListener('click', hej))