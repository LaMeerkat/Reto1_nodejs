const ProductManager = require('./product_manager');

// Crear una instancia de la clase ProductManager
const productManager = new ProductManager();


// Agregar un producto
productManager.addProduct("Producto 1", "Descripción 1", 10, "imagen1.jpg", "ABC123", 5);
productManager.addProduct("Producto 2", "Descripción 2", 15, "imagen2.jpg", "DEF456", 3);
productManager.addProduct("Producto 3", "Descripción 3", 20, "imagen3.jpg", "GHI789", 8);
// sin todos los campos
productManager.addProduct("Producto 1", "Descripción 1", 10, "imagen1.jpg", "ABC123");
// codigo repetido
productManager.addProduct("Producto 3", "Descripción 3", 20, "imagen3.jpg", "GHI789", 8);
// Obtener todos los productos
const products = productManager.getProducts();
console.log('------------------------------------------------------', '\n', products);
// Obtener un producto por id
const product = productManager.getProductById(3);
console.log('------------------------------------------------------', '\n', product);
// Obtener un producto por id no existente
const product2 = productManager.getProductById(5);
console.log('------------------------------------------------------', '\n', product2);
