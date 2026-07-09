import { z } from "zod";

export const saleSchema = z.object({
  productId: z.coerce
    .number()
    .int("Please select a product")
    .positive("Please select a product"),

  quantity: z.coerce
    .number()
    .int("Quantity must be an integer")
    .min(1, "Quantity must be greater than 0"),
});

export type SaleFormData = z.infer<typeof saleSchema>;