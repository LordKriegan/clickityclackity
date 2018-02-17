import React from "react";

class ScoreBoard extends React.Component {
    render() {
        return (
            <div className="jumbotron text-center">
            <h3>Score: {this.props.score}</h3>
            </div>
        );
    }
}

export default ScoreBoard;