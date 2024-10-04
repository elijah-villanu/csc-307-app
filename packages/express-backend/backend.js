// backend.js
import express from "express"; //Is an ES module

const app = express();
const port = 8000;
const users = {
    users_list: [
      {
        id: "xyz789",
        name: "Charlie",
        job: "Janitor"
      },
      {
        id: "abc123",
        name: "Mac",
        job: "Bouncer"
      },
      {
        id: "ppp222",
        name: "Mac",
        job: "Professor"
      },
      {
        id: "yat999",
        name: "Dee",
        job: "Aspring actress"
      },
      {
        id: "zap555",
        name: "Dennis",
        job: "Bartender"
      }
    ]
  };

// Array Filtering
const findUserByName = (name) => {
  return users["users_list"].filter(
    (user) => user["name"] === name
  );
};

//User get request, endpoint ?name=Mac represents request name
app.get("/users", (req, res) => {
  const name = req.query.name;
  if (name != undefined) {
    let result = findUserByName(name);
    result = { users_list: result };
    res.send(result);
  } else {
    res.send(users);
  }
}); 


//Search by unique id
const findUserById = (id) =>
  users["users_list"].find((user) => user["id"] === id); //.find only finds first instance

app.get("/users/:id", (req, res) => {
  const id = req.params["id"]; //or req.params.id
  let result = findUserById(id);
  if (result === undefined) {
    res.status(404).send("Resource not found.");
  } else {
    res.send(result);
  }
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Testing Nodemon");
});

app.get("/users", (req, res) => {
    res.send(users);
});

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  );
});