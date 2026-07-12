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
}