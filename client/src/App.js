import React from 'react';
import ableton_logo from './ableton_logo.png';


// Audio related components
import AudioPad from './components/AudioPad'
import UsernameForm from './components/UsernameForm';
import UserList from './components/UserList'


import './App.css';




class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

    // switch (this.state.isToggleOn) {
    //   case true: {
    //     break
    //   }
    //   default: {
    //   }
    // }
    
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'MIDI ON' : 'MIDI OFF'}
      </button>
    );
  }
}

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      simpleData: null
    };
  }

  componentDidMount() {
    
    fetch('/list')
      .then(response => response.json())
      .then(data => this.setState({ simpleData: data }));
  }

  render() {

    return (
    <div className="App">
      <header className="App-header">
        {/* <img src={ableton_logo} className="App-logo" alt="logo" /> */}
        <p>{this.state.simpleData}</p>

      </header>
    </div>
    )
  }
}

export default App;
