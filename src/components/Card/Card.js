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
        this.setState({ isFlipped: !this.state.isFlipped })
        this.props.setScore(this.state.cardFound)
        this.setState({cardFound: true})
    }
    componentDidMount() {
        this.setState({isFlipped: false})
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