import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  id: { type: String, required: true },
  thumbnail: { type: String, required: true },
  price: { type: Number, required: true, default: 0 },
});

const Productos = mongoose.model('productos', productSchema);
export { Productos };
