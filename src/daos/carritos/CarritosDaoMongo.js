import ContenedorMongoDb from '../../contenedores/ContenedorMongoDb.js';

class CarritosDaoMongoDb extends ContenedorMongoDb {
  constructor() {
    super('carritos', {
      products: { type: [], required: true },
    });
  }

  async save(carrito = { products: [] }) {
    return super.save(carrito);
  }
}

export default CarritosDaoMongoDb;
