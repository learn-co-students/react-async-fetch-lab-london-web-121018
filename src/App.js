// create your App component here
import React, { Component } from 'react'

export default class App extends Component {

    state = {
        peopleInSpace: []
    }

    render () {
        return (
            <React.Fragment>
                <ul>
                {this.state.peopleInSpace.map(p => <li>{p.name}</li>)}
                </ul>
            </React.Fragment>
        )
    }

        componentDidMount() {
            fetch('http://api.open-notify.org/astros.json')
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        peopleInSpace: data.people
                    })
                })
        }
    }