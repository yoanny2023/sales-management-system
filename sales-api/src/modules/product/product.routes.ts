import {Router} from "express";
import ProductController from "./product.controller.js";
import { validateMiddleware } from "../../middlewares/validate.middleware.js";
import { createProductSchema, updateProductSchema } from "../../validations/product.schema.js";
import { idParamSchema } from "../../validations/idParam.schema.js";

const router = Router();

router.get("/:id",validateMiddleware(idParamSchema,"params"),
                  ProductController.getProductById
          );

router.get("/",ProductController.getProducts);

router.post("/",validateMiddleware(createProductSchema,"body"),
                ProductController.create
          );

router.patch("/:id",validateMiddleware(idParamSchema,"params"),
                    validateMiddleware(updateProductSchema,"body"),
                    ProductController.update
            );

router.delete("/:id",validateMiddleware(idParamSchema,"params"),
                     ProductController.delete
             );

export default router;