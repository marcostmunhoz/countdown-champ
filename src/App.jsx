import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: '25 de dezembro de 2018',
      newDeadline: ''
    };
  }

  changeDeadline() {
    this.setState({ deadline: this.state.newDeadline });
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Contagem regressiva para {this.state.deadline}</div>
        <Clock deadline={this.state.deadline}/>
        <Form inline>
          <FormControl className="Deadline-input"
          placeholder="nova data" 
          onChange={event => this.setState({ newDeadline: event.target.value })}/>
          <Button onClick={() => this.changeDeadline()}>Alterar</Button>
        </Form>
      </div>
    );
  }
}

export default App;