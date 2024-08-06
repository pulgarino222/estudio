import express, { Router } from 'express'
import env from 'dotenv'
import sequelize from "./config/db";
import {routes} from './routes/router'
import errorHandler from './middleware/errorHandler';
import corsConfig from './middleware/cors';

const server = express()
server.use(express.json())
env.config()
// server.use(corsConfig)
server.use('/',routes)
server.use(errorHandler)

const PORT = process.env.PORT || 3001


const startserver = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()//sincroniza la base de datos con los modelos si ya exite la tabla no la crea si no existe la crea//esta opcion me sirve por si necesito volver a sincronizar los modelos { alter: true }
        console.log("Database connected!")
        server.listen(PORT, () => {
            console.log(`server executted in http://localhost:${PORT}`)
        })
    } catch (error: any) {
        console.log(`somethings wrong from index.ts`, error)
    }

}

startserver()