import React from 'react'

// //Functional component
// function Welcome(prop) {
//   return <h1>Hello world, {prop.name}</h1>
// }

class Welcome extends React.Component {
  render() {
    console.log(this.props)
    return (
      <h1>
        Hello, {this.props.name} - {this.props.age}
      </h1>
    )
  }
}

export default Welcome
