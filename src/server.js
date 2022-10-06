import express from 'express';
const { Router } = express;

import {
  productosDao as productosApi,
  carritosDao as carritosApi,
} from './daos/index.js';

//------------------------------------------------------------------------
// instancio servidor

const app = express();

//--------------------------------------------
// permisos de administrador

const esAdmin = true;

function crearErrorNoEsAdmin(ruta, metodo) {
  const error = {
    error: -1,
  };
  if (ruta && metodo) {
    error.descripcion = `ruta '${ruta}' metodo '${metodo}' no autorizado`;
  } else {
    error.descripcion = 'no autorizado';
  }
  return error;
}

function soloAdmins(req, res, next) {
  if (!esAdmin) {
    res.json(crearErrorNoEsAdmin());
  } else {
    next();
  }
}

//--------------------------------------------
// configuro router de productos

const productosRouter = new Router();

productosRouter.get('/', async (req, res) => {
  res.json(await productosApi.list());
});
productosRouter.get('/:id', async (req, res) => {
  console.log(req.params.id);
  res.json(await productosApi.getById(req.params.id));
});
productosRouter.post('/', soloAdmins, async (req, res) => {
  res.json(await productosApi.save(req.body));
});
productosRouter.put('/:id', soloAdmins, async (req, res) => {
  res.json(await productosApi.changeById(req.params.id, req.body));
});
productosRouter.delete('/:id', soloAdmins, async (req, res) => {
  res.json(await productosApi.deleteById(req.params.id));
});
//--------------------------------------------
// configuro router de carritos

const carritosRouter = new Router();

carritosRouter.get('/', async (req, res) => {
  res.json(await carritosApi.list());
});

carritosRouter.post('/', async (req, res) => {
  console.log('prueba', req.body);
  res.json(await carritosApi.save(req.body));
});
carritosRouter.delete('/:id', async (req, res) => {
  res.json(await carritosApi.deleteById(req.params.id));
});

//--------------------------------------------------
// router de productos en carrito

carritosRouter.get('/:id/productos', async (req, res) => {
  res.json(await carritosApi.getById(req.params.id));
});

carritosRouter.post('/:id/productos', async (req, res) => {
  const id = Number(req.params.id);

  res.send(await carritosDao.getById(id));
});

carritosRouter.delete('/:id/productos/:idProd', async (req, res) => {
  console.log('DELETE request recibido');
  const idCarrito = Number(req.params.id);
  const idCarritoProd = Number(req.params.id_prod);

  const carrito = await carritosDao.getById(idCarrito);

  const index = carrito.productos.findIndex((prod) => prod.id == idCarritoProd);

  if (index !== -1) {
    carrito.productos.splice(index, 1);
    await carritosDao.changeById(idCarrito, carrito);
  }

  res.status(200).json({
    result: 'Producto borrado del carrito',
    id: req.params.id,
    ListadoProductosNuevo: carrito,
  });
});

//----------------------------------------
// configuro el servidorr
// servidor
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api/productos', productosRouter);
app.use('/api/carritos', carritosRouter);

export default app;
