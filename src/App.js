// create your App component here
import React, { Component } from 'react';

export default class App extends Component {

  state = {
    astros: []
  }

  componentDidMount(){
    fetch("http://api.open-notify.org/astros.json")
    .then(resp => resp.json())
    .then( astros => this.setState({ astros }))
  }


  render(){
    return(
      <ul>
        {this.state.astros}
      </ul>
    )
  }
}
