const { User } = require("../../models");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("./tokeFunctions");
module.exports = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
      password: req.body.password,
    },
  }).then((data) => {
    if (!data) {
      res.status(404).json({
        message: "User Not found",
      });
    }
    const access_token = generateAccessToken({
      name: data.name,
      email: data.email,
    });
    const refresh_token = generateRefreshToken({
      name: data.name,
      email: data.email,
    });

    res.cookie("refresh_token", refresh_token);
    res.status(200).json({
      accessToken: access_token,
      userInfo: { id: data.id },
      message: "login success",
    });
  });
};
