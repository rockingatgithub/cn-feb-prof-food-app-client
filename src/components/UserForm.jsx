import React, { Component } from 'react';
import Cookies from 'js-cookie';
import Profile from './Profile';

class UserForm extends Component {

    constructor(props) {
        super(props);

        console.log(props )
        
        this.state = {
            username: '',
            password: '',
            userType: '',
            name: '',
        }
    }


    usernameHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    passwordHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    submitHandler = async (event) => {

        event.preventDefault()
        const { username, password, name, userType } =  this.state
        const { type } =  this.props
        const user = {
            username: username,
            password: password
        }

        let userText = userType === 'Customer' ? 'cust' : 'rest'

        if(userText === 'rest'){
            user.name = name
        }

        let res = await fetch(`http://localhost:8000/${userText}/${type}`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        let parsedRes = await res.json()
        console.log("The user", parsedRes)
        Cookies.set('user', parsedRes.token)
        this.props.loginHandler(parsedRes.data, parsedRes.userType)
    }

    userTypeHandler = (event) => {

        this.setState({
            userType: event.target.value
        })

    }

    nameHandler = (event) => {

        this.setState({
            name: event.target.value
        })

    }
    

    render() {

        const { username, password, userType, name } =  this.state

        return (
            <div>
                 <div> <h3> Customer {this.props.type} </h3>
                <form onSubmit={this.submitHandler}>
                    Username:- <input type="text" value={username} onChange={this.usernameHandler}  />
                    Password:- <input type="password" value={password} onChange={this.passwordHandler} />
                    Customer <input type="radio" name="type" value="Customer" onChange={this.userTypeHandler} />
                    Restaurant<input type="radio" name="type" value="Restaurant" onChange={this.userTypeHandler} />
                    {userType === 'Restaurant' ? <>Name:- <input type="text" value={name} onChange={this.nameHandler} /></>  : null }

                    <button type='submit' > Submit </button>
                </form> </div>

            </div>
        );
    }
}

export default UserForm;