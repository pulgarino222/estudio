import { container } from "tsyringe";
import { ProductCarsService } from "../services/productsCarService";
import { Request, Response } from "express";



const productServicescar = container.resolve(ProductCarsService)

export class productCarController{

   static async getAllProductCar(__:Request,res:Response){
        const Products= await productServicescar.getAllProductCards()
        res.json(
            Products
        )
    }

    static async getProductCarById(req:Request,resp:Response){
        try {
            const id:number=parseInt(req.params.id)
            const Products= await productServicescar.findProductCarById(id)
            resp.status(201).json({
                message:"user finded in your screen",
                Products
            })

        } catch (error) {
            console.log(error)
        }

    }
    
    static async newProductCarRegister(req:Request,res:Response){
        try{
            const userCreated= await productServicescar.createProductCar(req.body)
        res.status(201).json({
            message:"successfully your product was created",
            userCreated});
        
        }catch(error:any){
            res.status(101).json(error)
            throw new Error(error)
        }
    }


    static async ProductCarUpdated(req:Request,res:Response){
        try {
            const ProductCar=req.body
        const id:number=parseInt(req.params.id)
        const infoProductCar= await productServicescar.updateProductCar(ProductCar,id)
        res.status(201).json({
            message:"product updated",
            infoProductCar
        })    
        } catch (error) {
          console.log(error)  
        }  
    }

    static async ProductCarDelete(req:Request,resp:Response){
        try {
            const id:number=parseInt(req.params.id)
            const deleted= await productServicescar.deleteByIdProductCar(id)
            resp.status(201).json({
                message:'successfull',
                deleted

            })   
        } catch (error) {
            console.log(error)
        }
        
    }

        
        
    


}