const express = require("express");
const router = express.Router();
const {
  signin,
  signup,
  signout,
  getProfile,
  postProfile,
} = require("../controllers");
/* GET users listing. */
router.post("/signin", signin);
router.post("/signout", signout);
router.post("/signup", signup);
router.get("/:id", getProfile);
// router.post("/:id", postProfile);
module.exports = router;
