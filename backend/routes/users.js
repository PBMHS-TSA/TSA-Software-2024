//Declare libraries
const ex = require("express");
const router = ex.Router();
const multer = require("multer");
const database = require("../database/database");
const db = new database();
const user = require("../user");
const sgMail = require("@sendgrid/mail");
const { Webhook } = require("discord-webhook-node");
const hook = new Webhook("https://discord.com/api/webhooks/1071112534276448386/6rvviRE88luH4QHvzYElF9EL4ilYPRz1xdbRINK8idJmsZxl6UNyEUOVygJ-IhBHvqKk");

const { ensureAuth, ensureGuest, ensureAdmin, POSTEnsureAdmin, POSTEnsureAuth, POSTEnsureGuest } = require("../middleware/auth"); // ensures the user is a Guest Admin or is authenticated
function sendWebhook(message) {
  hook.send(message);
}
function passInParams(usr) {
  // params passed into the ejspages
  let us = new user(db, usr);
  return {
    token: us.getToken(),
    username: us.getUsername(),
    id: us.getId(),
    isAdmin: us.isAdmin(),
    email: us.getEmail(),
    lastLogin: us.getLastLogin(),
    lastlogin: {
      years: us.getLastLogin() / 1000 / 60 / 60 / 24 / 7 / 365,
      weeks: us.getLastLogin() / 1000 / 60 / 60 / 24 / 7,
      days: us.getLastLogin() / 1000 / 60 / 60 / 24,
      hours: us.getLastLogin() / 1000 / 60 / 60,
      minutes: us.getLastLogin() / 1000 / 60,
      seconds: us.getLastLogin() / 1000,
    },
    password: us.getPassword(),
  };
}

//Sets up express library
router.use(ex.json({ limit: "1mb" }));

router.get("/", (req, res) => {
  res.redirect("/");
});

//Functions for data transfering between server and client
router.post("/file", multer().single(), async (req, res) => {
  let cookie = req.headers.cookie;
  if (req.file == undefined) {
    if (cookie == "true") {
      res.status(404).send(false); //if the request wants a simple responce
      return;
    }
    res.status(404).send("Missing File");
  }

  if (cookie == "true") {
    res.send(true); //if the request wants a simple responce
    return;
  }
  res.send("Your file was sent");
});

router.post("/signup", POSTEnsureGuest, (req, res) => {
  // signup
  let bodyparam = {
    error: "",
    email: "",
    username: "",
  }; // fills the form data if any input is provided

  let email = req.body.email;
  let username = req.body.username;
  let password = req.body.password;
  let repassword = req.body.repassword;

  console.log(email);
  console.log(username);
  console.log(password);
  console.log(repassword);

  if (password != repassword) {
    bodyparam.error = "Passwords dont match";
    bodyparam.email = email;
    bodyparam.username = username;
    res.status(401).render("signup", {
      body: bodyparam,
      user: passInParams(req.cookies.username),
    });
    return;
  }
  if (email == undefined || username == undefined || password == undefined || repassword == undefined) {
    bodyparam.error = "Please fill out all of the fields and try again";
    res.status(401).redirect("/signup");
  } else {
    if (db.getPassword(username) != undefined) {
      bodyparam.error = "User already exists with this name!";
      bodyparam.email = email;
      bodyparam.username = username;
      res.status(401).render("signup", {
        body: bodyparam,
        user: passInParams(req.cookies.username),
      });
      return;
    } else {
      // User inputed valid credentials to make new account
      db.addUser(email, username, password);
      res.redirect("/login");
    }
  }
});

router.get("/reset", ensureGuest, (req, res) => {
  res.send({ reset: "yes" });
});

router.get("/logout", ensureAuth, (req, res) => {
  res.clearCookie("token").clearCookie("username");

  res.redirect("/login");
});

router.post("/forgot", ensureGuest, (req, res) => {
  let username = req.body.username;
  let email = req.body.email;

  if (username != undefined && email != undefined) {
    console.log(username);
    res.redirect("forgot");
    return;
  }
  if (username != undefined) {
    let uname = new user(db, username);
    if (uname.getId() == undefined) {
      res.redirect("forgot");

      return;
    }

    sendEmail(uname.getEmail(), uname.getToken());
    res.redirect("login");
    return;
  }
  for (x of db.getAll()) {
    let use = new user(db, x.username);
    if (use.getEmail() == email) {
      sendEmail(email, use.getToken());
      res.redirect("login");
      return;
    }
  }
});
function sendEmail(email, token) {
  // send an email for reseting in password
  sgMail.setApiKey("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");
  const msg = {
    to: email, // Change to your recipient
    from: "tsa-software@sokobot.info", // Change to your verified sender
    templateId: "d-9fb4482db23c4dc1a82f6864c3e82960",
    dynamic_template_data: {
      reset_link: `http://tsa-software.mooo.com:3000/users/reset/?token=${token}`,
    },
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
}

router.get("/forgot", ensureGuest, (req, res) => {
  let token = req.cookies.token;
  let use = req.cookies.username;
  if (token != undefined && use != undefined) {
    res.redirect("/dashboard");
    return;
  }

  let querytoken = req.query.token;

  if (querytoken == undefined)
    res.render("forgot", {
      user: passInParams(req.cookies.username),
    });
});
//Login route
router.post("/login", (req, res) => {
  let bodyparam = {
    error: "",
  };
  if (req.cookies.username && req.cookies.token) {
    if (req.headers.cookie == "true") {
      res.send("true");
      return;
    }
    res.redirect("/dashboard");
    return;
  }
  // The Username and Password from the login page
  let password = req.body.password;
  let username = req.body.username;
  if (username == undefined || password == undefined) {
    bodyparam.error = "Please provide a username and password";
    res.status(401).render("login", {
      body: bodyparam,
      user: passInParams(req.cookies.username),
    });
    res.end();
    return;
  }
  console.log(username);
  console.log(password);
  if (db.getPassword(username) == undefined) {
    //Accound doesn't exist
    bodyparam.error = "Sorry this account doesn't exist try again, if you dont have an account Signup!";
    res.status(401).render("login", {
      body: bodyparam,
      user: passInParams(req.cookies.username),
    });
    console.log("User not found in db!");
    return;
  } else if (db.getPassword(username) == password) {
    //Succesful login
    let u = new user(db, username);
    res.cookie("username", u.getUsername(), { maxAge: 900000, httpOnly: true });
    res.cookie("token", u.getToken(), { maxAge: 900000, httpOnly: true });
    u.setLoginTime();

    //Send status to
    if (req.headers.cookie == "true") {
      return res.status(200).send("true");
    } else {
      res.redirect("/dashboard");
      console.log("User authenticated");
    }
    return res.end();
  } else {
    //Account doesn't exist
    bodyparam.error = "Sorry this account doesn't exist try again, if you dont have an account Signup!";
    res.status(401).render("login", {
      body: bodyparam,
      user: passInParams(req.cookies.username),
    });
    console.log("User not found in db!");
    return res.end();
  }
  /*} else { // if the database doesnt contain the username
        bodyparam.error="Sorry the username provided hasn't signed up."
        res.redirect("/login", { body: bodyparam }) // will show an error message with the ejs module
    }


    */
});

router.get("/list", ensureAdmin, (req, res) => {
  // list of users
  res.render("users", {
    body: db.getAll(),
    user: passInParams(req.cookies.username),
  });
});

router.post("/makeadmin", POSTEnsureAdmin, (req, res) => {
  // makes a user an admin with the using provided in teh body and a authorization header
  let username = req.body.username;
  let toset = new user(db, username);
  if (toset.getId() == undefined) {
    res.status(404).send("Operation Canceled due to the provided user not existing");
    return;
  }
  let token = req.headers.authorization;
  for (data of db.getAll()) {
    let us = new user(db, data.username);
    if (us.getToken() == token) {
      if (us.getUsername() == username) {
        res.status(401).send("Sorry you cant preform this action on yourself");
        return;
      }
      if (us.isAdmin() == 1 || us.isAdmin() == "true") {
        new user(db, username).setAdmin(1);
        res.send("Operation complete");
        return;
      } else {
        res.status(403).send("Operation Canceled due to a lack of permissions");
        return;
      }
    }
  }
  res.send("Operation Canceled due to an unexpected error, If you see this please report it to a developer!");
});
router.post("/removeadmin", POSTEnsureAdmin, (req, res) => {
  // same as  above but removess the permissions
  let username = req.body.username;
  let toset = new user(db, username);
  if (toset.getId() == undefined) {
    res.status(404).send("Operation Canceled due to the provided user not existing");
    return;
  }
  let token = req.headers.authorization;
  for (data of db.getAll()) {
    let us = new user(db, data.username);
    if (us.getToken() == token) {
      if (us.getUsername() == username) {
        res.status(401).send("Sorry you cant preform this action on yourself");
        return;
      }
      if (us.isAdmin() == 1 || us.isAdmin() == "true") {
        new user(db, username).setAdmin(0);
        res.send("Operation complete");
        return;
      } else {
        res.status(403).send("Operation Canceled due to a lack of permissions");
        return;
      }
    }
  }
  res.send("Operation Canceled due to an unexpected error, If you see this please report it to a developer!");
});

router.delete("/delete", POSTEnsureAuth, (req, res) => {
  let use = new user(db, req.body.username);
  let auth = new user(db, db.getUserFromToken(req.headers.authorization));

  if (use == undefined || auth == undefined) {
    res.status(404).send("User doesnt exist");
    return;
  }

  console.log(use.getEmail());
  console.log(auth.getEmail());

  console.log(req.body.username);
  console.log(db.getUserFromToken(req.headers.authorization));
  // if user token != token auth and user not admin
  if (use.getToken() != auth.getToken() && auth.isAdmin() != 1) {
    res.status(403).send("You dont have permission to delete this user");
    return;
  }
  use.removeUser();
  res.send("User deleted");
});
module.exports = router;
