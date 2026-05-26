import {z} from "zod"

export const createSaleSchema = z.object({
    productId: z.coerce
              .number({
                message:"Product id must be a number"
              })
              .int("Id must be an integer")
              .positive("Id must be positive"),

    quantity: z.coerce
              .number({
                message:"Quantity must be a number"
              })
              .int("quantity must be an integer")
              .positive("quantity must be positive"),
  }
)

export type CreateSaleInput =  z.infer< typeof createSaleSchema>