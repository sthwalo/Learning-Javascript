/**
 * There are several ways of dealing with parsed data i.e the data returned from the server, We have the dot notation, 
 */
const product = `{
    "name": "White T-shirt",
    "price": 5.99,
    "inventory": [
      {"size": "S", "quantity": 100},
      {"size": "M", "quantity": 150},
      {"size": "L", "quantity": 75}
    ],
    "returnable": true,
    "brand": {
      "name": "Luxury",
      "origin": "Taiwan"
    },
    "customization": null
  }`;
  //converting the parsed data into an object
  const jsObject = JSON.parse(product);
  console.log(jsObject);
  //Parsed JSON data
  const productJs = JSON.parse(product);
  
  console.log("Product Name =>", productJs.inventory); //Using dot notation