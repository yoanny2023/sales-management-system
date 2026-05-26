import {Prisma} from "@prisma/client";

export type CreateSaleResponse = Prisma.SaleGetPayload<{
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
}>