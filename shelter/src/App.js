import { Component } from 'react';
import './App.css';
import whiskey from "./images/whiskey.jpg"
import hazel from "./images/hazel.jpg"
import tubby from "./images/tubby.jpg"
import Nav from './Nav';
import { Route, Switch } from 'react-router-dom';
import Dog from './Dog';
import DogList from './DogList';

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
          <Route exact path="/" render={() => <DogList dogs={this.props.dogs} />} />
          { this.props.dogs.map(dog => <Route key={dog.name} exact path={`/${dog.name.toLowerCase()}`} render={() => <Dog dog={dog} />} />)}
        </Switch>
        
      </div>
    );
  }
  
}

export default App;
