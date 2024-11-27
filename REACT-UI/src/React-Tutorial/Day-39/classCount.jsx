import React from "react";
import { Component } from "react";

class ClassCounter extends Component {
    state = { count: 0 }
    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }
    render() {
        return (
            <div className="m-2">
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.increment} className="btn btn-primary">Increment++</button>
            </div>
        )
    }
}

export default ClassCounter;