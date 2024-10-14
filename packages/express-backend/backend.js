// backend.js
import express, { json } from "express"; //Is an ES module
import cors from "cors";

const app = express();
const port = 8000;

app.use(cors()); //different ports, different origins
app.use(express.json());

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  );
});


const alpha = "ABCDEFGHIJKLMNOPabcdefghijklmnop";

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



const findUserByName = (name) => {
  return users["users_list"].filter( // Array Filtering
    (user) => user["name"] === name
  );
};

const findUserByJob = (job) =>{
  return name_result.filter( // Array Filtering
    (user) => user["job"] === job
  );
};
//User get request with given query string
app.get("/users", (req, res) => {
  const name = req.query.name;
  const job = req.query.job;
 
  if (name != undefined) {
    let name_result = findUserByName(name);
    name_result =  { users_list: name_result };
    // let job_result =findUserByJob(job);

    res.send(name_result);
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


//Add user to list (No persistance)
//POST HTTP Request that checks input 

const random_alpha = () => {
  let letters = "";
  for (let i = 0; i < 3; i++){
    letters = letters.concat(alpha[Math.floor(Math.random() * alpha.length)]);
  };
  return letters;
};
const genID = (user) =>{
  const random_num = Math.floor(Math.random() * (1000 - 99) + 99); //Choose random num between 100 to 999
  const id = random_alpha().concat(random_num);
  return id;
};
const addUser = (user) => {
  user["id"] = genID(user)
  users["users_list"].push(user); //Add user to the backend list
  return user;
};
app.post("/users", (req, res) => {
  const userToAdd = req.body;
  addUser(userToAdd)
  res.status(201).json(userToAdd);
});


const deleteUser = (user) => {
   //id is unique, finds first instance
  const index = users["users_list"].indexOf(user)
  users["users_list"].splice(index,1) //delete item from arrary
};  
app.delete("/users/:id",(req, res) => {
  const id = req.params["id"];
  let user = findUserById(id)
  if (user === undefined){
    res.status(404).send("Resource not found.");
  } else {
    deleteUser(user);
    res.status(204).send("No Content");
  }
});



 



app.get("/", (req, res) => {
  res.send("Testing Nodemon");
});

app.get("/users", (req, res) => {
    res.send(users);
});
