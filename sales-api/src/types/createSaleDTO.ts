import { CreateSaleInput } from "../validations/sale.schema.js"

export type CreateSaleDTO = CreateSaleInput & {
 userId: number
}