const ProductManager = require("./product_manager");

describe("ProductManager", () => {
  let productManager;

  beforeEach(() => {
    productManager = new ProductManager();
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
