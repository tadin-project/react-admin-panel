import { Router } from "express";
import { Login, Logout, Me } from "../controllers/Auth.js";

const router = Router();

router.get("/me", Me);
router.post("/login", Login);
router.delete("/logout", Logout);

export default router;
