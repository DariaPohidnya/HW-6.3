const removeElement = (array, item) => array.filter(element => element !== item);

const array = [5, 1, 3, 7, 6, 4, 2];
const newArray = removeElement(array, 4);

console.log(newArray);
