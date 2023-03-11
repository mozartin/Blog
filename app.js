const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const feedRoutes = require("./routes/feedRoutes");
const authRouter = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const dbURI = process.env.dbURI;
const PORT = 4000;
const app = express();

// view engine
app.set("view engine", "ejs");

// middleware
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

mongoose.set("strictQuery", false);

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    console.log("The database connection successfully established");
    app.listen(PORT);
  });

  
app.use(authRouter);
app.use(feedRoutes);
