import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generatToken from "../utils/genToken.js";
import dotenv from "dotenv";
dotenv.config();

// @desc    get all users
// route GET  http://localhost:5000/api/users
// public
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});
// @desc   Auth user/set token
// route POST  http://localhost:5000/api/users/login
// public
const authUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    generatToken(res, user._id);
    res.status(201).json(user);
  } else {
    res.status(401);
    throw new Error("Invaild email or password");
  }
});

// @desc   register a new user
// route POST  http://localhost:5000/api/users/register/user
// public
const regiterUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (name != "" && email != "" && password != "") {
    const userExist = await User.findOne({ email });
    if (userExist) {
      res.status(401);
      throw new Error("User alrady exist");
    }

    const newUser = {
      name: name,
      email: email,
      password: password,
    };
    const user = await User.create(newUser);

    if (user) {
      generatToken(res, user._id);
      res.status(201).json(user);
    } else {
      res.status(400);
      throw new Error("user not registerd");
    }
  } else {
    res.status(400);
    throw new Error("Fill all filds");
  }
});

// @desc    logout user
// route POST  http://localhost:5000/api/users/logoutuser
// public
const logutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "user  loged out " });
});

// @desc     get user  profile
// route GET  http://localhost:5000/api/users/profile
// private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  };
  res.status(200).json(user);
});

// @desc     update user  profile
// route PUT  http://localhost:5000/api/users/updateuser
// private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }
    const updateduser = await user.save();

    res.status(200).json({
      _id: updateduser._id,
      name: updateduser.name,
      email: updateduser.email,
    });
  } else {
    res.status(404).json({ message: "  user   profile not found " });
  }
});

// @desc     delete user  profile
// route DELETE  http://localhost:5000/api/users/deleteuser
// private
const deleteUserProfile = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const deleteuser = await User.findByIdAndDelete(id);
  res.status(200).json(deleteuser);
});

// @desc     delete all user  profile
// route DELETE  http://localhost:5000/api/users/deleteuser/all
// private
const deleteAllUserProfile = asyncHandler(async (req, res) => {
  const deleted = await User.deleteMany();
  res.status(200).json(deleted);
});

export {
  getUsers,
  authUser,
  regiterUser,
  getUserProfile,
  updateUserProfile,
  logutUser,
  deleteUserProfile,
  deleteAllUserProfile,
};
