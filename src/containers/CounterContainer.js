import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Counter from '../components/Counter'
import Title from '../components/Title'

class CounterContainer extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const { counter, title } = this.props

    return (
      <div>
      <Title
        value={title} />
      <Counter
        value={counter}
        onIncrement={this.props.increment}
        onDecrement={this.props.decrement} />
    </div>
  )
  }
}

const mapStateToProps = state => {
return {
    counter: state.counter,
    title: state.title
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(actions.increment);
    },
    decrement: () => {
      dispatch(actions.decrement);
    },
    changeTitle: () => {
      dispatch(actions.changeTitle);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)
