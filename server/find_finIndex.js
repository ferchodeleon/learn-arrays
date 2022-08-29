// Metodo parecido a find
const numbers = [2, 20, 30, 40, 50];
let number = undefined;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element === 30) {
        number = element
        break;
    }
}

console.log("igual a find" , number)

// Metodo parecido a findIndex
let number2 = -1;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element === 30) {
        number2 = i;
        break;
    }
}

console.log("igual a findIndex" , number2)

//Se utiliza find y findIndex

console.log("Method find", numbers.find(index => index === 30));
console.log("Method findIndex", numbers.findIndex(index => index === 30));
