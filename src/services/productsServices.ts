import { ProductRepository } from "../repositories/productsRepository";
import { inject, injectable } from "tsyringe";
import { TableProducts } from "../models/tableProduct";

@injectable()
export class ProductService {
  // private userRepository:userRepository
  // constructor(userRepository:userRepository){
  //        this.userRepository=userRepository
  // } ///esta es la forma tradicional sin injectar dependencias en la clase
  constructor(
    @inject(ProductRepository) private productRepository: ProductRepository
  ) {}
  async getAllProducts() {
    return await this.productRepository.finAll();
  }

  async findProductById(id: number) {
    try {
      return await this.productRepository.findById(id);
    } catch (error) {
      console.log(error);
    }
  }

  async createProduct(product: Partial<TableProducts>) {
    return await this.productRepository.createdNewProduct(product);
  }


  async updateProduct(user: Partial<TableProducts>, id: number): Promise<TableProducts | null> {
    try {
      const affectedCount:any = await this.productRepository.updateProductById(user, id);

      if (affectedCount === 0) {
        console.log('No se encontró el usuario o no se realizaron cambios.');
        return null;
      }
      // Buscar el usuario actualizado para obtener los datos actualizados
      const updatedProduct = await this.productRepository.findById(id);
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
    const wanted= await this.findProductById(id)
    if(wanted){
        await this.productRepository.deleteUserById(id)
        return wanted
    }else{
        return "usuario no encontrado no se puede eliminar"
    }
  }


}
