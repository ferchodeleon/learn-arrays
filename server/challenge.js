// function solution(numbers) {
//     // Tu código aquí 👈
//     return numbers.reduce((currentPrevious, currentActual) => currentPrevious + currentActual)
// };

function miniMaxSum(arr) {
  // Variable para validar si en el array todos los números son iguales
  const num = [...arr].reverse();

  // Creo las variables para agregar los números respecto a la logica.
  let sumMax = [];
  let sumMin = [];

  // Se realiza la validación si los array son iguales con el fin de utilizar el algoritmo correcto
  if (num.toString() == arr.toString()) {
    //Algoritmo en caso que los números en el array son iguales
    arr.map((item, index, arr) => {
      if (index != arr.length - 1) {
        sumMax.push(item);
      }
      if (index != arr.length - arr.length) {
        sumMin.push(item);
      }
    });
  } else {
    // Variables encontrar el número maximo y minimo en el array
    const numMin = arr.reduce((n, m) => Math.min(n, m));
    const numMax = arr.reduce((n, m) => Math.max(n, m));

    // Algoritmo en caso que los números son diferentes
    arr.map((item, index, arr) => {
      if (item != numMin) {
        sumMax.push(item);
      }
      if (item != numMax) {
        sumMin.push(item);
      }
    });
  }

  // Realizo la suma de todos los números en el array
  const totalMin = sumMin.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
  const totalMax = sumMax.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );

  //Concateno los resultados y agrego el espacio en medio de los dos resultados, convirtiendo en un string
  const total = `${totalMin} ${totalMax}`;

  //Imprimo
  console.log(total);
}

// console.log(miniMaxSum([4, 8, 123, 7894, 6589]));
// console.log(miniMaxSum([1, 2, 3, 4, 5]));
console.log(miniMaxSum([5, 5, 5, 5, 5]));
