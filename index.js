const express = require("express");
const app = express();
const morgan = require("morgan");
const characters = require("./db");

app.use(morgan("dev"));

app.get("/", (request, response) => {
  response.send({
    status: 200,
    msg: "Bienvenidos a la API REST de Breaking Bad",
  });
});

app.get("/characters", (request, response) => {
  const { status } = request.query;
  if (!status) return response.json(characters);
  else {
    const filterChar = characters.filter(
      (c) => c.status.toLowerCase() === status.toLowerCase()
    );
    if (filterChar.length) return response.send(filterChar);

    response.status(404).send({ msg: "Character not foud" });
  }
});

app.get("/characters/:id", (request, response) => {
  // const id = request.params.id;
  const { id } = request.params;

  const found = characters.find((c) => c.char_id === parseInt(id));

  if (found) {
    return response.json(found);
  }

  response.status(404).json({ msg: "Character not found" });
});

app.listen(3000, () => console.log("server listening on port 3000"));
