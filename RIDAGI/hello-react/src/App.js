import './App.css'
import ValidationSample from './components/ValidationSample'

import React, { Component } from 'react'
import ScrollBox from './components/ScrollBox'
import IterationSample from './components/IterationSample'

export default class App extends Component {
  render() {
    return (
      <div>
        <ValidationSample />
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>

        <IterationSample />
      </div>
    )
  }
}
