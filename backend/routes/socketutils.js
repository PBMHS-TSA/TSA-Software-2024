//Declare libraries
const ex = require("express");
const router = ex.Router();
const user = require("../user");
const database = require("../database/database");
const db = new database();
//With NodeJS
// format socketId:userToken
const socketsessions = {};
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

router.get("/logout/:id", (req, res) => {
  let id = req.params.id;
  res.clearCookie("token").clearCookie("username");
  delete socketsessions[id];
  res.redirect("/");
});
router.get("/checktoken/:token/:sessionid", (req, res) => {
  let token = req.params.token;
  let sessionid = req.params.sessionid;
  if (socketsessions[sessionid] == token) res.send({ valid: true });
  else res.send({ valid: false });
});

module.exports = { router };
