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
import attenden from '../../data/images/7125203 1.png'
import note  from '../../data/images/6306500 1.png'
import pust  from '../../data/images/Group.png'
import chat from '../../data/images/Chat Bubble.png'
import carenda  from '../../data/images/6307184 1.png'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import EditIcon from '@mui/icons-material/Edit';


export default function () {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Toolbar>
          <Box  component="div" sx={{ display:'flex',flexGrow: 1 }}>
          <Box><Image alt="Iconview" src={logocmpany} width={40} height={'auto'}></Image></Box>
          <Box><Image alt="Iconview" src={logofron} width={40} height={'auto'}></Image></Box>
          </Box>
          <Image alt="Iconview" src={chat} width={22} ></Image>
          <Button color="inherit"><AccountCircleIcon/></Button>
          <IconButton size="large"edge="start"color="inherit"aria-label="menu"sx={{ mr: 2 }}><MenuIcon /></IconButton>
        </Toolbar>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
          <Box sx={{ justifyContent:'space-between', display: 'flex', alignItems: 'baseline',flexDirection:'column'}}>
              <Box sx={{color: '#171717', fontSize: 18, fontFamily: 'Avenir', fontWeight: '350'}}>Oct, 9</Box>
              <Box sx={{color: '#171717', fontSize: 24, fontFamily: 'Avenir', fontWeight: '800', display: 'flex', alignItems: 'center'}}>Hi, Name</Box>
              <Box  sx={{color: '#171717', fontSize: 12, fontFamily: 'Avenir', fontWeight: '350'}}>Font-end</Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
          <Box sx={{ position: 'relative', width: 90, height: 90, background: '#D9D9D9', borderRadius: 9999 }}>
          <Box sx={{ position: 'absolute', top: 70, left: 70, width: 20, height: 20, background: '#307BF1', borderRadius: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <EditIcon fontSize='10' color='three'/>
          </Box>
          </Box>
          </Box>
        </Box>
        <Box sx={{display:'flex',justifyContent:'center',}}>
              <Box p={4}>
                  <Box p={3} sx={{width: 260, height: 250, background: '#9CD6B3', borderRadius:5}} >
                  <Box sx={{ color: '#171717', fontSize: 14, fontFamily: 'Avenir', fontWeight: '40', }}>Clock-in / Clock-out</Box>
                  <Box sx={{ color: '#171717', fontSize: 24, fontFamily: 'Avenir', fontWeight: '40', }}>Attendance</Box>
                  <Box pl={2}><Image alt="Iconview" src={attenden} width={238} height={'auto'}></Image></Box></Box>
              </Box >
              <Box p={4}>
                  <Box p={3} sx={{width: 260, height: 250,background: '#97BDFE', borderRadius: 5,}} >
                  <Box sx={{ color: '#171717', fontSize: 14, fontFamily: 'Avenir', fontWeight: '40', }}>Description</Box>
                  <Box sx={{ color: '#171717', fontSize: 24, fontFamily: 'Avenir', fontWeight: '40', }}>Notes</Box>
                  <Box sx={{display:'block', margin:'auto' }} >
                    <Image alt="Iconview" src={note} width={230} height={'auto'}></Image>
                    </Box>
                  </Box>
              </Box>
              <Box p={4} >
              <Box p={3} sx={{width: 260, height: 250, background: 'white', boxShadow: '0px 13px 68px rgba(0, 0, 0, 0.13)', borderRadius: 5,}}>
                <Box sx={{ color: '#171717', fontSize: 14, fontFamily: 'Avenir', fontWeight: '40' }}>Description</Box>
                <Box sx={{ color: '#171717', fontSize: 24, fontFamily: 'Avenir', fontWeight: '40' }}>Company</Box>
                <Box p={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Box>
                  <Image alt="Iconview" src={pust} width={100} height={'auto'} />
                </Box>
                </Box>
              </Box>
            </Box>  
        </Box>
        <Box sx={{display:'flex',justifyContent:'center',}}>
          <Box p={1}>
        <Box p={3} sx={{width: 430, height: 400,background: '#97BDFE', borderRadius: 5}} >
        <div style={{width: '100%', color: '#171717', fontSize: 14, fontFamily: 'Avenir', fontWeight: '400', wordWrap: 'break-word'}}>October 2023</div>
        <div style={{color: '#171717', fontSize: 24, fontFamily: 'Avenir', fontWeight: '350', wordWrap: 'break-word'}}>Calendar & Activity</div>
        <Box sx={{position: 'absolute', top:770 ,left: 427 ,  margin: 'auto'}} ><Image alt="Iconview" src={carenda} width={200} height={'auto'}  ></Image></Box> 
          </Box>
          </Box>
          <Box p={1}>
          <Box p={3} sx={{width: 510, height: 400, background: 'white', boxShadow: '0px 13px 68px rgba(0, 0, 0, 0.13)', borderRadius: 5}}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar  />
          </LocalizationProvider>
          </Box>
          </Box>
        </Box>
    </Box>
  );
}