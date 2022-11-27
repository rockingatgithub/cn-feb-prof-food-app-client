import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCounter } from '../actions';
import Profile from './Profile';
import UserForm from './UserForm';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      user: {},
      isLoggedIn: false,
      userType: 'customer',
    }

    console.log("the store ", this.props.main)
  }


  loginHandler = (user, userType) => {

    this.setState({
      user: user,
      isLoggedIn: true,
      userType: userType,
    })

  }

  setCounterHandler = () => {

    this.props.dispatch(setCounter())
  }
  

  render() {

    const {user, isLoggedIn, userType} = this.state

    return (
      <div>
        <h1>Food Ordering App 🧇</h1>
        {isLoggedIn ? <Profile user={user} userType={userType} /> : <div><UserForm type="signin" loginHandler={this.loginHandler} />
        <UserForm type="signup" loginHandler={this.loginHandler} /> </div>}

        <div> Counter:- {this.props.main.counter} </div>
        <button onClick={this.setCounterHandler}  > setCounter </button>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { main: state }
}

export default  connect(mapStateToProps)(App);