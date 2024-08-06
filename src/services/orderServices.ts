import { OrderRepository } from "../repositories/orderRepository";
import { inject, injectable } from "tsyringe";
import { Orders } from "../models/order";

@injectable()
export class OrderService {
  // private userRepository:userRepository
  // constructor(userRepository:userRepository){
  //        this.userRepository=userRepository
  // } ///esta es la forma tradicional sin injectar dependencias en la clase
  constructor(
    @inject(OrderRepository) private OrderRepository: OrderRepository
  ) {}
  async getAllOrders() {
    return await this.OrderRepository.finAll();
  }

  async findOrdertById(id: number) {
    try {
      return await this.OrderRepository.findById(id);
    } catch (error) {
      console.log(error);
    }
  }

  async createOrder(order: Partial<Orders>) {
    return await this.OrderRepository.createdNewOrder(order);
  }


  async updateOrder(order: Partial<Orders>, id: number): Promise<Orders | null> {
    try {
      const affectedCount:any = await this.OrderRepository.updateOrderById(order, id);

      if (affectedCount === 0) {
        console.log('No se encontró la orden o no se realizaron cambios.');
        return null;
      }
      // Buscar el usuario actualizado para obtener los datos actualizados
      const updatedProduct = await this.OrderRepository.findById(id);
      if (updatedProduct) {
        console.log('Datos actualizados:', updatedProduct.get({ plain: true }));
      }
      return updatedProduct;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async deleteByIdService(id:number){
    const wanted= await this.OrderRepository.findById(id)
    if(wanted){
        await this.OrderRepository.deleteOrderById(id)
        return wanted
    }else{
        return "usuario no encontrado no se puede eliminar"
    }
  }


}
