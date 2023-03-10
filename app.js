const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const PORT = 4000;
const app = express();
const feedRoutes = require("./routes/feedRoutes");
const authRouter = require("./routes/authRoutes");

require("dotenv").config();

const dbURI = process.env.dbURI;

app.set("view engine", "ejs");
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

mongoose.set("strictQuery", false);

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    console.log("The database connection successfully established");
    app.listen(PORT);
  });

app.use(authRouter);
app.use(feedRoutes);
