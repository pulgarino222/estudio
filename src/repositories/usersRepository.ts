import { Tableusers } from "../models/tableUsers";
import { injectable } from 'tsyringe';



@injectable()
export class userRepository{
    async finAll(){
        return await Tableusers.findAll()
    }

    async findByEmail(email:string){
        return await Tableusers.findOne({
            where:{
                email:email
            }
        })
        
    }
    async findByEmailRol(email:string){
        const data= await Tableusers.findOne({
            where:{
                email:email
            }
        })
        return data?.rolId
        
    }


    async findById(id:number){
        try {
            const wanted= await Tableusers.findByPk(id)
            return wanted
        } catch (error:any) {
            throw new Error(error.message)
        }
        
    }
    async createdNewUser(user: Partial<Tableusers>){
        let tableCreated:any;
        try{
            tableCreated=await Tableusers.create(user)
            return tableCreated
        }catch(error:any){
            console.log('ah ocurrido un error',error)
        }
    }

     async updateUserById(userupdated:Partial<Tableusers>,id:number){
        try {
            const update= await Tableusers.update(userupdated,{
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
            await Tableusers.destroy({
                where:{
                    id:id
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

}