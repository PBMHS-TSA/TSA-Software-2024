import { socket } from "./globals";

export class Creds {
  constructor() {}
  encodeBase64(data) {
    return btoa(data);
  }
  decodeBase64(data) {
    return atob(data);
  }
  getStorage() {
    return window.localStorage;
  }
  saveData(userData) {
    if (userData.constructor != {}.constructor) userData = JSON.parse(userData);

    let encoded = this.encodeBase64(userData.username) + "." + this.encodeBase64(userData.password);

    this.getStorage().setItem("token", encoded);
    this.getStorage().setItem("email", userData.email);
    this.getStorage().setItem("userId", userData.userId);
  }
  SaveData(username, password, email, userId) {
    let user = { username: username, password: password, email: email, userId: userId };
    this.saveData(user);
  }
  hasData() {
    return this.getData() == undefined ? false : true;
  }
  getData() {
    if (!this.getStorage().getItem("token")) return undefined;
    if (!this.getStorage().getItem("email")) return undefined;
    if (!this.getStorage().getItem("userId")) return undefined;
    let token = this.getStorage().getItem("token").split(".");
    return {
      username: this.decodeBase64(token[0]),
      password: this.decodeBase64(token[1]),
      email: this.getStorage().getItem("email"),
      userId: this.getStorage().getItem("userId"),
    };
  }
  removeData() {
    this.getStorage().removeItem("token");
    this.getStorage().removeItem("email");
  }
  Validate(callback) {
    socket.emit("validate user", {}, (response) => {
      callback(response.valid);
    });
  }
  AddCheck(username, password, email, callback) {
    if (email == "" || email == " ") email = undefined;
    socket.emit("validate user", { username, password, email }, (response) => {
      //console.log(response);
      if (response.valid == true) {
        this.SaveData(response.username, password, response.email, response.userId);
      }
      if (callback) callback(response.valid);
      else return response.valid;
    });
  }
  CreateAccount(username, password, email, callback) {
    socket.emit("signup", { username: username, password: password, email: email }, (response) => {
      //console.log(response);

      if (callback) callback(response);
      else return response;
    });
  }
}