// function solution(numbers) {
//     // Tu código aquí 👈
//     return numbers.reduce((currentPrevious, currentActual) => currentPrevious + currentActual)
// };

function solution(title) {
	// Tu código aquí 👈

	return title.split(" ").join('-')
};

console.log(solution("La forma de correr Python"))