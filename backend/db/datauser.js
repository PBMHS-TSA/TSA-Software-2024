let data = "../../Sokobot/sokobot.db";
let db = require("better-sqlite3")(data);

class Database {
  __init__() {
    // tables
    db.exec("CREATE TABLE IF NOT EXISTS accounts (email TEXT NOT NULL, username TEXT NOT NULL, password TEXT NOT NULL)");
    db.exec("CREATE TABLE IF NOT EXISTS forgotpassword (email TEXT NOT NULL, code TEXT NOT NULL)");
    //db.exec('DROP TABLE messages')
    db.exec("CREATE TABLE IF NOT EXISTS users (" + "id NUMERIC NOT NULL," + "email TEXT NOT NULL," + "username TEXT NOT NULL," + "password TEXT NOT NULL);");
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
//   setLoginTime(username) {
//     let time = Date.now();
//     let sql = "UPDATE users SET lastLogin = ? WHERE username =?;";
//     let stmt = db.prepare(sql);
//     stmt.run(time, username);
//   }

  database() {
    return db;
  }
  removeUser(username) {
    let sql = "DELETE FROM users WHERE username=?;";
    let stmt = db.prepare(sql);
    stmt.run(username);
  }
}
