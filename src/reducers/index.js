const initialState = {
    user: {},
    isLoggedIn: false,
    userType: 'customer',
    counter: 1,
}


export function mainReducer (state = initialState, action) {

    switch (action.type) {
        case "SET_COUNTER":
            
            return { ...initialState, counter: state.counter+1 };
    
        default:
            return { ...initialState };
    }

}