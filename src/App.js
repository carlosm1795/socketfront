import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "https://serverdate.herokuapp.com/";
function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", (data) => {
      setResponse(data);
    });
  }, []);
  return (
    <div className="App">
      <p>
        It's <time dateTime={response}>{response}</time>
      </p>
    </div>
  );
}

export default App;
