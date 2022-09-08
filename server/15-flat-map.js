// flatMap también es inmutable es una conbinación de flat y map, primero realiza la iteración
// Luego los aplana

const users = [
    {userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    {userId: 2, username: "Mark", attributes: ["Lovely"]},
    {userId: 3, username: "Nick", attributes: ["Nice", "Cute"]},
];

const rta = users.map(user => user.attributes).flat();
const rta2 = users.flatMap(user => user.attributes);
console.log('Map y Flat', rta)
console.log('flatMap', rta2)