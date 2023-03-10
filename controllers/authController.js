const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { response } = require("express");

// handle errors
const handleErrors = (err) => {
  let errors = { email: "", password: "" };

  // duplicate error code
  if (err.code == 11000) {
    errors.email = "That email already exists";
    return errors;
  }

  // validation errors
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "olenabeliavskablogprojectjwtsecret", {
    expiresIn: maxAge,
  });
};

const signup_get = (req, res) => {
  res.render("signup", { title: "Sign Up" });
};

const login_get = (req, res) => {
  res.render("login", { title: "Login" });
};

const signup_post = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await User.create({ email, password });
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({user: user._id});
  } catch (err) {
    const errors = handleErrors(err);
    console.log(errors);
    res.status(400).send(errors);
  }
};

const login_post = (req, res) => {
  const { email, password } = req.body;
  res.send("new user login");
};

module.exports = {
  signup_get,
  login_get,
  signup_post,
  login_post,
};
