// const userService = require("../services/user.service");
const userModel = require("../models/user.model");

// Create and Save a new Tutorial
const getAllUser = async (req, res) => {
    // // res.send("all");
    // const allUser = userService.getAllUser();
    // console.log("ussser:"+allUser);
    // // res.send({ status: "OK", data: allUser });
    try {
        const product = await userModel.findAll();
        res.send(product);
    } catch (err) {
        console.log(err);
    }
    
};

module.exports = {
    getAllUser
};