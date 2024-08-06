import { Router } from "express";
import { UserController } from "../controllers/usersControllers";
import { tokenValidation } from "../middleware/validationsToken";

export const usersRoutes=Router()

usersRoutes.get('/',tokenValidation,UserController.getAllUsers)
usersRoutes.get('/:id',tokenValidation,UserController.getUserById)
usersRoutes.post('/',tokenValidation,UserController.newUserRegister)
usersRoutes.put('/:id',tokenValidation,UserController.userUpdated)
usersRoutes.delete('/:id',tokenValidation, UserController.userDelete)