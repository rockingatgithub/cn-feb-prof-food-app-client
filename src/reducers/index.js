const initialState = {
    user: {},
    isLoggedIn: false,
    userType: 'customer',
    counter: 1,
    restaurants: []
}


export function mainReducer (state = initialState, action) {

    switch (action.type) {
        case "SET_COUNTER":
            
            return { ...state, counter: state.counter+1 };

            case "SET_USER":
                return { ...state, ...action.data };

            case "SET_RESTAURANT":
                return { ...state, ...action.data };
    
        default:
            return { ...initialState };
    }

}