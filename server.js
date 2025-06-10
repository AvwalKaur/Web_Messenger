const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static("public")); // Serve files in /public folder

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("send message", (data) => {
    io.emit("receive message", data); // Broadcast to all
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

const PORT = 3000;
http.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
