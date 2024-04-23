import Database from "../../database/database";
import { Server } from "socket.io";
module.exports = function (io: Server, db: Database) {
  io.on("connection", (socket) => {
    require("./sessionId")(io, socket, db);
    require("./chat")(io, socket, db);
    require("./validate")(io, socket, db);

    console.log("a user connected");
    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
};
