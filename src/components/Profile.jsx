import React, { Component } from 'react';
import { AddFood } from './AddFood';

class Profile extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            restaurantList: []
        }

        console.log(this.props)
        this.isRestaurant = this.props.userType === "restaurant"

    }



    componentDidMount = async () => {

        const restaurants = await fetch('http://localhost:8000/rest/listRestaurant')
        const parsedResp = await restaurants.json()
        this.setState({
            restaurantList: parsedResp.data
        })

    }

    render() {
        return (
            <>
                <div>  Hi {this.props.user.username} </div>
                {!this.isRestaurant && <ul>
                    { this.state.restaurantList.map(res => <li> {res.name}  </li> )  }
                </ul>}
                {
                    this.isRestaurant && <AddFood/>
                }
            </>

        );
    }
}

export default Profile;