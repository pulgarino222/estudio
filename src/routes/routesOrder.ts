import { Router } from "express";
import { OrderController } from "../controllers/ordersControllers";

export const OrderRoutes=Router()

OrderRoutes.get('/orders',OrderController.getAllOrders)
OrderRoutes.get('/orders/:id',OrderController.getOrdersById)
OrderRoutes.post('/orders/',OrderController.newOrderRegister)
OrderRoutes.put('/orders/:id',OrderController.orderUpdated)
OrderRoutes.delete('/orders/:id',OrderController.orderDelete)