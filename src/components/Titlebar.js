import React from "react";

class Titlebar extends React.Component {
    render() {
        return (
            <div className="jumbotron text-center">
                <h1 style={{textDecorationLine: "underline"}}>Nyaaaa!!!</h1>
                <p>For every unique kitty you find, you will add to your streak!</p>
                <p>If you see the same kitty twice, your streak resets!</p>
            </div>
        );
    }
}

export default Titlebar;