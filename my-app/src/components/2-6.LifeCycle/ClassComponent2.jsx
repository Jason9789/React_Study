import React, { Component } from 'react';

export default class ClassComponent2 extends Component {

  constructor(props) {
    super(props)
    console.log("constructor")
    this.state = { date: new Date() }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    console.log("compoenentDidMount")
    this.timerID = setInterval(() => this.tick(), 10000)
  }

  componentWillUnmount() {
    console.log('compoenentWillUnmount')
    clearInterval(this.timerID)
  }

  componentDidUpdate() {

  }

  tick() {
    console.log('tick')
    this.setState({ date: new Date() })
  }

  handleClick() {
    alert(this.state.date)
  }

  render() {
    console.log("render")
    return (
      <div>
        <h1 onClick={ this.handleClick }>Hello, World!</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
