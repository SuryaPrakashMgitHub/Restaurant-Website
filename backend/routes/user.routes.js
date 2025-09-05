import express from "express";
import {
  checkAuth,
  loginUser,
  logout,
  registerUser,
} from "../controller/user.controller.js";
import { authUser } from "../middlewares/authUser.js";

console.log("👉 checkAuth:", checkAuth);
console.log("👉 authUser:", authUser);

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/is-auth", authUser, checkAuth);
router.get("/logout", authUser, logout);

export default router;
