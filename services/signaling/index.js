const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });
const rooms = new Map();

wss.on("connection", (ws) => {
  ws.on("message", (msg) => {
    const data = JSON.parse(msg);

    if (data.type === "join") {
      ws.room = data.room;
      if (!rooms.has(data.room)) rooms.set(data.room, new Set());
      rooms.get(data.room).add(ws);
    }

    if (data.type === "signal") {
      const room = rooms.get(ws.room);
      if (!room) return;

      room.forEach((client) => {
        if (client !== ws) client.send(JSON.stringify(data));
      });
    }
  });

  ws.on("close", () => {
    if (ws.room && rooms.has(ws.room)) {
      rooms.get(ws.room).delete(ws);
    }
  });
});

console.log("Signaling running on :8080");