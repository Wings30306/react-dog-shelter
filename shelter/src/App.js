import { Component } from 'react';
import './App.css';
import whiskey from "./images/whiskey.jpg"
import hazel from "./images/hazel.jpg"
import tubby from "./images/tubby.jpg"
import Nav from './Nav';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }
  render(){
    return (
      <div className="App">
        <Nav dogs={this.props.dogs} />
        <Switch>
          <Route exact path="/" render={() => <h1>Shelter home page</h1>} />
          { this.props.dogs.map(dog => <Route exact path={`/${dog.name.toLowerCase()}`} render={() => <h1>{dog.name}</h1>} />)}
        </Switch>
        
      </div>
    );
  }
  
}

export default App;
