let data = "./database/storage.db";
let user = require("../user")
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
    db.exec(
      "CREATE TABLE IF NOT EXISTS users (" +
        "id NUMERIC NOT NULL," +
        "email TEXT NOT NULL," +
        "username TEXT NOT NULL," +
        "password TEXT NOT NULL," +
        "isAdmin TEXT NOT NULL," +
        "lastLogin NUMERIC NOT NULL);"
    );
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
    let idpass = token.split(".")
    let id = decodeBase64(idpass[0])
    console.log(id)
    let sql = 'SELECT * FROM users WHERE id =?;'
    let stmt = db.prepare(sql)
    let ran = stmt.get(id)
    if (ran.username == undefined) return;
    console.log(ran)
    return ran.username
  }
  setLoginTime(username) {
    let time = Date.now()
    let sql = 'UPDATE users SET lastLogin = ? WHERE username =?;'
    let stmt = db.prepare(sql)
    stmt.run(time,username)
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
    let sql = 'DELETE FROM users WHERE username=?;'
    let stmt = db.prepare(sql)
    stmt.run(username)
  }
}
module.exports = Database;
