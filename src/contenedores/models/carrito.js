import mongoose from 'mongoose';
const carritoCollection = 'carrito';
const cartSchema = new mongoose.Schema({
  carrito: { type: Array, required: true },
});
const Cart = mongoose.model(carritoCollection, cartSchema);

export { Cart };
