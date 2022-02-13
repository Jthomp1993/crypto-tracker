import { Fragment, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function MarketItem({ coin }) {
    const [isShown, setIsShown] = useState(false);

    const Item = styled(Paper)(({ theme }) => ({
    
        padding: theme.spacing(1),
        backgroundColor: !isShown ? '#0d2849' : '#133b6b',
        display: 'inline-block',
        boxShadow: 'none',
        
    }));

    const {
        id,
        symbol,
        name,
        image,
        current_price,
        high_24h,
        low_24h,
        total_volume,
        price_change_percentage_24h_in_currency

    } = coin;

    const handleMouseEnter = () => {
        setIsShown(true);
    }

    const handleMouseLeave = () => {
        setIsShown(false);
    }

    let x = total_volume;
    let formattedVolume = x.toLocaleString("en-US");

    let n = price_change_percentage_24h_in_currency;
    let priceChange = n.toString();


    return (
        <Fragment>
            {/* MARKET ITEMS FOR LARGE AND XL SCREEN SIZES */}
            <Box sx={{ display: { xs: 'none', lg: 'block', xl: 'block' }}}>
            <Grid onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ backgroundColor: !isShown ? '#0d2849' : '#133b6b', marginBottom: '10px', borderRadius: '5px', paddingLeft: '10px', paddingRight: '10px'}} container direction='row' justifyContent='space-between' alignItems='center'>
                <Grid item xs={2}>
                    <Item>
                        <img style={{ width: '1.5rem'}} src={image} alt="" />
                    </Item>
                    <Item>
                        <h3 style={{ color: '#fff', fontSize: '1rem', fontWeight: '300', marginTop: '0px', marginBottom: '7px'}}>{name.length > 10 ? symbol : name}</h3>
                    </Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>
                    <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: '300', marginTop: '0px', marginBottom: '0px'}}>{current_price}</h4>
                    </Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>
                    <h4 style={{ color: price_change_percentage_24h_in_currency > 0 ? '#13cf81' : '#e03333',  fontSize: '1rem', fontWeight: '500', marginTop: '0px', marginBottom: '0px'}}>
                        {price_change_percentage_24h_in_currency > 0 ? "+" + priceChange.substring(0,4) : priceChange.substring(0,5)}
                    </h4>
                    </Item>
                </Grid>
                <Grid item xs={2}>
                    <Item style={{ float: 'right'}}>
                    <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: '300', marginTop: '0px', marginBottom: '0px'}}>{low_24h}</h4>
                    </Item>
                </Grid>
                <Grid item xs={2}>
                    <Item style={{ float: 'right'}}>
                    <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: '300', marginTop: '0px', marginBottom: '0px'}}>{high_24h}</h4>
                    </Item>
                </Grid>
                <Grid item xs={2}>
                    <Item style={{ float: 'right'}}>
                    <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: '300', marginTop: '0px', marginBottom: '0px'}}>${formattedVolume}</h4>
                    </Item>
                </Grid>
            </Grid>
            </Box>

            {/* MARKET ITEMS FOR XS SM AND MD SCREEN SIZES */}
            <Box sx={{ display: { xs: 'block', sm: 'block', md: 'block', lg: 'none', xl: 'none' }}}>
            <Grid onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ backgroundColor: !isShown ? '#0d2849' : '#133b6b', marginBottom: '10px', borderRadius: '5px', paddingLeft: '10px', paddingRight: '10px'}} container direction='row' justifyContent='space-between' alignItems='center'>
                <Grid item xs={6}>
                    <Item>
                        <img style={{ width: '1.5rem'}} src={image} alt="" />
                    </Item>
                    <Item>
                        <h3 style={{ color: '#fff', fontSize: '1rem', fontWeight: '300', marginTop: '0px', marginBottom: '7px'}}>{name.length > 10 ? symbol : name}</h3>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                    <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: '300', marginTop: '0px', marginBottom: '0px'}}>{current_price}</h4>
                    </Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>
                    
                    <Button sx={{ boxShadow: 'none', height: '1.5rem', width: '3rem', backgroundColor: price_change_percentage_24h_in_currency > 0 ? '#13cf81' : '#e03333'}} variant="contained">{price_change_percentage_24h_in_currency > 0 ? "+" + priceChange.substring(0,4) : priceChange.substring(0,5)}</Button>
                    
                    </Item>
                </Grid>
            </Grid>
            </Box>
        </Fragment>
    )
}

export default MarketItem
