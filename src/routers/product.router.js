const express = require('express');
const router = express.Router();
const ProductManager = require('../../product_manager');

const productManager = new ProductManager('./products.json');

// Ruta GET /api/products
router.get('/', (req, res) => {
  const { limit } = req.query;
  const products = productManager.getProducts();

  if (limit) {
    const limitedProducts = products.slice(0, parseInt(limit));
    return res.json(limitedProducts);
  }

  res.json(products);
});

// Ruta GET /api/products/:pid
router.get('/:pid', (req, res) => {
  const { pid } = req.params;
  const product = productManager.getProductById(parseInt(pid));

  if (!product) {
    return res.status(404).json({ error: 'Producto no encontrado.' });
  }

  res.json(product);
});

// Ruta POST /api/products
router.post('/', (req, res) => {
  const { title, description, code, price, status, stock, category, thumbnails } = req.body;

  // Validar que se proporcionen todos los campos necesarios
  if (!title || !description || !code || !price || !status || !stock || !category || !thumbnails) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
  }

  // Agregar el nuevo producto
  productManager.addProduct(title, description, code, price, status, stock, category, thumbnails);

  res.status(201).json({ message: 'Producto agregado exitosamente.' });
});

// Ruta PUT /api/products/:pid
router.put('/:pid', (req, res) => {
  const { pid } = req.params;
  const { title, description, code, price, status, stock, category, thumbnails } = req.body;

  // Validar que se proporcionen todos los campos necesarios
  if (!title || !description || !code || !price || !status || !stock || !category || !thumbnails) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
  }

  // Actualizar el producto con el id proporcionado
  productManager.updateProduct(parseInt(pid), { title, description, code, price, status, stock, category, thumbnails });

  res.json({ message: 'Producto actualizado exitosamente.' });
});

// Ruta DELETE /api/products/:pid
router.delete('/:pid', (req, res) => {
  const { pid } = req.params;

  // Eliminar el producto con el id proporcionado
  productManager.deleteProduct(parseInt(pid));

  res.json({ message: 'Producto eliminado exitosamente.' });
});

module.exports = router;
