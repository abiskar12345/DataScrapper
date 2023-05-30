const http = require("http");
const app = require("./app");
const port = process.env.PORT || 5000;
const socketIO = require("socket.io");
const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
