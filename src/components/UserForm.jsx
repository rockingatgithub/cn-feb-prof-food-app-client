import React, { Component } from 'react';

class UserForm extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            username: '',
            password: '',
            userType: ''
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
        const { username, password } =  this.state
        const user = {
            username: username,
            password: password
        }

        let res = await fetch('http://localhost:8000/cust/signup', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        let parsedRes = await res.json()
        console.log("The user", parsedRes)
    }

    userTypeHandler = (event) => {

        this.setState({
            userType: event.target.value
        })

    }
    

    render() {

        const { username, password } =  this.state

        return (
            <div>
                <h3> Customer Login/Singup </h3>
                <form onSubmit={this.submitHandler}>
                    Username:- <input type="text" value={username} onChange={this.usernameHandler}  />
                    Password:- <input type="password" value={password} onChange={this.passwordHandler} />
                    Customer <input type="radio" name="type" value="Customer" onChange={this.userTypeHandler} />
                    Restaurant<input type="radio" name="type" value="Restaurant" onChange={this.userTypeHandler} />

                    <button type='submit' > Submit </button>
                </form>

            </div>
        );
    }
}

export default UserForm;