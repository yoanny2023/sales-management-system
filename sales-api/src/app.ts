import express from "express"
import {configDotenv} from "dotenv"
import cors from "cors"
import AuthRoutes from "./modules/auth/auth.routes.js";
import { authMiddleware} from "./middlewares/auth.middleware.js";
import ProductRouter from "./modules/product/product.routes.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import SalesRoutes from "./modules/sales/sales.routes.js";

configDotenv();

export const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/auth",AuthRoutes);
app.use("/products",authMiddleware,ProductRouter);
app.use("/sales",authMiddleware,SalesRoutes);

app.use(errorMiddleware)