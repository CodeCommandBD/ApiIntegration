const passport  = require('passport');
require('dotenv').config()
const User = require('../models/user.model')

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;


const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    try {
       const user = User.findById(jwt_payload.id); 
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    } catch (error) {
        return done(error, false)
    }
    
}));