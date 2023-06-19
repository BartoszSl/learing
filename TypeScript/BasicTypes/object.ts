const person: {
    role: [number, string]
} = {
    role: [1, 'test']
}

person.role.push('test2')

console.log(person.role);