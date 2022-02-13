import { createContext, useReducer } from "react";
import coinsReducer from './CoinsReducer';
import axios from 'axios';

const CoinsContext = createContext();

export const CoinsProvider = ({ children }) => {
    const initialState = {
        coins: [],
        trending: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(coinsReducer, initialState);

    const COINGECKO_URL = 'https://api.coingecko.com/api/v3';

    // INITIATE AXIOS
    const coinGecko = axios.create({
        baseURL: COINGECKO_URL,
        headers: {
            Accept: 'application/json'
        }
    })

    // GET TRENDING COINS
    const getCoinsAndTrending = async () => {
        const [coins, trending] = await Promise.all([
            coinGecko.get(`/coins/markets?vs_currency=GBP&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=24h`),
            coinGecko.get(`/search/trending`)
        ])

        return { coins: coins.data, trending: trending.data }
    }

    return <CoinsContext.Provider value={{
        ...state,
        dispatch,
        getCoinsAndTrending,
    }}>
        { children }
    </CoinsContext.Provider>
}

export default CoinsContext;