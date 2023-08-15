function removeElement(array, item) {
    const index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    }
    return array;
}

const remove = removeElement([1, 2, 3, 4, 5, 6, 7], 5);
console.log(remove); 
