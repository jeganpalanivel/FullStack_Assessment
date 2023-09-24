var userService = require("../services/userService");

exports.createuserBridal = async function (req, res, next) {
  try {

    var createuser = await userService.userCreate(req);
    return res
      .status(200)
      .json({ data: createuser, message: "User Registered successfully" });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.getUser = async function (req, res, next) {
  try {

    var createuser = await userService.userGet(req);
    return res
      .status(200)
      .json({ data: createuser });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.updateUserDetails = async function (req, res, next) {
  try {

    var createuser = await userService.userupdates(req);
    return res
      .status(200)
      .json({ data: createuser, message: "User Updated Successfully" });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.deleteUser = async function (req, res, next) {
  try {

    var createuser = await userService.userDeletes(req);
    return res
      .status(200)
      .json({ data: createuser, message: "User Deleted Successfully" });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
exports.userById = async function (req, res, next) {
  try {

    var createuser = await userService.userGetDetails(req);
    return res
      .status(200)
      .json({ data: createuser });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};



