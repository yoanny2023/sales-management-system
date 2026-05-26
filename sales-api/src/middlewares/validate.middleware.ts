import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";

export function validateMiddleware(
  schema:ZodSchema,
  target: "body" | "params" | "query"
){

  return function(req:Request,res:Response,next:NextFunction){

    const result = schema.safeParse(req[target]);

    if(!result.success){
      return res.status(404).json({
        errors: result.error.issues
      });
    }

    req[target] = result.data;

    next();
  }  
}