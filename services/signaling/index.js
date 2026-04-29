const WebSocket = require("ws");

const PORT = process.env.PORT || 8080;
const wss = new WebSocket.Server({ port: PORT });
const rooms = new Map();

wss.on("connection", (ws) => {
  ws.on("message", (msg) => {
    let data;
    try {
      data = JSON.parse(msg);
    } catch (e) {
      ws.send(JSON.stringify({ type: "error", message: "Invalid JSON" }));
      return;
    }

    if (data.type === "join") {
      ws.room = data.room;
      if (!rooms.has(data.room)) rooms.set(data.room, new Set());
      rooms.get(data.room).add(ws);
    }

    if (data.type === "signal") {
      const room = rooms.get(ws.room);
      if (!room) return;
      room.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(data));
        }
      });
    }
  });

  ws.on("close", () => {
    if (ws.room && rooms.has(ws.room)) {
      rooms.get(ws.room).delete(ws);
      if (rooms.get(ws.room).size === 0) {
        rooms.delete(ws.room);
      }
    }
  });

  ws.on("error", (err) => {
    console.error("WebSocket client error:", err.message);
  });
});

process.on("SIGTERM", () => {
  wss.close(() => process.exit(0));
});

console.log(`Signaling server running on :${PORT}`);
