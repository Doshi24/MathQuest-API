import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./component/Form";
import MathQuest from "./component/MathQuest";

function App() {
  const [playerName, setPlayerName] = useState(""); 

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Form setPlayerName={setPlayerName} />}
        />
        <Route
          path="/game"
          element={<MathQuest playerName={playerName} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
