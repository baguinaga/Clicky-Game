import React, { Component } from "react";
import Card from "./Components/Card";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  state = {
    characters: characters,
    selected: [],
    score: 0,
    highscore: 0
  };

  handleCharShuffle = () => {
    const charShuffled = [...this.state.characters];

    charShuffled.sort(function(a, b) {
      return 0.5 - Math.random();
    });
    this.setState({ characters: charShuffled });
  };

  handleCharSel = id => {
    const charSelected = [...this.state.selected];

    if (!charSelected.includes(id)) {
      charSelected.push(id);
      this.handleCharShuffle();
      this.setState({
        selected: charSelected,
        score: this.state.score + 1
      });
    } else {
      this.handleCharShuffle();
      this.setState({
        selected: [],
        score: 0
      });
    }
  };

  render() {
    return (
      <div className="container text-center">
        <h1>Clicky Game</h1>
        <div className="wrapper">
          {this.state.characters.map((char, i) => (
            <Card
              key={char.id}
              id={char.id}
              image={char.image}
              alt={char.name}
              handleCharSel={this.handleCharSel}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
