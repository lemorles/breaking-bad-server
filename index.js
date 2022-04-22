const express = require("express");
const app = express();
const morgan = require("morgan");
const characters = require("./db");

app.use(morgan("dev"));
app.use(express.json());

const myMiddleware = (req, res, next) => {
  const { access } = req.body;

  if (access < 5) return res.status(401).json({ msg: "Error, access denied" });

  next();
};

app.get("/", myMiddleware, (request, response) => {
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

app.post("/characters", (req, res) => {
  const { name, birthday, status } = req.body;

  if (!name || !birthday || !status)
    return res.status(400).json({ msg: "bad request" });

  const char = {
    char_id: ++char_id,
    name,
    birthday,
    status,
  };

  characters.push(char);

  res.status(201).json({ msg: "Character created" });
});

app.listen(3000, () => console.log("server listening on port 3000"));
