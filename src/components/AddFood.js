 
import Cookies from "js-cookie";
import { Component } from "react";


export class AddFood extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            price: 0,
            rating: 5
        }
        
    }

    setName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    setPrice = (event) => {
        this.setState({
            price: event.target.value
        })
    }

    setRating = (event) => {
        this.setState({
            rating: event.target.value
        })
    }

    submitHandler = async (event) => {

        event.preventDefault()

        const {name, price, rating} = this.state

        const food = {
            name: name,
            price: price,
            rating: rating
        }

        let res = await fetch(`http://localhost:8000/food/addFood`, {
            method: 'POST',
            body: JSON.stringify(food),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + " " + Cookies.get('user')
            }
        })

        let parsedRes = await res.json()
        console.log("The user", parsedRes)

    }



    render () {

        return <div>
            <form>

                <input name="name" value={this.state.name} onChange={this.setName}  />
                <input name="price" value={this.state.price} onChange={this.setPrice} />
                <input name="rating" value={this.state.rating} onChange={this.setRating} />
                <button onClick={this.submitHandler} > Submit </button>

            </form>
        </div>

    }
    

}