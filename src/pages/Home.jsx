import { Fragment, useEffect, useContext } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CoinsContext from '../context/CoinsContext';
import TrendingList from '../components/trending/TrendingList';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));


function Home() {
    const { coins, trending, dispatch, getCoinsAndTrending } = useContext(CoinsContext);

    useEffect(() => {
        const getCoinData = async () => {
            const coinData = await getCoinsAndTrending();
            dispatch({ type: 'GET_COINS_AND_TRENDING', payload: coinData});
        }

        getCoinData();
        console.log(coins);
        console.log(trending);
    }, [dispatch])

    return (
        <Fragment>
            <TrendingList trending={trending} />
        </Fragment>
        
    )
}

export default Home
