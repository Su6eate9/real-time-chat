const app = require("express");
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: { origin: "https//localhost:5173" },
});
const PORT = 3001;

server.listen(PORT, () => console.log("Server is running..."));