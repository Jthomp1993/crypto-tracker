const coinsReducer = (state, action) => {
    switch(action.type) {
        case 'GET_COINS_AND_TRENDING':
            return {
                ...state,
                coins: action.payload.coins,
                trending: action.payload.trending
            }
        default:
            return state
    
    }   
}

export default coinsReducer;