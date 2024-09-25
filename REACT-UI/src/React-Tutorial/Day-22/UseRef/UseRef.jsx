import React, { Component } from 'react'

export class UseRef extends Component {
    interval
    constructor(props) {
        super(props)

        this.state = {
            timer: 0
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => ({ timer: prevState.timer + 1 }))
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <div className='text-center my-4'>
                <div className='my-3'>
                    class Timer - {this.state.timer}
                </div>
                <button onClick={() => clearInterval(this.interval)} className='btn btn-primary'>Clear Interval</button>
            </div>
        )
    }
}

export default UseRef