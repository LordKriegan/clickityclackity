import React from 'react';
import Titlebar from './Titlebar';
import Card from './Card/Card'
import ScoreBoard from './ScoreBoard.js'

//create list of cat gifs
const cats = [];
for (let i = 0; i < 9; i++) {
  cats.push(require(`../images/cat${i}.gif`))
}

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      cardList: this.createCards(),
      score: 0
    }
  }
  createCards = () => {
    const cardList = [];
    //build cardlist
    for (let i = 0; i < cats.length; i++) {
      cardList.push(<Card key={"cat" + i} setScore={this.setScore} img={cats[i]} />)
    }
    return this.shuffleCards(cardList);
  }

  shuffleCards = (array) => {
    //source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array, Laurens Holst
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  setScore = (score) => {
    let cardList, newScore;
    if (score) {
      cardList = this.createCards();
      newScore = 0;
      console.log("found the same image again");
    } else {
      cardList = this.shuffleCards(this.state.cardList);
      newScore = this.state.score + 1;
      console.log("found a new image");
    }
    setTimeout(this.setState({ cardList: cardList, score: newScore }), 2000);
  }

  render() {
    return (
      <div>
        <Titlebar />
        <ScoreBoard score={this.state.score} />
        <div className="container">
          <div style={{ paddingTop: "5px", paddingBottom: "5px" }} className="row">
            {this.state.cardList.slice(0, 3)}
          </div>
          <div style={{ paddingTop: "5px", paddingBottom: "5px" }} className="row">
            {this.state.cardList.slice(3, 6)}
          </div>
          <div style={{ paddingTop: "5px", paddingBottom: "5px" }} className="row">
            {this.state.cardList.slice(6)}
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
