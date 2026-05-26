import {z} from "zod";

export const idParamSchema = z.object({
  id: z.coerce
    .number({
      message: "Id must be a number"
    })
    .int("Id must be an integer")
    .positive("Id must be positive")
});