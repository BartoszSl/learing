enum Roles {
	ADMIN,
	AUTHOR,
	RANK1,
	RANK0,
}

const person = {
	name: 'Bartek',
	hobbies: [1, 'Test'],
	role: Math.floor(Math.random() * 4),
};

person.hobbies.push('elo')

if (person.role === Roles.ADMIN) {
	console.log('Jesteś Adminem!');
} else if (person.role === Roles.AUTHOR) {
	console.log('Jesteś Autorem');
} else if (person.role === Roles.RANK1) {
	console.log('Jesteś Rank1');
} else if (person.role === Roles.RANK0) {
	console.log('Jesteś Rank0, noobie');
}
