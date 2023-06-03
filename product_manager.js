class ProductManager {
  constructor() {
    this.products = [];
    this.idCounter = 1;
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
}

module.exports = ProductManager;
