/**
 * Converting an object into a string
 * 
 */
const product = {
    name: 'White T-shirt',
    price: 5.99,
    inventory: [
      { size: 'S', quantity: 100 },
      { size: 'M', quantity: 150 },
      { size: 'L', quantity: 75 }
    ],
    returnable: true,
    brand: { name: 'Luxury', origin: 'Taiwan' },
    customization: null
  };
  
  const jsonString = JSON.stringify(product);