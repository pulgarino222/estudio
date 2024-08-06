import { Router } from "express";
import { productController } from "../controllers/productControllers";

export const productsRoutes=Router()

productsRoutes.get('/products',productController.getAllProducts)
productsRoutes.get('/products/:id',productController.getProductsById)
productsRoutes.post('/products/',productController.newProductRegister)
productsRoutes.put('/products/:id',productController.ProductUpdated)
productsRoutes.delete('/products/:id',productController.ProductDelete)