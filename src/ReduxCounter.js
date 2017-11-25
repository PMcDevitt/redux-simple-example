import React from 'react'
import { connect } from 'react-redux'
import './ReduxCounter.css'

class ReduxCounter extends React.Component {
  state = { }
  increment = () => {
      this.props.dispatch({ type: 'INCREMENT' })
    }

    decrement = () => {
      this.props.dispatch({ type: 'DECREMENT' })
    }

  render() {
    return (
      <div className='main-container'>
        <h2>Redux Counter</h2>
        <div className='component-container'>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(ReduxCounter);
