const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

// Serve static files from public/
app.use(express.static(path.join(__dirname, 'public')));

// Socket.io logic
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('send message', (data) => {
    io.emit('receive message', data);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Listen on the port Render provides (or fallback)
const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
