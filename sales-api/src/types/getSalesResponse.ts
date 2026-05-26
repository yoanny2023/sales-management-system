import { Prisma } from "@prisma/client";

export type GetSalesResponse = Prisma.SaleGetPayload<{
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
  }
}>[];