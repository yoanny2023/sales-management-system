import { Router } from "express";
import DashboardController from "./dashboard.controller.js";

const router = Router();

router.get("/stats",DashboardController.getDashboardStats);

router.get("/top-products",DashboardController.getTopProducts);

export default router;