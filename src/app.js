import React, { Component } from 'react';
import Table from './table';
import Form from './form';

class App extends Component {
    state = {
        characters: [
        //     { name: "Sumit", job: "Admin" },
        // { name: "Pooja", job: "User" },
        // { name: "Vachi", job: "Admin" }
    ]
    };

    addCharacter = (character)=>{
        this.setState({
            characters : [...this.state.characters, character]
        })
    }
    removeCharacter = (i)=>{
        const {characters} = this.state;
        this.setState({
            characters : characters.filter((character, index)=>{
                return i !== index;
            })
        })
    }

    render() {
        // const characters = [
        //     { name: "Sumit", job: "Admin" },
        //     { name: "Pooja", job: "User" },
        //     { name: "Vachi", job: "Admin" }
        // ]
        return (
            <div className="App">
                <Table characterData={this.state.characters} 
                    removeCharacter = { this.removeCharacter }/>
                <Form addCharacter = { this.addCharacter } />
            </div>
        );
    }
}

export default App;