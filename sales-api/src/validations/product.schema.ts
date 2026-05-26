import {z} from "zod";

export const createProductSchema = z.object({
  name: z
         .string()
         .trim()
         .min(3,"Name must be at least 3 characters")
         .refine(
          (value) => isNaN(Number(value)),
          {
            message: "Name cannot contain only numbers"
          }
        ),

  price: z.coerce
         .number()
         .positive("Price must be  positive"),

  stock: z.coerce
         .number()
         .int("Stock must be integer")
         .min(0,"Stock cannot be negative")
});

export type CreateProductInput = z.infer<typeof createProductSchema>;

export const updateProductSchema = z.object({

  name: z
        .string()
        .trim()
        .min(3,"Name must be at least 3 characters")
        .optional()
        .refine(
          (value) => isNaN(Number(value)),
          {
            message: "Name cannot contain only numbers"
          }
        ),

  price: z.coerce
         .number()
         .positive("Price must be  positive")
         .optional(),

  stock: z.coerce
         .number()
         .int("Stock must be integer")
         .min(0,"Stock cannot be negative")
         .optional(),

}).refine((data) => Object.keys(data).length > 0,{
  message: "At least one field is required"
}
);

export type UpdateProductInput = z.infer<typeof updateProductSchema>;