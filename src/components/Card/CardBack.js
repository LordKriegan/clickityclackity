import React from "react";

class CardFront extends React.Component {
    render() {
        return (
            <img onClick={this.props.onClick} alt='' style={{width: "200px", height: "200px"}} src={this.props.img}/>
        );
    }
}

export default CardFront;