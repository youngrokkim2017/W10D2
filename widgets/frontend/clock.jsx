import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        };
    }

    render() {
        let seconds = this.state.time.getSeconds();
        let minutes = this.state.time.getMinutes();
        let hours = this.state.time.getHours();

        seconds = (seconds < 10) ? `0${seconds}` : seconds;
        minutes = (minutes < 10) ? `0${minutes}` : minutes;
        hours = (hours < 10) ? `0${hours}` : hours;

        return (
            <h1>Clock</h1>
            <div className="clock-widget">
                <p>
                    <span>
                        Time:
                    </span>
                    <span>
                        {hours}:{minutes}:{seconds}
                    </span>
                </p>
                <p>
                    <span>
                        Date:
                    </span>
                    <span>
                        {this.state.time.toDateString()}
                    </span>
                </p>
            </div>
        );
    }

    tick() {
        this.setState({
            time: new Date()
        });
    }

    componentDidMount() {
        this.interval = setInterval(this.tick.bind(this), 1000);
    }

    componentWillMount() {
        clearInterval(this.interval);
    }
}

export default Clock;