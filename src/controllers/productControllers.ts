import { container } from "tsyringe";
import { ProductService } from "../services/productsServices";
import { Request, Response } from "express";



const productServices = container.resolve(ProductService)

export class productController{

   static async getAllProducts(__:Request,res:Response){
        const Products= await productServices.getAllProducts()
        res.json(
            Products
        )
    }

    static async getProductsById(req:Request,resp:Response){
        try {
            const id:number=parseInt(req.params.id)
            const Products= await productServices.findProductById(id)
            resp.status(201).json({
                message:"user finded in your screen",
                Products
            })

        } catch (error) {
            console.log(error)
        }

    }
    
    static async newProductRegister(req:Request,res:Response){
        try{
            const userCreated= await productServices.createProduct(req.body)
        res.status(201).json({
            message:"successfully your product was created",
            userCreated});
        
        }catch(error:any){
            res.status(101).json(error)
            throw new Error(error)
        }
    }


    static async ProductUpdated(req:Request,res:Response){
        try {
            const Product=req.body
        const id:number=parseInt(req.params.id)
        const infoProduct= await productServices.updateProduct(Product,id)
        res.status(201).json({
            message:"product updated",
            Product
        })    
        } catch (error) {
          console.log(error)  
        }  
    }

    static async ProductDelete(req:Request,resp:Response){
        try {
            const id:number=parseInt(req.params.id)
            const deleted= await productServices.deleteByIdService(id)
            resp.status(201).json({
                message:'successfull',
                deleted

            })   
        } catch (error) {
            console.log(error)
        }
        
    }

        
        
    


}