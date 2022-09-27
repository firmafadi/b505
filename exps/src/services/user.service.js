const user = require("../models/user.model");

const getAllUser = () => {
  const allUser = user.getAll();
  console.log(allUser);
  return allUser;
};

module.exports = {
    getAllUser
  };