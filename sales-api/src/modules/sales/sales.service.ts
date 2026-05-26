import { prisma } from "../../config/prisma.js";
import { AppError } from "../../errors/AppError.js";
import { CreateSaleDTO } from "../../types/createSaleDTO.js";
import { CreateSaleResponse } from "../../types/createSaleResponse.js";
import { GetSaleByIdResponse } from "../../types/getSaleByIdResponse.js";
import { GetSalesResponse } from "../../types/getSalesResponse.js";

export default class SalesService {

  static async getSales(userId:number):Promise<GetSalesResponse>{
    const sales = await prisma.sale.findMany({
      where: {userId},

      select: {
        id: true,
        total: true,
        createdAt: true,

        items: {
          select: {
            quantity: true,
            unitPrice: true,

            product: {
              select: {
                id: true,
                name: true
              }
            }
          }
        }
      },
      orderBy: {
        createdAt: "desc"
      }
    });

    return sales;
  }

  static async getSaleById(salesId:number,userId:number):Promise<GetSaleByIdResponse>{

    const sale = await prisma.sale.findFirst({
      where:{
        id: salesId,
        userId
      },

      select: {
        id: true,
        total: true,
        createdAt: true,

        items: {
          select: {
            quantity: true,
            unitPrice: true,

            product: {
              select: {
                id: true,
                name: true,
              }
            }
          }
        }
      }
    });

    if(!sale) throw new AppError("Sale not found",404);

    return sale;
  }

  static async createSale({productId,quantity,userId}:CreateSaleDTO):Promise<CreateSaleResponse>{

      const createdSale = await prisma.$transaction(async (tx) => {

      const product = await tx.product.findFirst({
        where:{id:productId,userId}
      });

      if(!product) throw new AppError("Product not found",404);

      if(quantity > product.stock) throw new AppError("Insufficient stock", 400);

      const unitPrice = product.price;
      const total = unitPrice * quantity;

      const sale = await tx.sale.create({
        data: {
          total,
          userId
        },
      });

      await tx.saleItem.create({
        data: {
          quantity,
          unitPrice,
          saleId: sale.id,
          productId: product.id
        }
      });

      await tx.product.update({
        where:{ id: product.id },

        data:{
          stock:{
            decrement: quantity
          }
        }
      });

      return sale;
    });

    const completeSale = await prisma.sale.findUnique({
        where:{
          id: createdSale.id
        },

        select:{
          id:true,
          createdAt:true,
          total:true,

          items:{
            select:{
              unitPrice:true,
              quantity:true,

            product:{
              select:{
                id:true,
                name:true,
              }
            }
          }
        }
      }
    });

      if(!completeSale) throw new AppError("Sale not found",404);

      return completeSale;
  } 
}