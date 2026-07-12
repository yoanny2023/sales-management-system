import { Router } from "express";
import DashboardController from "./dashboard.controller.js";

const router = Router();

router.get("/stats",DashboardController.getDashboardStats);

export default router;