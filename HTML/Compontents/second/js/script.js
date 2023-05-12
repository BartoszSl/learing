const btn = document.querySelector('button')
const input = document.querySelector('input')

const showSearchBar = () => {
    input.classList.toggle('active')
}

btn.addEventListener('click', showSearchBar)