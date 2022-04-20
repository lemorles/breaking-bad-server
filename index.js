const express = require("express");
const app = express();
const characters = require("./db");

app.get("/", (request, response) => {
  response.send({
    status: 200,
    msg: "Bienvenidos a la API REST de Breaking Bad",
  });
});

app.get("/characters", (request, response) => {
  response.json(characters);
});

app.get("/characters/:id", (request, response) => {
  // const id = request.params.id;
  const { id } = request.params;

  const found = characters.find((c) => c.char_id === parseInt(id));

  if (found) {
    return response.json(found);
  }

  response.json({ msg: "Character not found" });
});

app.listen(3000, () => console.log("server listening on port 3000"));
