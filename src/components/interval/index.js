import React from 'react';
import { connect } from 'react-redux';
import { actionChangeInterval } from '../../actions';

const Interval = (props) => {
  return (
    <div>
      <span>Интервал обновления секундомера: {props.currentInterval} сек.</span>
      <span>
        <button onClick={() => props.changeInterval(-1)}>-</button>
        <button onClick={() => props.changeInterval(1)}>+</button>
      </span>
    </div>
  );
};

const mapStateToProps = (state) => (
  {
    currentInterval: state
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    changeInterval: (value) => {
      dispatch(actionChangeInterval(value))
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Interval);