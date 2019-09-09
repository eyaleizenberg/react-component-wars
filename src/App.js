import React, { Component } from "react";
import "./App.css";
import AmazingInput from "./AmazingInput/AmazingInput";
import { Header } from "./Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AmazingInput />
      </div>
    );
  }
}

export default App;
