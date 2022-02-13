import { Fragment } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import MarketItem from './MarketItem';

const Item = styled(Paper)(({ theme }) => ({
    
    padding: theme.spacing(1),
    backgroundColor: '#272727',
    display: 'inline-block',
    boxShadow: 'none',
  }));

function MarketList({ coins }) {
    return (
        <Fragment>
            <Container maxWidth="lg">
                <h2 style={{ fontSize: '2.5rem', color: '#fff' }}>Markets</h2>
                
                {/* LIST HEADER FOR LG & XL SCREEN SIZES */}
                <Box sx={{ display: { xs: 'none', lg: 'block', xl: 'block' } }}>
                <Grid style={{ backgroundColor: '#272727', marginBottom: '10px', borderRadius: '5px', paddingLeft: '10px', paddingRight: '10px'}} container direction='row' justifyContent='space-between' alignItems='center'>
                <Grid item xs={2}>
                    <Item>
                        
                    </Item>
                    <Item>
                        <h3 style={{ color: '#fff', fontSize: '1rem', fontWeight: '400', marginTop: '0px', marginBottom: '7px'}}>Instrument</h3>
                    </Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>
                    <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: '400', marginTop: '0px', marginBottom: '0px'}}>Current Price</h4>
                    </Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>
                    <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: '400', marginTop: '0px', marginBottom: '0px'}}>24H Change</h4>
                    </Item>
                </Grid>
                <Grid item xs={2}>
                    <Item style={{ float: 'right'}}>
                    <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: '400', marginTop: '0px', marginBottom: '0px'}}>24H Low</h4>
                    </Item>
                </Grid>
                <Grid item xs={2}>
                    <Item style={{ float: 'right'}}>
                    <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: '400', marginTop: '0px', marginBottom: '0px'}}>24H High</h4>
                    </Item>
                </Grid>
                <Grid item xs={2}>
                    <Item style={{ float: 'right'}}>
                    <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: '400', marginTop: '0px', marginBottom: '0px'}}>Total Volume</h4>
                    </Item>
                </Grid>
            </Grid>
            </Box>

            {/* LIST HEADER FOR XS, SM & MD SCREEN SIZES */}
            <Box sx={{ display: { xs: 'block', sm: 'block', md: 'block', lg: 'none', xl: 'none' }}}>
                <Grid style={{ backgroundColor: '#272727', marginBottom: '10px', borderRadius: '5px', paddingLeft: '10px', paddingRight: '10px'}} container direction='row' justifyContent='space-between' alignItems='center'>
                <Grid item xs={6}>
                    <Item>
                        
                    </Item>
                    <Item>
                        <h3 style={{ color: '#fff', fontSize: '1rem', fontWeight: '400', marginTop: '0px', marginBottom: '7px'}}>Instrument</h3>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                    <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: '400', marginTop: '0px', marginBottom: '0px'}}>Current Price</h4>
                    </Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>
                    <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: '400', marginTop: '0px', marginBottom: '0px'}}>24H Change</h4>
                    </Item>
                </Grid>
            </Grid>
            </Box>

                {coins.map((coin) => (
                    <MarketItem key={coin.id} coin={coin} />
                ))}
            </Container>
        </Fragment>
    )
}

export default MarketList
