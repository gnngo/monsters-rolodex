import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Giang'
        },
        {
        name: 'Hollie'
        },
        {
        name: 'Kyle'
        },
        {
          name: 'Jona'
          },
      ]
    };
  }
  
  render() {
    return (
      <div className="App">
      { 
        this.state.monsters.map((monster) => {
          return <h1> {monster.name} </h1>;
        })
      }
    </div>
    );
  } //end render

} //end class

export default App;
