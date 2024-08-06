import { Router } from "express";
import { productController } from "../controllers/productControllers";
import { tokenValidation } from "../middleware/validationsToken";

export const productsRoutes=Router()

productsRoutes.get('/products',tokenValidation,productController.getAllProducts)
productsRoutes.get('/products/:id',tokenValidation,productController.getProductsById)
productsRoutes.post('/products/',tokenValidation,productController.newProductRegister)
productsRoutes.put('/products/:id',tokenValidation,productController.ProductUpdated)
productsRoutes.delete('/products/:id',tokenValidation,productController.ProductDelete)