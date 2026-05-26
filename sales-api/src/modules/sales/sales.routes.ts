import {Router} from "express"
import SalesController from "./sales.controller.js";
import { validateMiddleware } from "../../middlewares/validate.middleware.js";
import { createSaleSchema } from "../../validations/sale.schema.js";
import { idParamSchema } from "../../validations/idParam.schema.js";

const router = Router();

router.get("/",SalesController.getSales);

router.get("/:id",validateMiddleware(idParamSchema,"params"),
               SalesController.getSaleById
          )

router.post("/",validateMiddleware(createSaleSchema,"body"),
              SalesController.createSale
           );

export default router;