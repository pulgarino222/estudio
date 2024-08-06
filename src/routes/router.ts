import { Router } from "express";
import { usersRoutes } from "./routesUsers";
import { productsRoutes } from "./routesProduct";
import { OrderRoutes } from "./routesOrder";


export const routes=Router()


routes.use('/register',usersRoutes)
routes.use('/login',productsRoutes)
routes.use('/login',OrderRoutes)
