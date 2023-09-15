const express = require('express')
const morgan = require('morgan');
const mainRouter = require("./routes")
const passport = require("passport");
const cors = require("cors");
const { SECRET_KEY } = process.env;
// Create a JWT strategy
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const app = express();

app.use(morgan("dev"))
app.use(express.json())

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET_KEY,
};

app.use(passport.initialize());

app.use(cors());

app.use(mainRouter)

module.exports = app;