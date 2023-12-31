import * as React from 'react';;
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logocmpany from '../../../../data/images/ICON LOGO ChicMSP 13.9 2.png'
import logofron from '../../../../data/images/img_v2_fron.png'
import Image from 'next/image';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Toolbar>
          <Box  component="div" sx={{ display:'flex',flexGrow: 1 }}>
          <Box><Image alt="Iconview" src={logocmpany} width={40} height={'auto'}></Image></Box>
          <Box><Image alt="Iconview" src={logofron} width={40} height={'auto'}></Image></Box>
          </Box>
          <Button color="inherit"><AccountCircleIcon/></Button>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      
    </Box>
  );
}