import knex from 'knex';

class ContenedorSQL {
  constructor(config, tabla) {
    this.knex = knex(config);
    this.tabla = tabla;
  }

  async getById(id) {
    try {
      const product = await this.getAll();
      const productById = product.find((p) => p.id == id);
      return productById;
    } catch (error) {
      console.log('Error en getById');
    }
  }

  async getAll() {
    try {
      const products = await this.knex(this.tabla).select('*');
      return products;
    } catch (error) {
      console.log('Hubo un error en getAll');
    }
  }

  async save(elem) {
    try {
      await this.knex(this.tabla).insert(elem);
    } catch (error) {
      console.log('Error en save');
    }
  }

  async update(elem, id) {
    try {
      await this.knex.from(this.tabla).where('id', id).update(elem);
    } catch (error) {
      console.log('Error en update');
    }
  }

  async deleteById(id) {
    try {
      await this.knex.from(this.tabla).where('id', id).del();
    } catch (error) {
      console.log('Error en deleteById');
    }
  }

  async deleteAll() {
    try {
      await this.knex.from(this.tabla).del();
    } catch (error) {
      console.log('Error en deleteAll');
    }
  }

  async desconectar() {
    try {
      await this.knex.destroy();
    } catch (error) {
      console.log('Error en desconexion');
    }
  }
}

export default ContenedorSQL;
