import { Orders } from '../models/order';
import { injectable } from 'tsyringe';



@injectable()
export class ProductsCarsRepository{
    async finAll(){
        return await Orders.findAll()
    }



    async findById(id:number){
        try {
            const wanted= await Orders.findByPk(id)
            return wanted
        } catch (error:any) {
            throw new Error(error.message)
        }
        
    }
    async createdNewProductCars(user: Partial<Orders>){
        let tableCreated:any;
        try{
            tableCreated=await Orders.create(user)
            return tableCreated
        }catch(error:any){
            console.log('ah ocurrido un error',error)
        }
    }

     async updateProductCarsById(orderUpdated:Partial<Orders>,id:number){
        try {
            const update= await Orders.update(orderUpdated,{
                where:{
                    id:id
                }
            })
            return update
            
        } catch (error) {
            console.log(error)
        }

    }

    async deleteProductsCarsById(id:number){
        try {
            await Orders.destroy({
                where:{
                    id:id
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

}