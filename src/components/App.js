import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCounter } from '../actions';
import Profile from './Profile';
import UserForm from './UserForm';
import {io} from 'socket.io-client'

const socket = io('http://localhost:8000')

class App extends Component {

  componentDidMount = () => {
    socket.on('hello', (msg) => {
      console.log(msg)
    })
    socket.emit('hello-server', 'client connected!')
  }
  

  render() {

    const {user, isLoggedIn, userType} = this.props.main

    console.log("this props", this.props.main)
    return (
      <div>
        <h1>Food Ordering App 🧇</h1>
        {isLoggedIn ? <Profile /> : <div><UserForm type="signin" />
        <UserForm type="signup" /> </div>}

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { main: state }
}

export default  connect(mapStateToProps)(App);