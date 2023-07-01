const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./src/routers/product.router');
const carRoutes = require('./src/routers/car.router');
const app = express();

app.use(bodyParser.json());

// Rutas de productos
app.use('/api/products', productRoutes);
app.use('/api/cars', carRoutes);

app.listen(8080, () => {
  console.log('Servidor escuchando en el puerto 8080');
});





/*
// Agregar algunos productos de ejemplo
productManager.addProduct("Producto 1", "Descripción 1", 10, "imagen1.jpg", "ABC123", 5);
productManager.addProduct("Producto 2", "Descripción 2", 15, "imagen2.jpg", "DEF456", 3);
productManager.addProduct("Producto 3", "Descripción 3", 20, "imagen3.jpg", "GHI789", 8);

// Obtener todos los productos
const products = productManager.getProducts();
console.log('Productos actuales:');
console.log(products);
console.log('------------------------------------------------------');

// Obtener un producto por id
const product = productManager.getProductById(2);
console.log('Producto encontrado por ID (2):');
console.log(product);
console.log('------------------------------------------------------');

// Obtener un producto por id no existente
const product2 = productManager.getProductById(5);
console.log('Producto encontrado por ID (5):');
console.log(product2);
console.log('------------------------------------------------------');

// Actualizar un producto existente
const updatedFields = {
  title: "Producto 2 Actualizado",
  price: 250,
  stock: 50
};
productManager.updateProduct(2, updatedFields);

// Verificar el producto actualizado
const updatedProduct = productManager.getProductById(2);
console.log('Producto actualizado:');
console.log(updatedProduct);
console.log('------------------------------------------------------');

// Eliminar un producto existente
productManager.deleteProduct(1);

// Verificar que el producto se haya eliminado
const deletedProduct = productManager.getProductById(1);
console.log('Producto eliminado:');
console.log(deletedProduct);
console.log('------------------------------------------------------');

// Obtener todos los productos después de las operaciones
const updatedProducts = productManager.getProducts();
console.log('Productos actualizados:');
console.log(updatedProducts);
*/