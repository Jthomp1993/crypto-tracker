const snackbarReducer = (state, action) => {
    switch(action.type) {
        case 'SET_SNACKBAR':
            return action.payload
        case 'REMOVE_SNACKBAR':
            return null
        default:
            return state
    
    }   
}

export default snackbarReducer;