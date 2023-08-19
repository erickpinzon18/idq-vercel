import { Router } from "express";
import { login } from "../controllers/users.js";

export const router = Router();

router.post("/login", login);