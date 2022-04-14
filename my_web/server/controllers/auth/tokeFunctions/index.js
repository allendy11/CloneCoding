const { sign, verify } = require("jsonwebtoken");
require("dotenv").config();
module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: "1m" });
  },
  generateRefreshToken: (data) => {
    return sign(data, process.env.REFRESH_SECRET, { expiresIn: "2m" });
  },
  sendAccessToken: () => {},
  sendRefreshToken: () => {},
  checkAccessToken: (req) => {
    const authorization = req.headers["authorization"];
    const token = authorization.split(" ")[1];
    return verify(token, process.env.ACCESS_SECRET);
  },
  checkRefreshToken: () => {},
};
