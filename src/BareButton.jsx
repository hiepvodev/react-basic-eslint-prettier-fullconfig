import React from 'react'

class BareButton extends React.Component {
  constructor(props) {
    super(props)
  }

  //   handleClick = (value) => {
  //     console.log(value)
  //   }

  //Currying
  handleClick = (value) => {
    console.log(11111, value)
    return () => {
      console.log(value)
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick('add')}>Add</button>
        <button onClick={this.handleClick('edit')}>Edit</button>
        <button onClick={this.handleClick('Delete')}>Delete</button>
      </div>
    )
  }
}

export default BareButton
