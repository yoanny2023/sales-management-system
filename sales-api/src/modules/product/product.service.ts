import {Product} from "@prisma/client";
import { prisma } from "../../config/prisma.js";
import { CreateProductDTO } from "../../types/createProductDTO.js";
import { UpdateProductDTO } from "../../types/updateProductDTO.js";
import { AppError } from "../../errors/AppError.js";

export default class ProductService {

  static async getProductById(productId:number,userId:number):Promise<Product>{

    const product = await prisma.product.findFirst({
      where:{
        id:productId,
        userId
      }
    });

    if(!product) throw new AppError("Product not found",404);

    return product;
  }

  static async getProducts(userId:number):Promise<Product[]>{
    
    const products = await prisma.product.findMany({
      where:{userId}
    });

    return products;
  }

  static async create({name,price,stock,userId}:CreateProductDTO):Promise<Product>{
    
    const productExists  = await prisma.product.findFirst({
      where:{name,userId}
    });

    if(productExists) throw new AppError("Product already exists",409);

    const product = await prisma.product.create({
      data:{
        name,  
        price,
        stock,
        userId
      }
    });

    return product;
  }

  static async updateProductById(
   productId: number,
   data: UpdateProductDTO,
   userId: number
  ):Promise<Product>{

    const product = await prisma.product.findFirst({
      where:{
        id:productId,
        userId
      }
    });

    if(!product) throw new AppError("Product not found",404);

    const cleanData = Object.fromEntries(
      Object.entries(data).filter(
        ([_, value]) => value !== undefined
      )
    );

    const updatedProduct = await prisma.product.update({
      data: cleanData,
      where:{id:productId}
    });

    return updatedProduct;
  }

 static async deleteById(productId:number,userId:number):Promise<Product>{
    const product = await prisma.product.findFirst({
      where:{
        id:productId,
        userId
      }
    });

    if(!product) throw new AppError("Product not found",404);
   
    const deletedProduct = await prisma.product.delete({
      where:{id:productId}
    });

    return deletedProduct;

  }
}