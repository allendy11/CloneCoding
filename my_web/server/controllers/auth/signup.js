const { User } = require("../../models");

module.exports = (req, res) => {
  try {
    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((data) => {
      if (data) {
        res.status(401).json({ message: "email conflict" });
      }
      User.create({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
      }).then(() => {
        res.status(201).json({ message: "signup success" });
      });
    });
  } catch (err) {
    res.json({ err });
  }
};
