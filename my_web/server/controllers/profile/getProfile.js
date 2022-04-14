const { User } = require("../../models");
const { checkAccessToken } = require("../auth/tokeFunctions");

module.exports = (req, res) => {
  const userInfo = checkAccessToken(req);
  if (!userInfo) {
    res.status(404).json({ message: "accessToken is expired" });
  }
  User.findByPk(req.params.id).then((data) => {
    if (!data) {
      res.status(404).json({ message: "unvalid user" });
    }
    res.status(200).json({
      userInfo: {
        id: data.id,
        email: data.email,
        name: data.name,
      },
      message: "getProfile success",
    });
  });
};
