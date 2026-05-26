import{Request,Response,NextFunction} from "express";
import jwt from "jsonwebtoken"

export type AuthRequest = Request & {
 user?: {
  id: number,
  email: string
}
}

export function authMiddleware(req:AuthRequest,res:Response,next:NextFunction){

  const mySecret = process.env.JWT_SECRET;

  if(!mySecret){
    console.log("Critical Error: JWT_SECRET is not defined in .env file")
    return res.status(500).json({message:"Internal server configuration error"})
  }

  const authHeader = req.headers.authorization;

  const token = authHeader && authHeader.split(" ")[1];

  if(!token){
    return res.status(401).json({
        message:"Token not provided"
      });
  }

  try {
    const payload = jwt.verify(token,mySecret) as jwt.JwtPayload;

    const sub = payload.sub;
    const email = payload.email as string
    
    req.user = {
      id: Number(sub),
      email
    }

    next(); 
    
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token"
    })
  }
}