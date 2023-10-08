import React, { Component } from 'react'

export class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Name:
            <input type='text' name='name' id='' onChange={this.handleChange} />
            <input type='submit' value='Submit' />
          </label>
        </form>
      </div>
    )
  }
}

export default Form
