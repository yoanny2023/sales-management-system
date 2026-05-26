import { NextFunction, Request, Response } from "express";
import { AuthRequest } from "../../middlewares/auth.middleware.js";
import SalesService from "./sales.service.js";

export default class SalesController {

  static async getSales(req:AuthRequest,res:Response,next:NextFunction){
    const userId = req.user!.id;

    try {
     const sales = await SalesService.getSales(userId);

     return res.status(200).json({
      message:"Sales fetched successfully",
      sales
     });
    } catch (error) {
      next(error)
    }
  }

  static async getSaleById(req:AuthRequest,res:Response,next:NextFunction){
    const userId = req.user!.id;
    const id = req.params.id as string
    const salesId = +id;

    try {
      const sale = await SalesService.getSaleById(salesId,userId);

      return res.status(200).json({
        message: "Sale was found successfully",
        sale
      })
      
    } catch (error) {
      next(error)
    }
 }

  static async createSale(req:AuthRequest,res:Response,next:NextFunction){

    const userId = req.user!.id;
    const{productId,quantity} = req.body;

    const newSale = {
      productId,
      quantity,
      userId
    }

    try {
      const sale = await SalesService.createSale(newSale);
      return res.status(201).json({
        message: "Sale created successfully",
        sale
      })
    } catch (error) {
      next(error)
    }
  }
}