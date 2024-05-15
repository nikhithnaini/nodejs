const net = require("net");

const server = net.createServer((socket) => {
  console.log("Client connected");

  socket.on("data", (data) => {
    console.log("Received data:", data.toString());
  });

  socket.on("end", () => {
    console.log("Client disconnected");
  });
});

const port = 9102; // Set the port number
const hostname = "localhost"; // Set the hostname

server.listen(port, hostname, () => {
  console.log(`TCP server listening on ${hostname}:${port}`);
});
