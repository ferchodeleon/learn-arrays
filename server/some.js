const numbers = [1, 1, 3, 4];

let rta = false;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element % 2 == 0) {
    rta = true;
    break;
  }
}

console.log(rta);

//Some ayuda a reducir las lineas de codigo
//Indica si al menos 1 se cumple osea 1 es = true

const rta2 = numbers.some((item) => item % 2 == 0);

console.log(rta2);
