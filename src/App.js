import React, { useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Results from "./Results";
import request from "./request";

import "./App.css";

function App() {
  const [selectedOption, setSelectedOption] = useState(request.fetchTrending);
  return (
    <div className="app">
      <Header />
      <Navbar setSelectedOption={setSelectedOption} />
      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
