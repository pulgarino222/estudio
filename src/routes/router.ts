import { Router } from "express";
import { usersRoutes } from "./routesUsers";
import { productsRoutes } from "./routesProduct";
import { OrderRoutes } from "./routesOrder";
import { login } from "./routesLogin";
import { ProductCarRoutes } from "./productcar";



export const routes=Router()


routes.use('/login/users',usersRoutes)
routes.use('/login',productsRoutes)
routes.use('/login',OrderRoutes)
routes.use('/',ProductCarRoutes)
routes.use('/login',login)
