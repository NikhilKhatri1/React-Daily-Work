import React, { PureComponent } from 'react';

// Child component using PureComponent
class MyComponent extends PureComponent {
    render() {
        console.log('Rendering MyComponent');
        return <div>{this.props.value}</div>;
    }
}

// Parent component
class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Hello, World!',
            counter: 0
        };
    }

    // Method to update state (this will change the counter but not the value)
    incrementCounter = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }));
    };

    // Method to change the value prop
    changeValue = () => {
        this.setState({ value: 'New Value!' });
    };

    render() {
        return (
            <div>
                <h1>Parent Component</h1>
                <p>Counter: {this.state.counter}</p>
                <button className='btn btn-primary me-2' onClick={this.incrementCounter}>Increment Counter</button>
                <button className='btn btn-primary ' onClick={this.changeValue}>Change Value</button>

                {/* Passing value as prop to MyComponent */}
                <MyComponent value={this.state.value} />
            </div>
        );
    }
}

export default ParentComponent;
