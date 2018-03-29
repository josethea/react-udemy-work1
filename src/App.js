import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state= {
    usernames: [
      { user: 'Kevin' }
    ]
  }

  userChangedHandler = (event) => {
    this.setState({
      usernames: [
        { user: event.target.value }
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: 'pink',
      font: 'inherit',
      padding: '10px'
    };

    return (
      <div className="App" style={style}>
        <UserInput
          changed={this.userChangedHandler}
          username={this.state.usernames[0].user}/>
        <UserOutput
          username={this.state.usernames[0].user}/>
      </div>
    );
  }
}

export default App;
