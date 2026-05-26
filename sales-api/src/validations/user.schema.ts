import {z} from "zod";

export const loginSchema = z.object({
  email: z.string().trim().toLowerCase().email("Invalid email format"),
  password: z.string().trim().toLowerCase().min(6,"password must have at least 6 characters")
});

export const registerSchema = z.object({
  name: z.string().trim().toLowerCase()
         .min(3,"At least 3 characters")
         .refine((value) => isNaN(Number(value)),
            {
              message: "Name cannot contain only numbers"
            }
          ),
  email: z.string().trim().toLowerCase().email("Invalid email format"),
  password: z.string().trim().toLowerCase().min(6,"password must be at least 6 characters")
})