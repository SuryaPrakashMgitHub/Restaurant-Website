import express from "express";
import {
  checkAuth,
  loginUser,
  logout,
  registerUser,
} from "../controller/user.controller.js";
import authUser from "../middlewares/authUser.js";

<<<<<<< HEAD
console.log("👉 checkAuth:", checkAuth);
console.log("👉 authUser:", authUser);

=======
>>>>>>> 6768480 (Fixed bug in login page)
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/is-auth", authUser, checkAuth);
router.get("/logout", authUser, logout);

export default router;
