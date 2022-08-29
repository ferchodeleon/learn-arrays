// function solution(numbers) {
//     // Tu código aquí 👈
//     return numbers.reduce((currentPrevious, currentActual) => currentPrevious + currentActual)
// };

function solution(numbers) {
    // Tu código aquí 👈 
    return numbers.every(number => number % 2 == 0)
}; 

console.log(solution([2, 4, 6, 8, 10, 3]))