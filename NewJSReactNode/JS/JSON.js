// const data = `
//     {
//         "user": {
//             "name": "Bartek",
//             "surname": "Kowalska",
//             "age": 32,
//             "languages": ["JavaScript", "SASS"],
//             "address": {
//                 "city": "Kielce",
//                 "street": "Warszawska"
//             }
//         }
//     }
// `

// const obj = JSON.parse(data)

// console.log(obj);
// console.log(obj.user.name); // Bartek

// const car = {
//     brand: "Ford",
//     model: "G4",
//     colors: ['red', 'green'],
//     engine: {
//         type: "v8"
//     }
// }

// const carJson = JSON.stringify(car)
// console.log(carJson);

// ===================== API JSON

fetch('https://swapi.dev/api/planets/1/')
	.then((res) => res.json()) 
	.then(showData);

function showData(obj) {
	console.log(obj);
}
