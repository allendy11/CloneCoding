const { checkAccessToken } = require("./tokeFunctions");
module.exports = (req, res) => {
  try {
    checkAccessToken(req);
    res.clearCookie("refresh_token");
    res.status(200).json({ message: "logout success" });
  } catch (err) {
    res.json({ err: err });
  }
};
