import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRestaurant } from '../actions';
import { AddFood } from './AddFood';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.isRestaurant = this.props.main.userType === "restaurant"
    }

    componentDidMount = async () => {
        this.props.dispatch(fetchRestaurant())
    }

    render() {
        return (
            <>
                <div>  Hi {this.props.main.user.username} </div>
                {!this.isRestaurant && <ul>
                    { this.props.main.restaurants.map(res => <li> {res.name}  </li> )  }
                </ul>}
                {
                    this.isRestaurant && <AddFood/>
                }
            </>

        );
    }
}

const mapStateToProps = (state) => {
    return { main: state }
}
export default  connect(mapStateToProps)(Profile);