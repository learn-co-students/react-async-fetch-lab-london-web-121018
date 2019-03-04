// create your App component here
import React, { Component } from 'react'


export default class App extends Component {

  state = {
    astros: []
  }

  render(){
    return(
      <div>
        {this.state.astros.map(astro => <li>{astro.name} (Craft: {astro.craft})</li>)}
      </div>
    )
}

 componentDidMount() {
    fetch(`http://api.open-notify.org/astros.json`)
    .then(resp => resp.json())
    .then(data => this.setState({ astros: data.people})
  )
    }

}
