import { app } from "./app.js";

app.listen({
  host: "0.0.0.0",
  port: 3333,
}).then(() => {
  console.log("HTTP server is running on http://0.0.0.0:3333");
});