"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on("connection", function connection(ws) {
    ws.on("error", console.error); // ws.on('error',(err)=>console.error(err));
    ws.on("message", function message(data) {
        console.log("recieved %s", data);
    });
    ws.send("something");
});
