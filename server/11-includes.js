// Method includes find the word or number in the parameter and return tru or false
// Method with for

const includesInArray = ['hola', 'saul', 'alberto'];
let findInArray = false;

for (let i = 0; i < includesInArray.length; i++) {
    const element = includesInArray[i];
    if(element === 'hola') {
        findInArray = true;
        break
    }
}

console.log('includes with for', findInArray)

// Used method includes

console.log('Method includes', includesInArray.includes('hola'))