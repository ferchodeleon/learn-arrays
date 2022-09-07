const array = ['Saul', 'Fern', 'Maria', 'Jose'];
let result = '';

//Join en caso de utilizar un for para solucionarlo

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(i == array.length - 1){
        result = result + element
    } else {
        result = result + element + "-"
    }
}

console.log(`for ${result}`);

// Join en caso de utilizar el metodo Join

console.log(`Join ${array.join('--')}`)