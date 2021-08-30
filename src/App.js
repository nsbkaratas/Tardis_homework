import './App.css';

import React, { Component } from 'react';
import DivOne from './Components/DivOne';

class App extends Component {
  state={
    tardis : {
      name: 'Time and Relative Dimension in Space',
      caps: false,
    }
  }
  changeIt = () =>{
    if (this.state.tardis.caps) {
      this.setState({
        tardis: {
          name: this.state.tardis.name.toLowerCase(),
          caps: false
        }
      })
    } else {
      this.setState({
        tardis: {
          name: this.state.tardis.name.toUpperCase(),
          caps: true
        }
      })
    }
  }
  render() {
    return (
      <div id="container">
        {/* <h3 onClick={this.changeIt}>{this.state.tardis.name}</h3>         */}
        <div onClick={this.changeIt}>
          <DivOne newName={this.state.tardis}/>
        </div>
      </div>
    );
  }
}

export default App;
