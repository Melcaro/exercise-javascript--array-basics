const shoesList = ['Converse', 'Vans', 'Adidas', 'Nike'];

const newBrand = shoesList.unshift('Andre');

console.log(shoesList);
console.log(shoesList.length);

const removedBrand = shoesList.shift();
console.log(shoesList);
console.log(shoesList.length);

const newShoesBrand = shoesList.push('Courir');

console.log(shoesList);
console.log(shoesList.length);

const removedShoesBrand = shoesList.pop();

console.log(shoesList);
console.log(shoesList.length);

const selectedBrands = shoesList.slice(0, 3);

console.log(shoesList);
console.log(shoesList.length);

console.log(selectedBrands);

const anotherShoesList = ['Decathlon', 'Repetto', 'Reebok', 'Celio'];

const allShoes = selectedBrands.concat(anotherShoesList);

console.log(allShoes);
console.log(allShoes.length);
