const btn = document.querySelector('button')
const img = document.querySelector('img')

const URL = 'https://dog.ceo/api/breeds/image/random'

fetch().then().catch()


btn.addEventListener('click', () => {
    fetch(URL)
        .then(res => res.json())
        .then(data => img.setAttribute('src', data.message))
        .catch(err => console.error(err))
    
    })