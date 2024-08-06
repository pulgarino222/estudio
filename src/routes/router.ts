import { Router } from "express";
import { usersRoutes } from "./routesUsers";


export const routes=Router()


routes.use('/register',usersRoutes)
