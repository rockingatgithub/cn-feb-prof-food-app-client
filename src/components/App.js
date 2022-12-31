import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import UserForm from './UserForm';
import {io} from 'socket.io-client'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'

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

    // console.log("this props", this.props.main)
    return (
      <BrowserRouter>
      <div>
        <h1>Food Ordering App 🧇</h1>
        {isLoggedIn ? <Profile /> : <div><UserForm type="signin" />
        <UserForm type="signup" /> </div>}

        {/* <Routes>
          <Route path='/signup' element={<UserForm type="signup" />} />
          <Route path='/signin' element={<UserForm type="signin" />} />
          <Route path='/profile' element={<Profile />} />
        </Routes> */}

        {/* <Link to='/signup'> Signup </Link>
        <Link to='/signin'> Signin </Link>
        <Link to='/profile'> profile </Link> */}


      </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return { main: state }
}

export default  connect(mapStateToProps)(App);