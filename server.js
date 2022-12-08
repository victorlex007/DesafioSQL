import express from 'express'
import { routerProductos } from './routerProductos.js'

export const app = express()

app.use(express.json())

app.use("/api/productos", routerProductos)