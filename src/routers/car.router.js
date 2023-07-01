const express = require('express');
const CarManager = require('../../car_manager');

const router = express.Router();
const carManager = new CarManager();

// Crear un nuevo carrito
router.post('/', (req, res) => {
  const cart = carManager.createCart();
  res.json(cart);
});

// Listar los productos del carrito
router.get('/:cid', (req, res) => {
  const { cid } = req.params;
  const cart = carManager.getCartById(cid);

  if (!cart) {
    return res.status(404).json({ error: 'Cart not found' });
  }

  res.json(cart.products);
});

// Agregar un producto al carrito
router.post('/:cid/product/:pid', (req, res) => {
  const { cid, pid } = req.params;
  const { quantity } = req.body;

  const cart = carManager.getCartById(cid);
  if (!cart) {
    return res.status(404).json({ error: 'Cart not found' });
  }

  const product = {
    id: pid,
    quantity: parseInt(quantity)
  };

  const existingProduct = cart.products.find(p => p.id === pid);
  if (existingProduct) {
    existingProduct.quantity += parseInt(quantity);
  } else {
    cart.products.push(product);
  }

  res.json(cart.products);
});

module.exports = router;
