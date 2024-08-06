import { Router } from "express";
import { productCarController } from "../controllers/productCarController";

export const ProductCarRoutes=Router()

ProductCarRoutes.get('/buys',productCarController.getAllProductCar)
ProductCarRoutes.get('/buys/:id',productCarController.getProductCarById)
ProductCarRoutes.post('/buys/',productCarController.newProductCarRegister)
ProductCarRoutes.put('/buys/:id',productCarController.ProductCarUpdated)
ProductCarRoutes.delete('/buys/:id',productCarController.ProductCarDelete)