import Cookies from "js-cookie"

export const setCounter = () => {
    return {type: 'SET_COUNTER'}
}


export const submitHandler = (userType, user, type, name) => {

    return async (dispatch, getState) => {

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
        dispatch(setUser(parsedRes.data, parsedRes.userType))
    }

}

export const setUser = (user, userType) => {

    return {
        data: {
            user: user,
            isLoggedIn: true,
            userType: userType,
        },
        type: "SET_USER"
    }

}

export const fetchRestaurant = () =>  {

    return async (dispatch, getState) => {
        const restaurants = await fetch('http://localhost:8000/rest/listRestaurant')
        const parsedResp = await restaurants.json()
        dispatch(setRestaurant(parsedResp.data))
    }

}

export const setRestaurant = (restaurants) => {
    return {
        type: "SET_RESTAURANT",
        data: { restaurants }
    }
}