import React from "react";
import "./Card.css";

const App = props => (
  <div className="card">
    <div
      className="img-container"
      onClick={() => props.handleCharSel(props.id)}
    >
      <img src={props.image} alt={props.name} />
    </div>
  </div>
);

export default App;
