import React, {Component} from "react";
import characters from "../components/characters/character-index";
import ReactCardFlip from "react-card-flip";
import cardStyle from "../resources/styles/card.css";
import digitalLogo from "../resources/images/DigitalLogo.png";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.parent = this.props.parent;
    }

    handleClick(e) {
        e.preventDefault();
        console.log("e id: "+this.props.character);
        this.parent.flipMe(this);
    }

    findCharacter(){
        switch(this.props.character) {
            case "Apu":
                return <characters.Apu/>;
            case "Bart":
                return <characters.Bart/>;
            case "Homer":
                return <characters.Homer/>;
            case "Itchy":
                return <characters.Itchy/>;
            case "Jeff":
                return <characters.Jeff/>;
            case "Krusty":
                return <characters.Krusty/>;
            case "Lisa":
                return <characters.Lisa/>;
            case "Maggie":
                return <characters.Maggie/>;
            case "Marge":
                return <characters.Marge/>;
            case "MrBurns":
                return <characters.MrBurns/>;
            case "Ned":
                return <characters.Ned/>;
            case "Ralph":
                return <characters.Ralph/>;
            case "Smithers":
                return <characters.Smithers/>;
        }
    }

    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                <div id="clickable" onClick={this.handleClick}>
                    <img className="digitalLogo" src={digitalLogo}/>
                </div>
                <div index={this.props.index} id="clickable" className="characterFace" onClick={this.handleClick}>
                    {this.findCharacter()}
                </div>
            </ReactCardFlip>
        );
    }

}

export default Card;