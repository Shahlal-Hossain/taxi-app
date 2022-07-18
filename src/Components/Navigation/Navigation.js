import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import styled from 'styled-components';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './bald-logo.webp'
// import { Link } from '@mui/material';
import { Link } from 'react-router-dom';



const Navigation = () => {
    const [openMenu, setOpenMenu] =useState(false)
    return (
        <div>
            <Box sx={{ flexGrow: 1 , width: '100vw' }}>
                <AppBar position="static">
                    <Toolbar sx={{backgroundColor:'white',display:'flex',justifyContent:'space-between'}}>
                        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <Link  to="/" >
                                    <img style={{width: '130px'}} src={logo} alt="" />
                            </Link>
                        </IconButton>

                        <IconButton>
                            <MenuIcon onClick={() => setOpenMenu(true)} color='primary'/>  
                        </IconButton>
                        <Submenu showMenu={openMenu}>
                <CancelOutlinedIcon   onClick={() => setOpenMenu(false)} >  </CancelOutlinedIcon>
                <li><Link to="/login"> Log-in</Link></li>
                <li><Link to="/">Log-Out</Link></li>
            </Submenu>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Navigation;

const Submenu =styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: #dee3e7;
    width: 150px;
    height: 150px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: start;
    li{
        padding: 12px 0;
        a{
            text-decoration: none;
            font-weight: 600;
            font-size: 15px;
            flex-wrap: nowrap;
            text-transform: uppercase;
            color: #330000;
            
        };
        a:hover{
            background: rgba(222, 194, 157,0.2);
            border-radius: 20px;
            height: 50px;
            width: 250px;
            margin: 3px;
            padding: 8px 25px;
            
        };
    };
    transform:${props => props.showMenu ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.4s ease-in;

`