import React, { Component } from 'react';

class RandomColor extends Component {
    state = { currentColor: 'pink' };
    // randomize function to change colors every second 
    // build out an array const of color elements
    // ComponentDidUpdate means it will update after every 'second' when calling that random function

    componentDidMount() {
        this.interval = setInterval(() => {
        // call the random function here, store in a variable to pass into the setState function
            const colors = ['blue', 'green', 'purple', 'red'];
            const randomizeColor = Math.floor(Math.random() * colors.length)
            console.log(randomizeColor);
        this.setState({
        // key value. property in state(current color) then value (variable)
            currentColor: this.state.randomizeColor
        });
        }, 1000);
    }
    // handle color change and pass in the color from another 
    handleColorChanges = (color) => {
        this.setState({ currentColor: color });
      };

    render() { 
        
        const { currentColor } = this.state;

        return (
            <>
            <div
                style={{
                    backgroundColor: currentColor,
                    width: '200px',
                    height: '200px',
                }}>
            </div>         
            </>
        )
    }
}
 
export default RandomColor;