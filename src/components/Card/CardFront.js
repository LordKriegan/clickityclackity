import React from "react";
import cardFrontImg from '../../images/cardfront.png'
class CardFront extends React.Component {
    render() {
        return (
            <img onClick={this.props.onClick} alt='' style={{width: "200px", height: "200px"}} src={cardFrontImg}/>
        );
    }
}

export default CardFront;