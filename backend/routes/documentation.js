//Declare libraries
const ex = require("express");
const router = ex.Router();
const user = require("../user");
const database = require("../database/database");
const db = new database();
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
    password: us.getPassword(),
  };
}

router.get("/", (req, res) => {
  let username = req.cookies.username;
  let usr = passInParams(username);
  res.render("documentation/main", { user: usr });
});

module.exports = router;
