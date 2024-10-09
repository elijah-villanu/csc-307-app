// src/MyApp.jsx (Empty State)
import React, {useState,useEffect} from "react";
import Table from "./table";
import Form from "./Form"; //Needs to be after table

function MyApp() {
  const [characters, setCharacters] = useState([]);  

  function removeOneCharacter(index){
    const updated = characters.filter((character, i) => {
        return i !== index;
    });
    setCharacters(updated);
    }  

  function updateList(person) {
    setCharacters([...characters, person]);
    } 
  
  function fetchUsers(){
    const promise = fetch("http://localhost:8000/users");
    return promise
  }

  //Runs when Promise Fullfilled Successfully 
  useEffect(() => {
    fetchUsers()
            .then((res) => res.json()) //Is a promise to return once decoded
            .then((json) => setCharacters(json["users_list"]))
            .catch((error) => { console.log(error); });
  },[]); //[] argument to ensure only runs at first mount (do not touch main data once in state)
  
  
  
  //Display
  return (
    <div className="container">
      <Table
        characterData={characters}
        removeCharacter={removeOneCharacter}
      />
      <Form handleSubmit = {updateList} />
    </div>
  );
}

//Allows component to be importable
export default MyApp;