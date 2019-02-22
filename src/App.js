// create your App component here
import React from "react";

export default class App extends React.Component {

    state = {
        people: []
    };

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(resp => resp.json())
            .then(jso => {
                this.setState({
                    people: jso.people
                })
            })
    };

    render () {

        return (
            <div>
                
            </div>
        );
    };
};