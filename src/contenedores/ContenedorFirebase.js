import admin from 'firebase-admin';
import config from '../config.js';

admin.initializeApp({
  credential: admin.credential.cert(config.firebase),
  databaseURL: 'https://ecommerce-mongo.firebaseio.com',
});
console.log('Base de datos conectada');

const db = admin.firestore();

class ContenedorFirebase {
  constructor(nameCollection) {
    this.query = db.collection(nameCollection);
  }

  async list() {
    try {
      const arr = [];
      const querySnapshot = await this.query.get();
      querySnapshot.forEach((doc) => {
        arr.push({ id: doc.id, ...doc.data() });
      });
      console.log(arr);
      return arr;
    } catch (error) {
      console.log(error);
    }
  }

  async getById(idEl) {
    try {
      const doc = await this.query.doc(idEl).get();
      if (!doc.exists) {
        throw new Error('No existe el documento');
      } else {
        const data = doc.data();
        console.log(data);
        return { ...data, idEl };
      }
    } catch (error) {
      console.log(error);
    }
  }

  async save(obj) {
    try {
      const saved = await this.query.add(obj);
      console.log('Elemento guardado id:', saved.id);
      return { ...obj, id: saved.id };
    } catch (error) {
      console.log(error);
    }
  }

  async deleteById(idEl) {
    try {
      const deleted = await this.query.doc(idEl).delete();
      console.log('Elemento eliminado');
      return deleted;
    } catch (error) {
      console.log(error);
    }
  }

  async changeById(idEl, obj) {
    try {
      const updated = await this.query.doc(idEl).set(obj);
      console.log('Elemento actualizado');
      return updated;
    } catch (error) {
      console.log(error);
    }
  }
}

const contenedor1 = new ContenedorFirebase('carrito');

const id = await contenedor1.getById('1KZXCuOUFXrIxaQb9A1H');

// const producto1 = await contenedor1.save({
//   name: 'Mundo',
//   price: '150',
//   thumbnail:
//     'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-512.png',
//   id: 1,
//   timestamp: 1661987729563,
// });

// const producto2 = await contenedor1.save({
//   name: 'Manzana verde',
//   price: '10',
//   thumbnail:
//     'https://cdn3.iconfinder.com/data/icons/education-209/64/apple-fruit-science-school-512.png',
//   id: 3,
//   timestamp: 1661987792414,
// });

// const producto3 = await contenedor1.save({
//   name: 'Libro',
//   price: '200',
//   thumbnail:
//     'https://cdn3.iconfinder.com/data/icons/education-209/64/book-note-paper-school-512.png',
//   id: 2,
//   timestamp: 1661987763958,
// });

// const allProducts = await contenedor1.list();
export default ContenedorFirebase;
