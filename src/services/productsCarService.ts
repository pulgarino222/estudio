import { ProductsCarsRepository } from "../repositories/productsCarsRepository";
import { inject, injectable } from "tsyringe";
import { Orders } from "../models/order";


@injectable()
export class ProductCarsService {
  // private userRepository:userRepository
  // constructor(userRepository:userRepository){
  //        this.userRepository=userRepository
  // } ///esta es la forma tradicional sin injectar dependencias en la clase
  constructor(
    @inject(ProductsCarsRepository) private ProductsCarsRepositor:ProductsCarsRepository
  ) {}
  async getAllProductCards() {
    return await this.ProductsCarsRepositor.finAll();
  }

  async findProductCarById(id: number) {
    try {
      return await this.ProductsCarsRepositor.findById(id);
    } catch (error) {
      console.log(error);
    }
  }

  async createProductCar(order: Partial<Orders>) {
    return await this.ProductsCarsRepositor.createdNewProductCars(order);
  }


  async updateProductCar(order: Partial<Orders>, id: number): Promise<Orders | null> {
    try {
      const affectedCount:any = await this.ProductsCarsRepositor.updateProductCarsById(order, id);

      if (affectedCount === 0) {
        console.log('No se encontró la orden o no se realizaron cambios.');
        return null;
      }
      // Buscar el usuario actualizado para obtener los datos actualizados
      const updatedProduct = await this.ProductsCarsRepositor.findById(id);
      if (updatedProduct) {
        console.log('Datos actualizados:', updatedProduct.get({ plain: true }));
      }
      return updatedProduct;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async deleteByIdProductCar(id:number){
    const wanted= await this.ProductsCarsRepositor.findById(id)
    if(wanted){
        await this.ProductsCarsRepositor.deleteProductsCarsById(id)
        return wanted
    }else{
        return "producto carrito no encontrado no se puede eliminar"
    }
  }


}
