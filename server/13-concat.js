//Concat es un metodo inmutable, no modifica el array
// Sirve para fusionar dos array

const array = [1,2,3,4,5];
const otherArray = [6,7,8,9,10];

const newArray = [...array];
for (let i = 0; i < otherArray.length; i++) {
    const element = otherArray[i];
    newArray.push(element)
}

console.log(`For ${newArray}`);

const result = array.concat(otherArray);
const result1 = array.concat(...otherArray)
const result2 = [...array, ...otherArray]
const result3 = [array, ...otherArray]
console.log(`Concat ${result}`);
console.log(`... ${result1}`);
console.log(`... ${result2}`);
console.log(`result3 ${result3}`);