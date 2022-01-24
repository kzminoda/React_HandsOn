import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){
        this.timer = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    tick(){
        this.setState({
            date: new Date(),
        });
    }

    render() {
        return (
            <p>Date & Time: {this.state.date.toString()}</p>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);
