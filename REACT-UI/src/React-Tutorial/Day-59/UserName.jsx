import React from 'react';
import { createRoot } from 'react-dom/client';

class Username extends React.Component {
    render() {
        return <h1>{this.props.value}</h1>;
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "", // Store the username in state
        };
        this.inputRef = React.createRef(); // Reference for input element
    }

    // Handler to change the username when the button is clicked
    clickHandler = () => {
        const inputValue = this.inputRef.current.value; // Get the value from the input field
        this.setState({ username: inputValue }); // Update the state with the input value
    };

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Change Username</button>
                <input type="text" ref={this.inputRef} /> {/* Attach ref to the input */}
                <Username value={this.state.username} /> {/* Pass the username as a prop */}
            </div>
        );
    }
}

document.body.innerHTML = "<div id='root'></div>";
const root = createRoot(document.getElementById("root"));
root.render(<App />);

setTimeout(() => {
    document.querySelector("input").value = "John Doe"; // Simulate user input
    document.querySelector("button").click(); // Simulate button click

    setTimeout(() => {
        console.log(document.getElementById("root").innerHTML); // Log the updated HTML
    }, 300);
}, 300);
