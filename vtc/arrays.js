const matrix = [
    "jan", "feb", "mar", "apr", "may", [
        "week1", "week2", "week3", "week4", [
            "day1", "day2", "day3", "day4", "day5"
        ]
    ]
];

const flattenedMatrix = matrix.flat(Infinity);
console.log(flattenedMatrix);

let customers = ['John', 'Smith', 'Fox', 'Jones', 'Doe', 'Wyatt'];

// Remove 'John' from the array using splice
customers.splice(0, 1);

// Sort the remaining customers in ascending order
customers.sort();

// Join the sorted array into a string with '|' as separator and log it
console.log(customers.join('|'));

// Sample array of product objects
let products = [
    {name: 'M1 Macbook', code: 'M100'},
    {name: '100 kW Generator', code: 'G100'},
    {name: 'iPhone 13', code: 'I130'}
];

// Filter out the product '100 kW Generator' and map remaining products to a string format
let processedProducts = products
    .filter(product => !product.name.includes('100 kW Generator'))  // Filtering out specific product
    .map(product => `${product.name} - ${product.code}`);  // Mapping to "Name - Code" format

console.log(processedProducts);