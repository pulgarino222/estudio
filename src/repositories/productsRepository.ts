import { TableProducts } from '../models/tableProduct';
import { injectable } from 'tsyringe';



@injectable()
export class ProductRepository{
    async finAll(){
        return await TableProducts.findAll()
    }



    async findById(id:number){
        try {
            const wanted= await TableProducts.findByPk(id)
            return wanted
        } catch (error:any) {
            throw new Error(error.message)
        }
        
    }
    async createdNewUser(user: Partial<TableProducts>){
        let tableCreated:any;
        try{
            tableCreated=await TableProducts.create(user)
            return tableCreated
        }catch(error:any){
            console.log('ah ocurrido un error',error)
        }
    }

     async updateUserById(productupdated:Partial<TableProducts>,id:number){
        try {
            const update= await TableProducts.update(productupdated,{
                where:{
                    id:id
                }
            })
            return update
            
        } catch (error) {
            console.log(error)
        }

    }

    async deleteUserById(id:number){
        try {
            await TableProducts.destroy({
                where:{
                    id:id
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

}