import React, {Component} from "react";
import Card from "./Card";
import song from "../resources/sounds/simpsonsThemeSong.mp3";

//TODO: add to repo, host it somewhere

class Gameboard extends Component {
    constructor(props) {
        super(props);
        this.characters = ["Apu", "Bart", "Homer", "Jeff", "Itchy", "Krusty", "Lisa", "Maggie", "Marge", "MrBurns", "Ned", "Ralph", "Smithers"];
        this.randomizedCharacters = [];
        this.queue = [];
        this.matched = [];
        this.clickCount = 0;
    }

    flipMe(currentCard){
        this.clickCount++;

        if(!this.matched.includes(currentCard.props.character)) {
            this.queue.push(currentCard);
            if (this.queue.length == 1) {
                currentCard.setState(prevState => ({isFlipped: !prevState.isFlipped}));
            }
            if (this.queue.length == 2) {
                if (this.queue[0].props.character === currentCard.props.character && this.queue[0].props.id != currentCard.props.id) {
                    currentCard.setState(prevState => ({isFlipped: !prevState.isFlipped}));
                    currentCard.handleClick = null;
                    this.queue[0].handleClick = null;
                    this.queue = [];
                    this.matched.push(currentCard.props.character);
                    if (this.matched.length == 8) {
                        document.getElementById('themeSong').play();
                        document.getElementById('clickCountTotal').innerText="WINNER!!! Your click count was: "+this.clickCount+"!";
                        this.sleep(1100, this).then(() => {
                            document.getElementById('status').style.display="block";
                        });
                    }
                } else {
                    currentCard.setState(prevState => ({isFlipped: !prevState.isFlipped}));
                    this.sleep(1000, this).then(() => {
                        currentCard.setState(prevState => ({isFlipped: !prevState.isFlipped}));
                        this.queue[0].setState(prevState => ({isFlipped: !prevState.isFlipped}));
                        this.queue = [];
                    });
                }
            }
        }
    }

    sleep(ms, currentObject) {
        return new Promise(resolve => setTimeout(resolve, ms, currentObject));
    }

    shuffleArray(array) {
        let currentIndex = array.length;
        let temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    render() {
        this.shuffleArray(this.characters);
        this.randomizedCharacters = this.randomizedCharacters.concat(this.characters.slice(0,8), this.characters.slice(0, 8));
        this.shuffleArray(this.randomizedCharacters);
        return (
            <div>
                <div id="status">
                    <div id="clickCountTotal"></div>
                    <audio id="themeSong">
                        <source src={song} type="audio/mp3"></source>
                    </audio>
                </div>
                <div id="gameboard">
                    {this.randomizedCharacters.map((character, id) => {return <Card id={id} parent={this} character={character} />})}
                </div>
            </div>
        )
    }
}

export default Gameboard;