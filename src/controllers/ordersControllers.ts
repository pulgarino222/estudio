import { container } from "tsyringe";
import { OrderService } from "../services/orderServices";
import { Request, Response } from "express";


const orderServices = container.resolve(OrderService)

export class OrderController{

   static async getAllOrders(__:Request,res:Response){
        const Products= await orderServices.getAllOrders()
        res.json(
            Products
        )
    }

    static async getOrdersById(req:Request,resp:Response){
        try {
            const id:number=parseInt(req.params.id)
            const orders= await orderServices.findOrdertById(id)
            resp.status(201).json({
                message:"user finded in your screen",
                orders
            })

        } catch (error) {
            console.log(error)
        }

    }
    
    static async newOrderRegister(req:Request,res:Response){
        try{
            const orderCreated= await orderServices.createOrder(req.body)
        res.status(201).json({
            message:"successfully your product was created",
            orderCreated});
        
        }catch(error:any){
            res.status(101).json(error)
            throw new Error(error)
        }
    }


    static async orderUpdated(req:Request,res:Response){
        try {
            const order=req.body
        const id:number=parseInt(req.params.id)
        const infoProduct= await orderServices.updateOrder(order,id)
        res.status(201).json({
            message:"product updated",
            order
        })    
        } catch (error) {
          console.log(error)  
        }  
    }

    static async orderDelete(req:Request,resp:Response){
        try {
            const id:number=parseInt(req.params.id)
            const deleted= await orderServices.deleteByIdService(id)
            resp.status(201).json({
                message:'successfull',
                deleted

            })   
        } catch (error) {
            console.log(error)
        }
        
    }
}