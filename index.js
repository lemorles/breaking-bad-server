const express = require("express");
const app = express();
const characters = require("./db");

app.get("/", (request, response) => {
  response.send({
    status: 200,
    msg: "Bienvenidos a la API REST de Breaking Bad",
  });
});

app.listen(3000, () => console.log("server listening on port 3000"));
