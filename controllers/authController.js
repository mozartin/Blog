const User = require("../models/User");

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
    res.status(201).json(user);
  } catch (err) {
    const errors = handleErrors(err);
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
