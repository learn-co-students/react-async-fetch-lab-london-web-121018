// create your App component here
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(resp => resp.json())
      .then(data => console.log(data))
  }

  render() {
    return(
      <div className="app">
        <h1>People in space</h1>
      </div>
    )
  }

}

export default App;
