import mongoose from 'mongoose';
import config from '../config.js';
import { Productos } from './models/productos.js';

try {
  //conexion hacia la base de datos
  await mongoose.connect(config.mongodb.cnxStr, config.mongodb.options);
  console.log('Base de datos conectada');
} catch (error) {
  console.log(error);
}

class ContenedorMongoDB {
  constructor(schema) {
    this.schema = schema;
  }

  async list() {
    try {
      const arr = await this.schema.find({});
      console.log(arr);
      return arr;
    } catch (error) {
      console.log(error);
    }
  }

  async getById(idEl) {
    try {
      const el = await this.schema.findOne({ id: idEl });
      console.log(el);
      return el;
    } catch (error) {
      console.log(error);
    }
  }

  async save(obj) {
    try {
      const newObj = new this.schema(obj);
      const data = await newObj.save();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteById(idEl) {
    try {
      const data = await this.schema.findByIdAndDelete(idEl);
      console.log(data);
      return 'Elemento Eliminado';
    } catch (error) {
      console.log(error);
    }
  }

  async changeById(idEl, obj) {
    try {
      const el = await this.schema.findByIdAndUpdate(idEl, obj);
      console.log(el);
      return 'Elemento Actualizado';
    } catch (error) {
      console.log(error);
    }
  }
}
// const prueba1 = new ContenedorMongoDB(Productos);
// const getAllData = await prueba1.list();

export default ContenedorMongoDB;
