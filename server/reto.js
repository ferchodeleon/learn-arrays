function solution(array) {
    let newArray = []
    array.map(word => word.length >= 4 ? newArray.push(word) : null)
    console.log(newArray);
};

solution(['amor', 'sol', 'piedra', 'día']);