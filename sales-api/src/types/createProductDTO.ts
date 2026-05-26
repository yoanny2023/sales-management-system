import { CreateProductInput } from "../validations/product.schema.js"

export type CreateProductDTO = CreateProductInput & {
  userId: number
}