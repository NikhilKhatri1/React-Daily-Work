import { Component } from "react";

class Count extends Component {
    constructor() {
        super(); // Calls the parent class constructor (Component)
        this.state = {
            count: 0 // Initial state with count set to 0
        };
    }
    // Method to update the state
    increment = () => {
        this.setState({
            count: this.state.count + 1 // Updates the count by 1
        });
    };

    render() {
        return (
            <div className="m-4">
                <p>Current Count: {this.state.count}</p>
                <button className="btn btn-primary" onClick={this.increment}>Increment</button>
            </div>
        );
    }


}

export default Count;
