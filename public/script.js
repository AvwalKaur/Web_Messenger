const socket = io();

function sendMessage() {
  const username = document.getElementById("username").value.trim();
  const message = document.getElementById("message").value.trim();

  if (username && message) {
    socket.emit("send message", { username, message });
    document.getElementById("message").value = "";
  }
}

socket.on("receive message", (data) => {
  const messagesDiv = document.getElementById("messages");
  const newMessage = document.createElement("p");
  newMessage.innerHTML = `<strong>${data.username}:</strong> ${data.message}`;
  messagesDiv.appendChild(newMessage);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
});
