const user = {
    name: 'Bartek',
    age: 23
}

const pet = {
    name: 'Riko',
    type: 'dog'
}

const userInfo = Object.assign({}, user, pet)
console.log(userInfo);

const userCopy = Object.assign({}, user)
userCopy.age = 25
console.log(userCopy);