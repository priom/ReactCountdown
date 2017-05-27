import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import { Form, FormControl, Button } from 'react-bootstrap';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 31, 2017',
      newDeadline: ''
    }
  }
  changeDeadline() {
    this.setState({ deadline: this.state.newDeadline });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>CountDown to {this.state.deadline}</h2>
        </div>
        <Clock deadline={this.state.deadline} />
        <Form inline>
          <FormControl placeholder="February 29, 2099..." onChange={event => this.setState({newDeadline: event.target.value})}/>
          <Button onClick={() => this.changeDeadline()}>Submit</Button>
        </Form>
      </div>
    );
  }
}
