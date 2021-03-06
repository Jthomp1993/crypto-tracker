import { Fragment, useEffect, useContext } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CoinsContext from '../context/CoinsContext';
import MarketList from '../components/market/MarketList';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));


function Home() {
    const { coins, dispatch, getCoinsAndTrending } = useContext(CoinsContext);

    useEffect(() => {
        const getCoinData = async () => {
            const coinData = await getCoinsAndTrending();
            dispatch({ type: 'GET_COINS_AND_TRENDING', payload: coinData});
        }

        getCoinData();
    }, [dispatch])

    return (
        <Fragment>
            <MarketList coins={coins} />
        </Fragment>
        
    )
}

export default Home
