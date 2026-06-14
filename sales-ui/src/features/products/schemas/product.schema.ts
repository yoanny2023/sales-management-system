import { z } from "zod";

export const productSchema = z.object({
    name: z
      .string()
      .trim()
      .min(3,"At least 3 characters")
      .refine(
          (value) => isNaN(Number(value)),
          {
            message: "Name cannot contain only numbers"
          }
        ),

    price: z.coerce
      .number()
      .min(1,"Price must be greater than 0"),

    stock: z.coerce
      .number()
      .int("Stock must be integer")
      .min(0,"Stock cannot be negative"),
  });

export type ProductFormData = z.infer<typeof productSchema>;