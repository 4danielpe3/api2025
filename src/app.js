import express from 'express'
import cors from 'cors'
import fileUpload from 'express-fileupload';
//importar las rutas OJO
import clientesRoutes from './routes/clientesRoutes.js'
import productosRoutes from './routes/productosRoutes.js'
import loginRoutes from './routes/loginRoutes.js' 

const app=express();
app.use(fileUpload());
const corsOptions={
origin:'+',
methods:['GET','POST','PUT','PATCH','DELETE'],
Credentials:true
}
app.use(cors(corsOptions));
app.use(express.json());

// indicar las rutas a utilizar OJO
app.use('/api',clientesRoutes)
app.use('/api',productosRoutes)
app.use('/api',loginRoutes)
app.use('/uploads', express.static('uploads'))

app.use((req,resp,next)=>{
    resp.status(400).json({
        message: 'Endpoint not found'
    })
})

export default app;