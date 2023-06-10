
const fs = require('fs');

class ProductManager {
  constructor(path) {
    this.path = path;
    this.products = [];
    this.idCounter = 1;
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

  addProduct(title, description, price, thumbnail, code, stock) {
    // Validar campos obligatorios
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.error('------------------------------------------------------', '\n', "Todos los campos son obligatorios.");
      return; // Salir del método sin agregar el producto
    }

    // Validar duplicados en el campo "code"
    const duplicateCode = this.products.some((product) => product.code === code);
    if (duplicateCode) {
      console.error('------------------------------------------------------', '\n', "El código ya está en uso.");
      return; // Salir del método sin agregar el producto
    }

    // Agregar el producto al arreglo
    const product = {
      id: this.idCounter++,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    this.products.push(product);
    this.saveProducts();
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      console.error('------------------------------------------------------', '\n', "Not found");
      return; //Salir del método sin encontrar el producto
    }
    return product;
  }

  updateProduct(id, updatedFields) {
    const product = this.products.findIndex((product) => product.id === id);
    if (product === -1) {
      console.error('Producto no encontrado.');
      return;
    }

    // Mantener el ID original y actualizar loscampos especificados
    this.products[product] = { ...this.products[product], ...updatedFields };
    this.saveProducts();
  }


  deleteProduct(id) {
    const product = this.products.findIndex((product) => product.id === id);
    if (product === -1) {
      console.error('Producto no encontrado.');
      return;
    }

    // Eliminar el producto del arreglo
    this.products.splice(product, 1);
    this.saveProducts();
  }

}

module.exports = ProductManager;
