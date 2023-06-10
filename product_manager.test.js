const ProductManager = require("./product_manager");

describe("ProductManager", () => {
  let productManager;

  beforeEach(() => {
    productManager = new ProductManager();
  });
  test("actualizar un producto existente", () => {
    // Agregar un producto de prueba
    productManager.addProduct(
      "Producto 1",
      "Descripción 1",
      10,
      "imagen1.jpg",
      "ABC123",
      5
    );

    // Actualizar el producto agregado
    const updatedFields = {
      title: "Producto 1 actualizado",
      price: 15,
    };
    productManager.updateProduct(1, updatedFields);

    // Verificar que el producto se haya actualizado correctamente
    const product = productManager.getProductById(1);
    expect(product).toEqual({
      id: 1,
      title: "Producto 1 actualizado",
      description: "Descripción 1",
      price: 15,
      thumbnail: "imagen1.jpg",
      code: "ABC123",
      stock: 5,
    });
  });

  test("no se puede actualizar un producto inexistente", () => {
    // Intentar actualizar un producto inexistente
    const updatedFields = {
      title: "Producto inexistente actualizado",
      price: 20,
    };
    productManager.updateProduct(1, updatedFields);

    // Verificar que no se haya realizado ninguna actualización
    const product = productManager.getProductById(1);
    expect(product).toBeUndefined();
  });

  test("eliminar un producto existente", () => {
    // Agregar un producto de prueba
    productManager.addProduct(
      "Producto 1",
      "Descripción 1",
      10,
      "imagen1.jpg",
      "ABC123",
      5
    );

    // Eliminar el producto agregado
    productManager.deleteProduct(1);

    // Verificar que el producto se haya eliminado correctamente
    const product = productManager.getProductById(1);
    expect(product).toBeUndefined();
  });

  test("no se puede eliminar un producto inexistente", () => {
    // Intentar eliminar un producto inexistente
    productManager.deleteProduct(1);

    // Verificar que no se haya realizado ninguna eliminación
    const product = productManager.getProductById(1);
    expect(product).toBeUndefined();
  });

  test("agregar un producto correctamente", () => {
    productManager.addProduct(
      "Producto 1",
      "Descripción 1",
      10,
      "imagen1.jpg",
      "ABC123",
      5
    );

    const products = productManager.getProducts();
    expect(products.length).toBe(1);

    const product = products[0];
    expect(product.title).toBe("Producto 1");
    expect(product.description).toBe("Descripción 1");
    expect(product.price).toBe(10);
    expect(product.thumbnail).toBe("imagen1.jpg");
    expect(product.code).toBe("ABC123");
    expect(product.stock).toBe(5);
  });

  test("no se puede agregar un producto sin campos obligatorios", () => {
    productManager.addProduct("", "Descripción 1", 10, "imagen1.jpg", "ABC123", 5);
    productManager.addProduct("Producto 1", "", 10, "imagen1.jpg", "ABC123", 5);
    productManager.addProduct("Producto 1", "Descripción 1", null, "imagen1.jpg", "ABC123", 5);
    productManager.addProduct("Producto 1", "Descripción 1", 10, "", "ABC123", 5);
    productManager.addProduct("Producto 1", "Descripción 1", 10, "imagen1.jpg", "", 5);
    productManager.addProduct("Producto 1", "Descripción 1", 10, "imagen1.jpg", "ABC123", undefined);

    const products = productManager.getProducts();
    expect(products.length).toBe(0);
  });

  test("no se puede agregar un producto con código duplicado", () => {
    productManager.addProduct(
      "Producto 1",
      "Descripción 1",
      10,
      "imagen1.jpg",
      "ABC123",
      5
    );

    productManager.addProduct(
      "Producto 2",
      "Descripción 2",
      20,
      "imagen2.jpg",
      "ABC123",
      3
    );

    const products = productManager.getProducts();
    expect(products.length).toBe(1);
  });

  test("obtener un producto por id", () => {
    productManager.addProduct(
      "Producto 1",
      "Descripción 1",
      10,
      "imagen1.jpg",
      "ABC123",
      5
    );

    productManager.addProduct(
      "Producto 2",
      "Descripción 2",
      20,
      "imagen2.jpg",
      "DEF456",
      3
    );

    const product = productManager.getProductById(2);
    expect(product).toEqual({
      id: 2,
      title: "Producto 2",
      description: "Descripción 2",
      price: 20,
      thumbnail: "imagen2.jpg",
      code: "DEF456",
      stock: 3,
    });
  });

  test("obtener un producto por id inexistente", () => {
    const product = productManager.getProductById(1);
    expect(product).toBeUndefined();
  });
});
