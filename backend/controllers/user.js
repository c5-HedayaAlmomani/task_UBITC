const userSchema = require("../database/models/userSchema");
const createUser = (req, res) => {
  const { fistName, lastName, email, password } = req.body;

  const newUser = new userSchema({
    fistName,
    lastName,
    email,
    password,
  });

  newUser
    .save()
    .then((result) => {
      res.json({
        succes: true,
        message: "Successfully registered",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

const updateUser = (req, res) => {
  const id = req.token.id;
  const { fistName, lastName, email, password ,img} = req.body;
  userSchema
    .findOneAndUpdate(
      { userId: id },
      {
        fistName,
        lastName,
        email,
        password,
        img
      }
    )
    .then((result) => {
      res.status(202).json({
        success: true,
        message: `user updated`,
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

module.exports = { createUser, updateUser };
