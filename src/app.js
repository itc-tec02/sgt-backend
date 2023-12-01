const express = require('express')
const morgan = require('morgan');
const mainRouter = require("./routes")
const passport = require("passport");
const cors = require("cors");
const { SECRET_KEY } = process.env;

const app = express();

app.use(morgan("dev"))
app.use(express.json())

app.use(cors());

app.use(mainRouter)

module.exports = app;