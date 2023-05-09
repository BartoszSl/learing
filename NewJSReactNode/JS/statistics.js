const textarea = document.querySelector('#area');
const characters = document.querySelector('.characters');
const charactersNoSpaces = document.querySelector('.characters-no-spaces');
const words = document.querySelector('.words');
const senteaces = document.querySelector('.senteaces');


function onChange(e) {
    const text = textarea.value;
	const numCharacters = text.length;
	const numCharactersNoSpaces = text.replace(/[\r\n ]/g, '').length;
	const numWords = text.replace(/[\r\n ]/g, ' ').split(' ').length;
	const numSenteaces = text.split('.').length;
    
	characters.textContent = numCharacters;
	charactersNoSpaces.textContent = numCharactersNoSpaces;
	words.textContent = numWords;
	senteaces.textContent = numSenteaces;
}

textarea.addEventListener('input', onChange);