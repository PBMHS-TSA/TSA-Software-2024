class User {
  constructor(database, uname) {
    this.db = database;
    this.username = uname;
  }

  isAdmin() {
    if (this.username == undefined) return undefined;
    if (this.db.isAdmin(this.username) == (1 || "true")) return true;
    else return false;
  }
  getPassword() {
    if (this.username == undefined) return undefined;
    return this.db.getPassword(this.username);
  }
  getLastLogin() {
    if (this.username == undefined) return undefined;
    return this.db.getLastLogin(this.username);
  }
  getUsername() {
    if (this.username == undefined) return undefined;
    return this.username;
  }

  getId() {
    if (this.username == undefined) return undefined;
    return this.db.getId(this.username);
  }
  setLoginTime() {
    if (this.username == undefined) return undefined;
    this.db.setLoginTime(this.username);
  }
  getEmail() {
    if (this.username == undefined) return undefined;
    return this.db.getEmail(this.username);
  }
  getToken() {
    if (this.username == undefined) return undefined;
    return encodeBase64(this.getId()) + "." + encodeBase64(this.getPassword());
  }

  setAdmin(toset = 0) {
    if (this.username == undefined) return;
    if (toset != "true" && toset != "false" && toset != 0 && toset != 1) {
      this.db.removeAdmin(this.username);
    } else if (toset == 1) {
      this.db.makeAdmin(this.username);
    } else {
      this.db.removeAdmin(this.username);
    }
  }
  removeUser() {
    this.db.removeUser(this.username);
  }
}

function encodeBase64(data) {
  return Buffer.from(data).toString("base64");
}
function decodeBase64(data) {
  return Buffer.from(data, "base64").toString("ascii");
}
module.exports = User;
