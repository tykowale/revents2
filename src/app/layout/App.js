import React from "react";
import { Button } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <h1>Revents</h1>
      <button className="ui icon red button">
        <i className="user icon" /> css button
      </button>
      <Button icon="user" content="React Button" color="green" />
    </div>
  );
}

export default App;
