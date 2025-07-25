import Database from "../../database/database";
import { Server, Socket } from "socket.io";
module.exports = function (io: Server, socket: Socket, db: Database) {
  socket.on("validate user", (msg: string, callback: Function) => {
    console.log(msg);
    let res = {
      valid: false,
      email: null,
      username: null,
      userId: null,
    };

    let json = msg.constructor == {}.constructor ? msg : JSON.parse(msg);
    let creds = { password: undefined, username: undefined }; // will get filled in through the if statements below
    if (json.userData && json.userData.username) creds = json.userData;
    else if (json.body && json.body.username) creds = json.body;
    else {
      callback(res);
      return;
    }
    let user = db.getUserByUsername(creds.username);
    if (user == undefined) {
      callback(res);
      return;
    }
    user.password = atob(user.token.split(".")[1]);

    if (user) {
      if (creds.password === user.password) res.valid = true;
    } else res.valid = false;
    if (res.valid == true) {
      res.email = user.email;
      res.username = user.username;
      res.userId = user.userId;
    }
    callback(res);
  });
};
