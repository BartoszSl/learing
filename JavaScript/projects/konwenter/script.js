const convertBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const conventerValue = document.querySelector('#converter');
const result = document.querySelector('.result');

let fahrenheit;
let celsius;

const convertFunction = () => {
	if (one.textContent === '°C') {
		fahrenheit = conventerValue.value * 1.8 + 32;
		result.textContent = `${conventerValue.value} °C to ${fahrenheit.toFixed(1)} °F`;
		conventerValue.value = '';
	} else if (one.textContent === '°F') {
		celsius = (conventerValue.value - 32) / 1.8;
		result.textContent = `${conventerValue.value} °F to ${celsius.toFixed(1)} °C`;
		conventerValue.value = '';
	}
};

const resetFunction = () => {
    conventerValue.value = '';
    result.textContent = ''
}

const changeType = () => {
    if (one.textContent === '°C') {
        one.textContent = '°F'
        two.textContent = '°C'
        result.textContent = ''
    }else if (one.textContent === '°F') {
        one.textContent = '°C'
        two.textContent = '°F'
        result.textContent = ''
    }
}

convertBtn.addEventListener('click', convertFunction);
resetBtn.addEventListener('click', resetFunction)
changeBtn.addEventListener('click', changeType)