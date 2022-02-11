import { useContext, Fragment } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CoinsContext from '../../context/CoinsContext';

const Item = styled(Paper)(({ theme }) => ({
    
    padding: theme.spacing(1),
    backgroundColor: '#123764',
    display: 'inline-block',
    boxShadow: 'none',
    
  }));

function TrendingItem({ trend }) {

    const {
        id,
        large,
        thumb,
        small,
        market_cap_rank,
        name,
        price_btc,
        symbol
    } = trend.item;

    const btc = price_btc;
    const BTC = btc.toString();

    return (
        <Fragment>
            <Grid style={{ backgroundColor: '#123764', marginBottom: '1rem', borderRadius: '5px', paddingLeft: '10px', paddingRight: '10px'}} container direction='row' justifyContent='space-between' alignItems='center'>
                <Grid item xs={4}>
                    <Item>
                        <img style={{ height: '100%'}} src={thumb} alt="" />
                    </Item>
                    <Item>
                        <h3 style={{ color: '#fff', fontSize: '1rem', marginTop: '0px', marginBottom: '7px'}}>{name}</h3>
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                    <h4 style={{ color: '#fff', fontSize: '1rem', marginTop: '0px', marginBottom: '0px'}}>{market_cap_rank}</h4>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item style={{ float: 'right'}}>
                    <h4 style={{ color: '#fff', fontSize: '1rem', marginTop: '0px', marginBottom: '0px'}}>{BTC.substring(0, 10)}{' '}BTC</h4>
                    </Item>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default TrendingItem
