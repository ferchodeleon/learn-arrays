// Flat es inmutable, consiste en retornar un array que tiene varios array en un solo array
// array.flat(produndidad)

const matriz = [
    [1,2,3],
    [4,5,6, [12,23]],
    [7,8,9]
];
const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element)
    }
}
const rta = matriz.flat(3)
console.log('for', newArray)
console.log('flat', rta)