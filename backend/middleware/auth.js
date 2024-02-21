let database = require("../database/database");
let db = new database();
let user = require("../user");
module.exports = {
  ensureAuth: function (req, res, next) {
    let token = req.cookies.token;
    let use = req.cookies.username;
    if (token != undefined && use != undefined) {
      return next();
    } else {
      res.redirect("/");
    }
  },
  ensureAdmin: function (req, res, next) {
    let token = req.cookies.token;
    let use = req.cookies.username;

    if (token != undefined && use != undefined) {
      if (new user(db, use).isAdmin() == 1) {
        return next();
      } else {
        res.redirect("/");
      }
    } else {
      res.redirect("/");
    }
  },
  ensureGuest: function (req, res, next) {
    let token = req.cookies.token;
    let use = req.cookies.username;
    if (token == undefined && use == undefined) {
      return next();
    } else {
      res.redirect("/dashboard");
    }
  },
  POSTEnsureAdmin: function (req, res, next) {
    let token = req.headers.authorization;
    for (x of db.getAll()) {
      let use = new user(db, x.username);
      if (token == use.getToken()) {
        if (use.isAdmin() == 1) {
          return next();
        } else {
          res.send("Unathorized Usage");
          return;
        }
      }
    }
    res.send("Unathorized Usage");
  },
  POSTEnsureAuth: function (req, res, next) {
    let token = req.headers.authorization;
    for (x of db.getAll()) {
      let use = new user(db, x.username);
      if (token == use.getToken()) {
        return next();
      }
    }
    res.send("Unathorized Usage");
  },
  POSTEnsureGuest: function (req, res, next) {
    let token = req.headers.authorization;
    if (token == undefined) {
      return next();
    }
    res.send("Unathorized Usage");
  },
};
