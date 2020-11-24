import React, { useState } from 'react'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username : null
    }
  }
  componentDidMount(){
    fetch('http://localhost:3002/api')
    .then(res => res.json())
    .then(data => this.setState({username: data.username}))
  }
  render() {
    const {username} = this.state
    return (
      <div>
        {username ? `Hello ${username}` : `Hello World!`}
      </div>
    )
  }
}

export default App;
