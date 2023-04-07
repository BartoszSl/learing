function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.sayHi = function () {
	console.log(`Cześć, jestem ${this.name}.`);
};

Person.prototype.showAge = function () {
	console.log(`Mam ${this.age} lat/a.`);
};

const person1 = new Person('Edward', 50);

person1.sayHi();
person1.showAge();

// Nowy zapis

class Person2 {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	sayHi() {
		console.log(`Cześć, jestem ${this.name}.`);
	}

	showAge() {
		console.log(`Mam ${this.age} lat/a.`);
	}
}

const person2 = new Person2('Kuba', 27);

person2.sayHi();
person2.showAge();


// Extends & Super

class Animal {
    constructor(name) {
        this.name = name   
    }

    sound() {
        console.log(`Zwierzak robi "Hau Hau".`);
    }
}

class Dog extends Animal {
    constructor(name, age) {
        super(name)
        this.age = age
    }
}

class Cat extends Animal {
    constructor(name){
        super(name)
    }
    sound() {
        console.log('Miau');
    }
}

const dog = new Dog('Riko', 3)
const cat = new Cat('kot')

console.log(dog);
dog.sound()

console.log(cat);
cat.sound()


