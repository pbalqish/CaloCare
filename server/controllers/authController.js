const { User, Profile } = require("../models/index");
const { compare } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const { OAuth2Client } = require("google-auth-library");

class Controller {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw { name: "Invalid Login" };
      }

      const user = await User.findOne({ where: { email } });
      if (!user) {
        throw { name: "Error Login" };
      }

      const isValidPassword = compare(password, user.password);
      if (!isValidPassword) {
        throw { name: "Error Login" };
      }

      const payload = {
        id: user.id,
        email: user.email,
      };

      const access_token = signToken(payload);

      res.status(200).json({ access_token });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async register(req, res, next) {
    try {
      const { fullName, email, password } = req.body;
      const user = await User.create({ email, password });
      const profile = await Profile.create({ fullName, UserId: user.id });

      res.status(201).json({
        message: "Registration successful",
        user: { fullName: profile.fullName, email: user.email },
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async googleLogin(req, res, next) {
    try {
      const { token } = req.headers;
      const client = new OAuth2Client();

      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      const payload = ticket.getPayload();
      console.log(payload, "<<<< ini payload di controller");

      const [user, created] = await User.findOrCreate({
        where: {
          email: payload.email,
        },
        defaults: {
          email: payload.email,
          password: "password",
        },
        hooks: false,
      });
      console.log(user, "<<<< ini user di controller");

      const access_token = signToken({
        id: user.id,
        email: user.email,
      });

      res.status(200).json({ access_token });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = Controller;
