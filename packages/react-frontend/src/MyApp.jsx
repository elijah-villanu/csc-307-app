// src/MyApp.jsx (Empty State)
import React, {useState} from "react";
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