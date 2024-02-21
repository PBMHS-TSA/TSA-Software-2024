//Declare libraries
const ex = require("express");
const router = ex.Router();
const database = require("../database/database");
const db = new database();
const user = require("../user");
const { ensureAuth, ensureGuest, ensureAdmin } = require("../middleware/auth");

//With NodeJS

function passInParams(usr) {
  let us = new user(db, usr);
  return {
    token: us.getToken(),
    username: us.getUsername(),
    id: us.getId(),
    isAdmin: us.isAdmin(),
    email: us.getEmail(),
    lastLogin: us.getLastLogin(),
    lastlogin: {
        years:us.getLastLogin()/1000/60/60/24/7/365,
        weeks:us.getLastLogin()/1000/60/60/24/7,
        days:us.getLastLogin()/1000/60/60/24,
        hours: us.getLastLogin()/1000/60/60,
        minutes:us.getLastLogin()/1000/60,
        seconds: us.getLastLogin()/1000
    },
    password: us.getPassword(),
  };
}

router.get("/", ensureAuth, (req, res) => {
  let username = req.cookies.username;

  res.render("dashboard", { user: passInParams(username) });
});

module.exports = router;
