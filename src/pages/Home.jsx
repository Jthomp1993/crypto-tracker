import { useEffect, useContext } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CoinsContext from '../context/CoinsContext';

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
        console.log(trending);
    }, [dispatch])

    const {
        id,
        large,
        market_cap_rank,
        name,
        price_btc,
        symbol
    } = trending;

    return (
        <Container style={{ backgroundColor: '#073369', height: '4rem', borderRadius: '2px' }} maxWidth="md">
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Item>Hello</Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>Hello</Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>Hello</Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>Hello</Item>
                </Grid>
            </Grid>

        </Container>
        
    )
}

export default Home
