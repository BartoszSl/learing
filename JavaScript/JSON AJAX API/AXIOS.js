const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const URL = 'https://dog.ceo/api/breeds/image/random';

// Typical 

fetch(URL)
	.then((res) => res.json())
	.then((res) => one.setAttribute('src', res.message));

// By natural axios

axios.get(URL).then((res) => two.setAttribute('src', res.data.message));

// By Async

async function showImage() {
    const response = await axios.get(URL)
    three.setAttribute('src', response.data.message)
}

showImage()