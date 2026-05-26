import { User } from "@prisma/client";
import { prisma } from "../../config/prisma.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import { AppError } from "../../errors/AppError.js";

type SafeUser = Omit<User ,"password">

type LoginResponse = {
  user: SafeUser;
  token: string;
};

export default class AuthService {

  static async login(email:string,password:string):Promise<LoginResponse>{

    const mySecret = process.env.JWT_SECRET

    if (!mySecret) throw new AppError("JWT_SECRET not defined",500);
  
    const user = await prisma.user.findUnique({
      where: {email}
    });
    
    if(!user) throw new AppError("Invalid email or password",401);

    const isValid = await bcrypt.compare(password,user.password);

    if(!isValid) throw new AppError("Invalid email or password",401);

    const token = jwt.sign(
      {sub: user.id, email: user.email},
       mySecret,
      {expiresIn:"7d"}
    );

    const{password:_,...safeUser} = user;

    return {
      token,
      user: safeUser
    };
  }

  static async register(name:string, email:string, password:string): Promise<SafeUser>{
      
    const userExists = await prisma.user.findUnique({
      where : {email}
    });

    if(userExists)  throw new AppError("User already exists",409);

    const hashedPassword = await bcrypt.hash(password,10)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password : hashedPassword
      },
      select: {id:true, name:true, email:true}
    });

    return user;
  }
}