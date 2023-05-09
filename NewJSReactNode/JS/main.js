// const school = {
// 	name: 'ZSI',
// 	students: [],
// 	addStudent: function (name, lastName) {
// 		const student = {
// 			name: name,
// 			lastName: lastName,
// 		};
// 		const index = this.students.length;
// 		this.students[index] = student;
// 	},
// 	showStudents: function () {
// 		if (this.students.length == 0) {
// 			console.log('Szkoła nie ma studentów');
// 			return;
// 		} else {
// 			for (let i = 0; i < this.students.length; i++) {
// 				const data = this.students[i];
// 				console.log('Imie: ' + data.name, '\nNazwisko: ' + data.lastName);
// 			}
// 		}
// 	},
// 	getNumStudents: function () {
// 		return "Ilość Studentów: " + this.students.length;
// 	},
// 	resetStudents: function () {
// 		this.students = [];
// 	},
// };

// school.addStudent('Bartosz', 'Slusarczyk');
// school.addStudent('Test', '4');
// school.showStudents();

// console.log(school.getNumStudents());
// school.resetStudents();

// school.showStudents();

//  Getters and Setters

// const user = {
//     _name: null,

//     set name(newValue){
//         this._name = newValue
//     },

//     get name() {
//         return this._name
//     }
// }
// user.name = "Ania"

// console.log(user._name);

