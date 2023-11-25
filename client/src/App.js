import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const handleClick = async () => {
    const settings = {
      method: "GET",
    };

    try {
      const fetchResponse = await fetch(
        " http://localhost:1337/api/data",
        settings
      );
      const res = await fetchResponse.json();
      if (fetchResponse.status === 200) {
        alert(res.data);
      } else {
        alert(res.message);
      }
    } catch (error) {
      alert("smthng went wsfdasdf");
    }
  };

  const handleSubmit = async () => {
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "siddhant",
      }),
    };

    try {
      const fetchResponse = await fetch(
        " http://localhost:1337/api/submitData",
        settings
      );
      const res = await fetchResponse.json();
      if (fetchResponse.status === 200) {
        alert(res.message);
      } else {
        alert(res.message);
      }
    } catch (error) {
      alert("smthng went wsfdasdf");
    }
  };

  return (
    <div className="App">
      <h1>Form</h1>
      <input type="text" placeholder="name" />
      <button onClick={() => handleSubmit()}>Submit</button>

      <button style={{ margin: "10px" }} onClick={() => handleClick()}>
        Click me
      </button>
    </div>
  );
}

export default App;
