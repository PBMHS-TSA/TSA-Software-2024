let data = "./database/storage.db";
let user = require("../user");
let db = require("better-sqlite3")(data);
function decodeBase64(data) {
  return Buffer.from(data, "base64").toString("ascii");
}
class Database {
  initialize() {
    /*
     *id=never null never changing
     *username
     *email
     *password
     *isadmin
     *lastLogin
     *
     * */
    db.exec("CREATE TABLE IF NOT EXISTS users (" + "UserId NUMERIC NOT NULL UNIQUE," + "email TEXT NOT NULL UNIQUE," + "username TEXT NOT NULL UNIQUE," + "password TEXT NOT NULL," + "isAdmin TEXT NOT NULL," + "lastLogin NUMERIC NOT NULL);");
  }
  getUserByUsername(id) {
    let stmt = db.prepare("SELECT * FROM users WHERE username=?");
    let rs = stmt.get(id);
    if (!rs) return undefined;
    return { userId: rs.userId, username: rs.username, email: rs.email, token: btoa(rs.username) + "." + btoa(rs.password) };
  }
  addUser(email, username, password) {
    let time = Date.now();

    let stmt = db.prepare("INSERT INTO users VALUES(?,?,?,?,?,?)");
    stmt.run(time, email, username, password, 0, time);

    console.log("user " + username + " was logged");
  }
  getId(username) {
    let stmt = db.prepare("SELECT * FROM users WHERE username = ?;");
    let y = stmt.get(username);
    if (y) {
      return y.id;
    } else {
      return undefined;
    }
  }
  getPassword(username) {
    let stmt = db.prepare("SELECT * FROM users WHERE username = ?;");
    let y = stmt.get(username);
    if (y) {
      return y.password;
    } else {
      return undefined;
    }
  }
  getEmail(username) {
    let stmt = db.prepare("SELECT * FROM users WHERE username = ?;");
    let y = stmt.get(username);
    if (y) {
      return y.email;
    } else {
      return undefined;
    }
  }

  getAll() {
    let stmt = db.prepare("SELECT * FROM users;");
    return stmt.all();
  }

  getLastLogin(username) {
    let stmt = db.prepare("SELECT * FROM users WHERE username = ?;");
    let y = stmt.get(username);
    if (y) {
      return y.lastLogin;
    } else {
      return undefined;
    }
  }
  isAdmin(username) {
    let stmt = db.prepare("SELECT * FROM users WHERE username = ?;");
    let y = stmt.get(username);
    if (y) {
      return y.isAdmin;
    } else {
      return undefined;
    }
  }
  getUserFromToken(token) {
    let idpass = token.split(".");
    let id = decodeBase64(idpass[0]);
    console.log(id);
    let sql = "SELECT * FROM users WHERE id =?;";
    let stmt = db.prepare(sql);
    let ran = stmt.get(id);
    if (ran.username == undefined) return;
    console.log(ran);
    return ran.username;
  }
  setLoginTime(username) {
    let time = Date.now();
    let sql = "UPDATE users SET lastLogin = ? WHERE username =?;";
    let stmt = db.prepare(sql);
    stmt.run(time, username);
  }
  makeAdmin(username) {
    let sql = 'UPDATE "users" SET "isAdmin" = 1 WHERE "username" = ?;';

    let stmt = db.prepare(sql);
    stmt.run(username);
  }
  removeAdmin(username) {
    let sql = 'UPDATE "users" SET "isAdmin"=0 WHERE "username" = ?;';

    let stmt = db.prepare(sql);
    stmt.run(username);
  }
  database() {
    return db;
  }
  removeUser(username) {
    let sql = "DELETE FROM users WHERE username=?;";
    let stmt = db.prepare(sql);
    stmt.run(username);
  }
  addMessage(userId, message, ts) {
    let stmt = db.prepare("INSERT INTO messages VALUES (?,?,?)");
    let rs = stmt.run(userId, message, ts);
  }
  getUserById(id) {
    let stmt = db.prepare("SELECT * FROM users WHERE userId=?");
    let rs = stmt.get(id);
    if (!rs) return undefined;
    return { userId: id, username: rs.username, email: rs.email, token: btoa(rs.username) + "." + btoa(rs.password) };
  }
  getUserByUsername(id) {
    let stmt = db.prepare("SELECT * FROM users WHERE username=?");
    let rs = stmt.get(id);
    if (!rs) return undefined;
    return { userId: rs.userId, username: rs.username, email: rs.email, token: btoa(rs.username) + "." + btoa(rs.password) };
  }
  createUser(email, username, password, userId, userdata = {}) {
    let stmt = db.prepare("INSERT INTO users VALUES (?,?,?,?,?)");
    try {
      let rs = stmt.run(email, username, password, userId, JSON.stringify(userdata));
    } catch (error) {
      return false;
    }
    return true;
  }
}
module.exports = Database;
