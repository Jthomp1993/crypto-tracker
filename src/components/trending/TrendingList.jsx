import { Fragment } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import TrendingItem from './TrendingItem';


const Item = styled(Paper)(({ theme }) => ({
    
    padding: theme.spacing(1),
    backgroundColor: '#031730',
    display: 'inline-block',
    boxShadow: 'none'
    
  }));

function trendingList({ trending }) {
    return (
        <Fragment>
            <Container maxWidth="lg">
                <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem' }}>Trending</h2>
                <Grid style={{ backgroundColor: '#031730', borderRadius: '5px', paddingLeft: '10px', paddingRight: '10px'}} container direction='row' justifyContent='space-between' alignItems='center'>
                <Grid item xs={4}>
                    <Item>
                        
                    </Item>
                    <Item>
                        <h3 style={{ color: '#c7c7c7'}}>Instrument</h3>
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                    <h3 style={{ color: '#c7c7c7'}}>Market Cap Rank</h3>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item style={{ float: 'right'}}>
                        <h3 style={{ color: '#c7c7c7'}}>Price To BTC</h3>
                    </Item>
                </Grid>
                </Grid>
                {trending.map((trend) => (
                    <TrendingItem key={trend.item.id} trend={trend} />
                ))}
            </Container>
        </Fragment>
    )
}

export default trendingList
