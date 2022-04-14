const { checkAccessToken } = require("./tokeFunctions");

module.exports = (req, res) => {
  const authorization = checkAccessToken(req);
  if (!authorization) {
    res.status(404).json({ message: "not authorized" });
  }
  return {
    id: authorization.id,
    email: authorization.email,
    name: authorization.name,
  };
};
