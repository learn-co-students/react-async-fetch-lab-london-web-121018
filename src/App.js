// create your App component here

import React from 'react';

export default class App extends React.Component {

    state = {
        peopleInSpace: []
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

    render() {
        return (
            <React.Fragment>
                <ul>
                    {this.state.peopleInSpace.map(person => <li>{person.name}</li>)}
                </ul>
            </React.Fragment>
        )
    }
}