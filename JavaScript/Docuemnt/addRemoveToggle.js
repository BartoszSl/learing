// naujpierw pobieramy elementy

const addButton = document.querySelectorAll('.add')
const deleteButton = document.querySelectorAll('.remove')
const toggleButton = document.querySelectorAll('.toggle')
const text = document.querySelectorAll('p')

const addClass = () => {
    text.classList.add('test')
}

const removeClass = () => {
    text.classList.remove('test')
}

addButton.addEventListener('click', addClass)
deleteButton.addEventListener('click', removeClass)

// To samo co, ale mniej pisania

const toggleClass = () => {
    text.classList.toggle('test')
}

toggleButton.addEventListener('click', toggleClass)