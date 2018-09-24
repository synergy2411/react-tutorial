// import React, { Component } from 'react';
// import Table from './table';
// import Form from './form';

// class App extends Component {
//     state = {
//         characters: [
//         //     { name: "Sumit", job: "Admin" },
//         // { name: "Pooja", job: "User" },
//         // { name: "Vachi", job: "Admin" }
//     ]
//     };

//     addCharacter = (character)=>{
//         this.setState({
//             characters : [...this.state.characters, character]
//         })
//     }
//     removeCharacter = (i)=>{
//         const {characters} = this.state;
//         this.setState({
//             characters : characters.filter((character, index)=>{
//                 return i !== index;
//             })
//         })
//     }

//     render() {
//         // const characters = [
//         //     { name: "Sumit", job: "Admin" },
//         //     { name: "Pooja", job: "User" },
//         //     { name: "Vachi", job: "Admin" }
//         // ]
//         return (
//             <div className="App">
//                 <Table characterData={this.state.characters} 
//                     removeCharacter = { this.removeCharacter }/>
//                 <Form addCharacter = { this.addCharacter } />
//             </div>
//         );
//     }
// }

// export default App;

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic}/>
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)
export default BasicExample