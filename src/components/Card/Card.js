import React from "react";
import CardFront from './CardFront'
import CardBack from './CardBack'
class Card extends React.Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false,
            cardFound: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault()
        this.setState({cardFound: true, isFlipped: true})
        this.props.setScore(this.state.cardFound, this.props.index)
    }
    componentDidMount() {
        this.setState({found: this.props.found})
    }
    render() {
        return (
            <div className="col-xs-4">
                { (this.state.isFlipped)
                ? <CardBack img={this.props.img} onClick={this.handleClick} /> 
                : <CardFront onClick={this.handleClick} />
                }
            </div>
        );
    }
}

export default Card;