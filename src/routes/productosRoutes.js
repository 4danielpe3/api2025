import { Router } from "express";
/* import upload from '../middlewares/upload.js' */
import { verificarToken } from "../middlewares/verificarToken.js";
import {getProductos, getProductosxId, postProductos, putProductosxId, deleteProducto} from '../controladores/productosCtrl.js'
const router=Router();

router.get('/productos',verificarToken,getProductos)
router.get('/productos/:id',verificarToken,getProductosxId)
router.post('/productos',verificarToken,postProductos)
router.put('/productos/:id',verificarToken,putProductosxId)
router.delete('/productos/:id',verificarToken,deleteProducto)
export default router


