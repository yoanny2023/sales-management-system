import { Request,Response,NextFunction} from "express";
import ProductService from "./product.service.js";
import { AuthRequest } from "../../middlewares/auth.middleware.js";

export default class ProductController {

  static async getProductById(req:AuthRequest,res: Response,next:NextFunction){

    const userId = req.user!.id;
    const id = req.params?.id;
    const productId = +(id as string);
     
    try {
      const product = await ProductService.getProductById(productId,userId);

      return res.status(200).json({
        message:"Product was found",
        product
      });

    } catch (error) {
     next(error)
    }
  }

  static async getProducts(req:AuthRequest,res: Response,next:NextFunction){
     const userId = req.user!.id;
    try {
      const products = await ProductService.getProducts(userId);

      return res.status(200).json({
        message: "Products fetched successfully",
        products
      });

    } catch (error) {
     next(error)
    }
  }

  static async create(req:AuthRequest,res:Response,next:NextFunction){
   
    const{name,price,stock} = req.body;   
    const userId = req.user!.id;

    try {
      const newProduct = {
      name,
      price,
      stock,
      userId
    }

    const product = await ProductService.create(newProduct);

    return res.status(201).json({
      message: "Product created successfully",
      product
    })
    } catch (error) {
     next(error)
    }
  }

  static async update(req:AuthRequest,res:Response,next:NextFunction){

    const id = req.params.id as string;
    const userId = req.user!.id;

    const productId = +(id)
        
    const updateData = req.body; 

    try {

    const product = await ProductService.updateProductById(productId,updateData,userId);

    return res.status(200).json({
      message: "Product updated successfully",
      product
    })
    } catch (error) {
     next(error)
    }
  }

  static async delete(req:AuthRequest,res:Response,next:NextFunction){

    const userId = req.user!.id;
    const id = req.params.id as string;

    const productId = parseInt(id);
  
    try {
      const deletedProduct = await ProductService.deleteById(productId,userId);
      return res.status(200).json({
        message: "Product deleted successfully",
        deletedProduct
      })
    } catch (error) {
     next(error)
    }
  }
}