require('dotenv').config();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const bcrypt = require('bcrypt');
const User = require('../models/user');

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
// eslint-disable-next-line consistent-return
}, async (username, password, done) => {
    try {
        const userDocument = await User.findOne({ username }).exec();
        const passwordsMatch = await bcrypt.compare(password, userDocument.passwordHash);
        if (passwordsMatch) {
            return done(null, userDocument);
        }
        return done('Incorrect Username or Password');
    } catch (error) {
        done('Login failed. Please try again');
    }
}));

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('access_token');
opts.secretOrKey = process.env.SECRET;
passport.use(new JwtStrategy(opts, ((jwtPayload, done) => {
    User.findOne({ id: jwtPayload.sub }, (err, user) => {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        }
        return done(null, false);
    });
    return done(null, jwtPayload);
})));
