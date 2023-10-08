import React from 'react'

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: {
        created: new Date().toLocaleDateString()
      },
      seconds: {
        created: new Date().getSeconds()
      }
    }
    this.date = '22/8/2022'
  }

  getTime = () => {
    const newState = {
      ...this.state,
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: {
        created: new Date().getSeconds()
      }
    }
    this.setState(newState)
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.time.created}</h2>
        <h2 id='seconds'>It is {this.state.seconds.created}</h2>
        <h3>Is is {this.date}</h3>
        <button onClick={() => this.getTime()}>Get Time</button>
      </div>
    )
  }
}

export default Clock
