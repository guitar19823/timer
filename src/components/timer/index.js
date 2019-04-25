import React, { Component } from 'react';
import { connect } from 'react-redux';
import Interval from '../interval';

class Timer extends Component {
  state = {
    currentTime: 0
  }

  interval = null;

  handleStart = () => {
    clearInterval(this.interval);

    this.interval = setInterval(() => {
      this.setState({
        currentTime: this.state.currentTime + this.props.currentInterval,
      })
    }, this.props.currentInterval * 1000);
  }
  
  handleStop = () => {
    clearInterval(this.interval);
    
    this.setState({
      currentTime: 0
    });
  }

  render() {
    return (
      <div>
        <Interval />
        <div>
          Секундомер: {this.state.currentTime} сек.
        </div>
        <div>
          <button onClick={this.handleStart}>Старт</button>
          <button onClick={this.handleStop}>Стоп</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
    currentInterval: state
  }
);

export default connect(mapStateToProps)(Timer);