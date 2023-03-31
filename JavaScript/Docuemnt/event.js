const btn = document.querySelector('.event')

const test = (e) => {
    console.log(e); // wyswietla dane o obiekcie
    console.log(e.target); // wyświetla dane o typie przycisku i co jest w nim
    console.log(e.target.classList); // wyświetla klasy znajdujace sie w elemencie
}

btn.addEventListener('click', test)