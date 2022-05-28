const UserModel = require("../models/User");

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email: email });
    res.send(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const user = new UserModel({ email, name, password, role });
    const doc = await user.save();
    res.send({ email: doc.email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.send({ users });
  } catch (error) {
    if (error.message) {
      res.status(400).json({ error: error.message });
    }
    res.status(400).json({ error: "error" });
  }
};

module.exports = {
  signIn,
  createUser,
  getAllUsers,
};
