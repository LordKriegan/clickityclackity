import React from "react";
import CardFront from './CardFront'
import CardBack from './CardBack'
class Card extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }
   
    handleClick(e) {
        e.preventDefault()
        console.log(typeof this.props.cardFound, this.props.cardFound);
        this.props.setScore(this.props.cardFound, this.props.index);
    }

    render() {
        return (
            <div className="col-xs-4">
                { (this.props.isFlipped)
                ? <CardBack img={this.props.img} onClick={this.handleClick} /> 
                : <CardFront onClick={this.handleClick} />
                }
            </div>
        );
    }
}

export default Card;