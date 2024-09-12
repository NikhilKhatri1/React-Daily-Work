import React from "react";

export class Car extends React.Component {
    constructor() {
        super();
        this.state = { color: 'Red' };
    }
    render() {
        return (
            <div>
                <h3>Hi, I am {this.state.color} John</h3>
            </div>
        )
    }
}