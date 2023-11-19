const array = [10, 20, 30, 40, 50];
const resultado = array.find((elemento) => elemento === 30);

const index = array.findIndex((element) => element === 30);
console.log(index);
console.log(array.splice(index, 1));
