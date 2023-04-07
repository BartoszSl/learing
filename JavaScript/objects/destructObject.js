const person = {
	name: 'Szymon',
	age: 17,
	job: 'Python Developer',
	salary: 2115,
    car: {
        brand: 'Audi',
        model: 'A5'
    }
};

const showInfo = ({ name: firstName , age, job, salary }) => {
	// const name = person.name
	// const age = person.age
	// const job = person.job
	// const salary = person.salary

	// Skrócony zapis

	// const { name: firstName , age, job, salary } = person;


	console.log(
		`${firstName} pracuje jako ${job} i ma ${age} lata i zarabia ${salary}$.`
	);
};

showInfo(person);

const showInfo2 = ({car: {brand, model}}) => {
    console.log(`Jego auto to ${brand} ${model}`);
}

showInfo2(person)


// Destrukturyzacja Tablic

const colors = ['red', 'green', 'blue']

const firstColor = colors[0]
const secondColor = colors[1]

const [first, second] = colors