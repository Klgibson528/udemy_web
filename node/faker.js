var faker = require("faker");

// var randomProduct = faker.commerce.productName(); // Generates random product
// var randomPrice = faker.commerce.price(); // Generates random price

for (var i = 0; i < 10; i++) {
  console.log(faker.commerce.productName() + " - $" + faker.commerce.price());
}
