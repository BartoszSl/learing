const allCircles = document.querySelectorAll('.cricle');
const gold = document.querySelectorAll('.gold');
const lime = document.querySelectorAll('.lime');

const newCircle = document.createElement('div');
newCircle.classList.add('circle', 'purple');
gold.append(newCircle);

lime.addEventListener('click', e => {
    if(e.target.matcher('.circle2')){
        console.log(e.taget);
    }
})

// ten sam zapis co 

lime.addEventListener('click', e => {
    if(e.target.classList.contains('circle2')){
        console.log(e.taget);
    }
})
