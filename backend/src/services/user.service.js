const User = require("../models/user.model");

const getAllUsers = async () => {
  return await User.find({});
};

const getUserById = async (id) => {
  return await User.findById(id);
};

const getUserByEmail = async (email) => {
  return await User.findOne({ email });
};

const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

const changeUser = async (id, body) => {
  return await User.findByIdAndUpdate(id, body, { new: true });
};

const addUser = async (body) => {
  return await User.create(body);
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  getUserByEmail,
  deleteUser,
  changeUser,
  addUser,
};
