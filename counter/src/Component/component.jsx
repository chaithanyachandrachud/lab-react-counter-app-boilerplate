import React from 'react'

class CounterComponent extends React.Component{
    
    constructor(){
        super();
        this.state = {count:0}
    }
    
    increment = () => {
        let incCount = this.state.count + 1
        this.setState({count:incCount})
    }
    
    decrement = () => {
        let decCount = this.state.count - 1
        if (decCount < 0) decCount = 0
        this.setState({count:decCount})
    }
    
    reset = () => {
        this.setState({count:0})
    }
    render(){
        return(
            <div>
                <h1>
                    Counter App
                </h1>
                <p>
                    {this.state.count}
                </p>
                <div>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.reset}>RESET</button>
                </div>
            </div>
        )
    }
}
export default CounterComponent