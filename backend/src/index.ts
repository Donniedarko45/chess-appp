import { WebSocketServer } from "ws";
import { GameManager } from "./GameManager";

const wss = new WebSocketServer({ port: 8080 });

const gameManager = new GameManager();

wss.on("connection", function connection(ws) {
  // ws.on("error", console.error); // ws.on('error',(err)=>console.error(err));

  gameManager.addUser(ws);

  ws.on("disconnect", () => gameManager.removeUser(ws));
});
