import { NextFunction, Request, Response } from "express";
import DashboardService from "./dashboard.service.js";

export default class DashboardController {
  static async getDashboardStats(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const stats = await DashboardService.getDashboardStats();

      res.status(200).json({
        message: "Dashboard statistics fetched successfully",
        stats,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getTopProducts(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
    try {
      const topProducts = await DashboardService.getTopProducts();
      res.status(200).json({
        message: "Top products fetched successfully",
        topProducts,
      });
    } catch (error) {
      next(error);
    }
  }
}