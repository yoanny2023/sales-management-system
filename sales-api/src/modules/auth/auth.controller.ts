import {Request,Response,NextFunction} from "express";
import AuthService from "./auth.service.js";

export default class AuthController {

  static async login(req:Request, res:Response,next:NextFunction){
    const{email,password} = req.body;

    try {
      const result = await AuthService.login(email,password);

      return res.status(200).json({
        message: "Logged in successfully",
        ...result
      })
    } catch (error) {
     next(error)
    }
  }
  
  static async register(req:Request, res:Response,next:NextFunction){
    const{name,email,password} = req.body;

    try {
      const user = await AuthService.register(name,email,password);

      return res.status(201).json({
        message:"User registered successfully",
        user
      })
        
    } catch (error) {
     next(error)
    }
  }
}