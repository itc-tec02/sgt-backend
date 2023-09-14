const express = require('express')
const morgan = require('morgan');
const mainRouter = require("./routes")
const passport = require("passport");
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

passport.use( new JwtStrategy(jwtOptions, async (payload, done) => {
    try {
        // Verify the JWT token
        console.log("pase por aqui coño !");
        const decodedPayload = jwt.verify(payload, SECRET_KEY);

        // Now, you can access the decoded payload, which typically contains user information.
        // For example, if the payload contains a user ID:
        const userId = decodedPayload.userId;

        // Here, you can fetch the user from your database based on the user ID.
        // Replace this with your actual database query logic.
        const user = await User.findById(userId);

        if (user) {
            // If the user is found, pass it to done as the second argument.
            done(null, user);
        } else {
            // If the user is not found, pass false as the second argument.
            done(null, false);
        }
    } catch (error) {
        // If there's an error during JWT verification, pass it to done.
        done(error, false);
    }
}));

app.use(mainRouter)

module.exports = app;