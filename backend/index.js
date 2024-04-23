/*
 * NODE SERVER
 *
 */

//Libraries
const ex = require("express");
const app = ex();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const { ensureAuth, ensureGuest, ensureAdmin } = require("./middleware/auth");

const database = require("./database/database");
const db = new database();

app.use(cookieParser());

db.initialize();

const port = 3000;
const fs = require("fs");
const https = require("http");
const privateKey = fs.readFileSync("./ssl/key.txt", "utf8");
const certificate = fs.readFileSync("./ssl/cert.txt", "utf8");
const credentials = { key: privateKey, cert: certificate };

const allowedIps = ["192.168.56.1", "10.90.9.5", "10.90.32.36", "192.168.68.131"];
for (let i = 0; i < allowedIps.length; i++) {
  allowedIps[i] = "http://" + allowedIps[i] + ":8080";
}

const corsOptions = {
  origin: ["https://tsa-software-2024.pages.dev", "https://webapp.twetzel.com", "https://webpack-7xv.pages.dev", "http://192.168.56.1:8080", "http://localhost:8080/", "http://localhost:5173/", ...allowedIps],
  credentials: true,
};
var httpsServer = https.createServer(credentials, app);

const { Server } = require("socket.io");
const io = new Server(httpsServer, {
  cors: {
    origin: corsOptions.origin,
    credentials: corsOptions.credentials,
  },
  allowEIO3: true,
});

const socket = require("./routes/socket/socket")(io, db);

let user = require("./user");
//Sets up
app.set("view engine", "ejs");
app.set(ex.json({ limit: "1mb" }));

db.makeAdmin("Jonathan_nathan");
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
//Main route
app.get("/", (req, res) => {
  let username = req.cookies.username;
  let usr = passInParams(username);

  res.render("index", { user: usr });

  console.log("Connection established! User IP: " + req.socket.remoteAddress);
});
app.get("/login", ensureGuest, (req, res) => {
  let username = req.cookies.username;
  let usr = passInParams(username);
  let bodyparams = {
    error: "",
  };
  res.render("login", { body: bodyparams, user: usr });

  console.log("Connection established! User IP: " + req.socket.remoteAddress);
});

app.get("/signup", ensureGuest, (req, res) => {
  let username = req.cookies.username;
  let usr = passInParams(username);
  let bodyparams = {
    error: "",
  };
  res.render("signup", { body: bodyparams, user: usr });

  console.log("Connection established! User IP: " + req.socket.remoteAddress);
});
// Default options, no immediate parsing
//Get routes
const userRoutes = require("./routes/users");
const dash = require("./routes/dashboard");
const docs = require("./routes/documentation");

app.use(ex.urlencoded({ extended: true }));

app.use("/users", userRoutes);
app.use("/dashboard", dash);
app.use("/documentation", docs);

// page not found
app.get("*", function (req, res) {
  res.send(
    404,
    `<head>   
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  <title>404 - PAGE NOT FOUND</title>
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/css/materialize.min.css"></link>
  <meta name="description" content="404 | Page not found">
  </head>
  <center>The page you tried to access doesn't exist <br><a class="waves-effect waves-light btn blue" href='/'>Click here to GO Home</a></center>`
  );
});
// same as a bove but for post
app.post("*", function (req, res) {
  res.status(404).send("Not Found");
});
//Starts server and sets a port

httpsServer.listen(80, "0.0.0.0", () => {
  console.log(`Serving on 443/80`);
});

// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// })
