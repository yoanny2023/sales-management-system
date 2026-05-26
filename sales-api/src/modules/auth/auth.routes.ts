import {Router} from "express";
import AuthController from "./auth.controller.js";
import { validateMiddleware } from "../../middlewares/validate.middleware.js";
import { loginSchema, registerSchema } from "../../validations/user.schema.js";

const router = Router();

router.post("/register",validateMiddleware(registerSchema,"body"),
                        AuthController.register
           );

router.post("/login",validateMiddleware(loginSchema,"body"),
                     AuthController.login
           );

export default router;