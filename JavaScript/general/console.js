console.log('cześć');
console.log(window.console);

console.warn('warning')
console.error('error 123')

console.table(['143', 4563, 756])

const persons = [
    {
        name: 'Lisa',
        age: 23
    },
    {
        name: 'Bartek',
        age: 17,
        fav: null
    }
]

console.table(persons);