const coffeeMenu = require("./code_data")

// NUMBER 1
console.log('----NUMBER 1----')
console.log('The data has been cleaned')

// NUMBER 2
console.log('\n----NUMBER 2----')
coffeeMenu.forEach(element => console.log([element.name]));

// NUMBER 3
console.log('\n----NUMBER 3----')
const fiveUnder = coffeeMenu.filter(element => element.price <= 5);
fiveUnder.forEach(element => console.log([element.name]));

// NUMBER 4
console.log('\n----NUMBER 4----')
const evenPrice = coffeeMenu.filter(element => element.price % 2 == 0)
evenPrice.forEach(element => console.log([element.name]))

// NUMBER 5
console.log('\n----NUMBER 5----')
let prices = coffeeMenu.map(({price}) => price);
let totalPrice = prices.reduce((accumulator, currentValue) => {
    accumulator = accumulator + currentValue
    return accumulator
}, 0)

console.log('Total:', totalPrice)


// NUMBER 6
console.log('\n----NUMBER 6----')
const seasonalDrinks = coffeeMenu.filter(element => element.seasonal);
seasonalDrinks.forEach(element => console.log([element.name]));

// NUMBER 7
console.log('\n----NUMBER 7----')
seasonalDrinks.forEach(element => console.log(element.name, 'with imported beans'));