import ContenedorMongoDb from '../../contenedores/ContenedorMongoDb.js';

class ProductosDaoMongoDb extends ContenedorMongoDb {
  constructor() {
    super('productos', {
      name: { type: String, required: true },
      code: { type: String },
      thumbnail: { type: String, required: true },
      price: { type: Number, required: true },
      stock: { type: Number },
      description: { type: String, required: true },
    });
  }
}

export default ProductosDaoMongoDb;
