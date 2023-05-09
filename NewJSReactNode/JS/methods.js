// =========================== Numbers

// let num = 123.12

// let num2 = new Number(434.123)

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);

// console.log(Number.parseInt("123") + 102);
// console.log(Number.parseFloat("5245.43") + 53);
// console.log(Number.isInteger(4343));
// console.log(Number.isInteger("43"));

// let a = 1 / 0 // Infinity Number

// console.log(Number.isFinite(a));

// console.log(Math.round(12.56)); // 13
// console.log(Math.floor(12.96)); // 12
// console.log(Math.ceil(12.01)); // 13

// console.log(Math.random() * 10); // od 1 do 10

// console.log(143.34343.toFixed(2));

// =========================== Strings

// let str = "Hello ".concat("World!")
// console.log(str);

// str = str.toUpperCase()
// console.log(str);

// str = str.toLowerCase()
// console.log(str);

// console.log(str.charAt(2));

// console.log(str.charCodeAt(4));

// let txt = "A B C D E"
// let arr = txt.split(" ")
// console.log(arr);

// str = arr.join("|")
// console.log(str);

// str = "A|B|C|D|E"
// str = str.replace("C", "test")

// str = "A|B|C|D|E|A|B|C|D|E"
// str = str.replace(/C/g, "test")
// console.log(str);

// =========================== SORT

// let tab = [87, 111, 56, 986]
// tab = tab.sort() // Alfabetycznie
// console.log(tab);

// tab = tab.sort(function (a, b) {
//     return a - b
//     // Zwrócona ujemna wartość to a mniejsze od b
//     // 0 to równe wartości
//     // dodatnia to b większe od a
// })

// console.log(tab);

// =========================== Iteracja po tablicach

// let arr = [5, 10, 15, 20, 25]

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for( let el of arr ){
//     console.log(el);
// }

// arr.forEach(function (item, index) {
//     console.log(`Index: ${index} - ${item}`);
// })



// =========================== Serializacja



// let source = {
// 	str: 'text',
// 	a: 23,
// 	data: {
// 		b: 111,
// 		arr: [1, 2, 3, 4, 5],
// 	},
//     date: new Date()
// };

// let strCopy = JSON.stringify(source)
// console.log(strCopy);

// let copy = JSON.parse(strCopy)
// copy.date = new Date(copy.date);
// console.log(copy);


// // Oddzielne obiekty

// console.log(copy === source); // falsse 
// console.log(copy.data === source.data); // falsse 
// console.log(copy.data.arr === source.data.arr); // falsse 



// =========================== Property

// let obj = {
//     a: 12
// }

// Object.defineProperty(obj, "prop", {
//     value: "Test", // Opisuje właściwosć
//     writable: true, // Czy będziemy mogli zmieniać dane
//     configurable: true, // Czy może być dana właściwośc skasowana
//     enumerable: true // Czy może być dana właściwość przeczytana przez np. pętle for in
// })

// console.log(obj);