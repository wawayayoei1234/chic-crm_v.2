import * as React from 'react';;
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logocmpany from '../../data/images/ICON LOGO ChicMSP 13.9 2.png'
import logofron from '../../data/images/img_v2_fron.png'
import Image from 'next/image';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import { Grid } from '@mui/material';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Toolbar>
          <Box  component="div" sx={{ display:'flex',flexGrow: 1 }}>
          <Box><Image alt="Iconview" src={logocmpany} width={40} height={'auto'}></Image></Box>
          <Box><Image alt="Iconview" src={logofron} width={40} height={'auto'}></Image></Box>
          </Box>
          <Button color="inherit"><AccountCircleIcon/></Button>
          <IconButton size="large"edge="start"color="inherit"aria-label="menu"sx={{ mr: 2 }}><MenuIcon /></IconButton>
        </Toolbar>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Grid >
            <Box sx={{  color: '#171717', fontSize: 28, fontFamily: 'Avenir', fontWeight: '350'}}>Oct, 9</Box>
            <Box sx={{  color: '#171717', fontSize: 64, fontFamily: 'Avenir', fontWeight: '800', display: 'flex', alignItems: 'center' }}>Hi, Name</Box>
            <Box sx={{  color: '#171717', fontSize: 32, fontFamily: 'Avenir', fontWeight: '350'}}>Font-end</Box>
            <EditIcon  sx={{width: 26, height: 26,color:'white' }}></EditIcon>
    </Grid>
        </Box>
    </Box>
  );
}