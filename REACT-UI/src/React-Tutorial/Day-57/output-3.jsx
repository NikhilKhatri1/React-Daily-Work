// Question 3
// Analyze the below code and advise what is wrong with using setState() inside the render() method:

import React, { Component } from "react";
class App extends Component {
    state = {
        counter: 0,
    };
    // componentDidMount() {
    //     // This will run after the component has been mounted
    //     this.setState({ counter: this.state.counter + 1 });
    // }

    // This method will be called when the button is clicked
    incrementCounter = () => {
        this.setState({ counter: this.state.counter + 1 });
    };

    render() {
        // Warning: Cannot update during an existing state transition (such as within `render`).
        //  Render methods should be a pure function of props and state.
        // this.setState({ counter: this.state.counter + 1 });
        return (
            <div className="m-4">
                <h1>Counter: {this.state.counter}</h1>
                <button className="btn btn-warning" onClick={this.incrementCounter}>inc ++</button>
            </div>
        );
    }
}
export default App;