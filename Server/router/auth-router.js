// A router instance is a complete middleware and routing system ;for this reason , it is reffered to "mini app".

const express= require("express")
const router= express.Router();
const authcontroller= require("../controllers/auth-controllers");
const signupSchema= require ("../validater/auth-validater");
const validate= require ("../middlewares/validate-midleware")


router.route("/").get(authcontroller.home);
router.route("/user").post(validate(signupSchema), authcontroller.Register);
router.route("/login").post(authcontroller.login);

module.exports= router;






