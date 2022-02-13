import { Fragment, useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';




function TrendingItem({ trend }) {
    const [isShown, setIsShown] = useState(false);

    const Item = styled(Paper)(({ theme }) => ({
    
    padding: theme.spacing(1),
    backgroundColor: !isShown ? '#10325c' : '#184781',
    display: 'inline-block',
    boxShadow: 'none',
    
  }));

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

    const handleMouseEnter = () => {
        setIsShown(true);
    }

    const handleMouseLeave = () => {
        setIsShown(false);
    }

    return (
        <Fragment>
            <Grid onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ backgroundColor: !isShown ? '#10325c' : '#184781', marginBottom: '10px', borderRadius: '5px', paddingLeft: '10px', paddingRight: '10px'}} container direction='row' justifyContent='space-between' alignItems='center'>
                <Grid item xs={4}>
                    <Item>
                        <img style={{ height: '100%'}} src={thumb} alt="" />
                    </Item>
                    <Item>
                        <h3 style={{ color: '#fff', fontSize: '1rem', fontWeight: '300', marginTop: '0px', marginBottom: '7px'}}>{name}</h3>
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                    <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: '300', marginTop: '0px', marginBottom: '0px'}}>{market_cap_rank}</h4>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item style={{ float: 'right'}}>
                    <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: '300', marginTop: '0px', marginBottom: '0px'}}>{BTC.substring(0, 10)}{' '}BTC</h4>
                    </Item>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default TrendingItem
