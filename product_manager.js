const fs = require('fs');

class ProductManager {
  constructor(path) {
    this.path = path;
    this.products = [];
    this.loadProducts();
  }

  loadProducts() {
    try {
      const data = fs.readFileSync(this.path, 'utf-8');
      this.products = JSON.parse(data);
    } catch (error) {
      console.error('Error al cargar los productos:', error);
    }
  }

  saveProducts() {
    try {
      fs.writeFileSync(this.path, JSON.stringify(this.products, null, 2), 'utf-8');
    } catch (error) {
      console.error('Error al guardar los productos:', error);
    }
  }

  generateUniqueID() {
    const ids = this.products.map((product) => product.id);
    let newId;
    do {
      newId = Math.floor(Math.random() * 1000000).toString();
    } while (ids.includes(newId));

    return newId;
  }

  addProduct(title, description, code, price, status, stock, category, thumbnails) {
    // Generar un ID único para el producto
    const id = this.generateUniqueID();

    // Agregar el producto al arreglo
    const product = {
      id,
      title,
      description,
      code,
      price,
      status,
      stock,
      category,
      thumbnails: Array.isArray(thumbnails) ? thumbnails : []
    };
    this.products.push(product);
    this.saveProducts();
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    return this.products.find((product) => product.id === id);
  }

  updateProduct(id, updatedFields) {
    const productIndex = this.products.findIndex((product) => product.id === id);
    if (productIndex === -1) {
      console.error('Producto no encontrado.');
      return;
    }

    // Mantener el ID original y actualizar los campos especificados
    this.products[productIndex] = { ...this.products[productIndex], ...updatedFields };
    this.saveProducts();
  }

  deleteProduct(id) {
    const productIndex = this.products.findIndex((product) => product.id === id);
    if (productIndex === -1) {
      console.error('Producto no encontrado.');
      return;
    }

    // Eliminar el producto del arreglo
    this.products.splice(productIndex, 1);
    this.saveProducts();
  }
}

module.exports = ProductManager;


