import { Router } from "express";
import { verificarToken } from "../middlewares/verificarToken.js";
//importar las funciones
import {/* prueba, */ getClientes, getClientesxId, postClientes, putClientesxId, deleteCliente} from '../controladores/clientesCtrl.js'
const router=Router();
//armar las rutas
/* router.get('/clientes',prueba) */
router.get('/clientes',verificarToken,getClientes)
router.get('/clientes/:id',verificarToken,getClientesxId)
router.post('/clientes',verificarToken,postClientes)
router.put('/clientes/:id',verificarToken,putClientesxId)
router.delete('/clientes/:id',verificarToken,deleteCliente)
export default router