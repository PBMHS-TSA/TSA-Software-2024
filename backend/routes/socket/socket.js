module.exports = function (io, db) {
    io.on('connection', (socket) => {
        require("./sessionId")(io,socket,db.Twetzel)
        require('./chat')(io, socket,db.Twetzel);
        require('./validate')(io, socket,db.Twetzel);

        console.log('a user connected');
        socket.on('disconnect', () => {
          console.log('user disconnected');
        });
      
      });
};