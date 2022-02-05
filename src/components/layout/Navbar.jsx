import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { FaDonate, FaUserCircle } from "react-icons/fa";

const pages = ['Exchanges'];
const settings = ['Profile', 'Account', 'Logout'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={{ mb: 5, backgroundColor: '#161e36' }} position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
            <Link to='/' style={{ textDecoration: 'none', color: '#0d96d6' }}>
                <span><FaDonate /> CRYPTO TRACKER</span>
            </Link>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                >
                <MenuIcon />
                </IconButton>
                <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
                >
                {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link to='/exchanges'>
                        <Typography textAlign="center">{page}</Typography>
                    </Link>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <Link to='/' style={{ textDecoration: 'none', color: '#0d96d6' }}>
                    <span><FaDonate /> CRYPTO TRACKER</span>
                </Link>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Link to='/exchanges' style={{ textDecoration: 'none' }}>
                    <Button
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: '#0d96d6', display: 'block' }}>
                        Exchange
                    </Button>
                </Link>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/*<Avatar  src="/broken-image.jpg" />*/}
                <FaUserCircle style={{ color: '#0d96d6' }} />
                </IconButton>
                </Tooltip>
                <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                <MenuItem>
                    <Link to='/profile' style={{ textDecoration: 'none', color: '#000' }}>
                        <Typography textAlign="center">Profile</Typography>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to='/account' style={{ textDecoration: 'none', color: '#000' }}>
                        <Typography textAlign="center">Account</Typography>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to='/' style={{ textDecoration: 'none', color: '#000' }}>
                        <Typography textAlign="center">Logout</Typography>
                    </Link>
                </MenuItem>
                </Menu>
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;