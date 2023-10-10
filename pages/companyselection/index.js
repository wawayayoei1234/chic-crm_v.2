import { Box, Button, TextField, Typography } from '@mui/material'
import Image from 'next/image';
import React, { useState } from 'react'
import logocmpany from '../../data/images/image 8.png'

function Index() {
  const [otp, setOtp] = useState('');
  return (
  
      <Box sx={{background:"linear-gradient( #84BAA1, #FFFBE2 )",height:"100vh",width:'100%'}}>
        <Box p={10} sx={{display:'flex',flexDirection:'column', background: 'white',
        borderRadius: 10,justifyContent:'center',alignItems:'center',position:'absolute',top:'50%',left:'50%',
        transform: 'translate(-50%, -50%)'}}> 
          <Box sx={{ color: '#171717', fontSize: 25, fontFamily: 'Avenir', fontWeight: '800', 
          wordWrap: 'break-word',}}>Company Selection</Box>
          <Box pb={3} sx={{color: '#7F8391', fontSize: 15, fontFamily: 'Avenir', fontWeight: '0', 
          textAlign: 'left'}}>Please Take A Look At The Companies Listed Below<br/>And Tell Us Whether You Are Working At Any Of Them</Box>
          <Box sx={{ width: 250, height: 90,position: 'absolute', background: 'white', borderRadius: 3, border: '1px #48846B solid' }}>
          <Box  sx={{ color: '#171717', fontFamily: 'Avenir', fontWeight: '900', wordWrap: 'break-word' }}>Yes!</Box>
          <Box  sx={{ color: '#171717', fontFamily: 'Avenir', fontWeight: '350', wordWrap: 'break-word' }}>
          I'm working at one of these companies.<br />Please state which company you work for.
        </Box>
          <Button  variant='contained'  style={{ fontSize: '12px', padding: '6px 12px',backgroundColor:'#DAEBE3',
          width: '300px', height: 'auto',textTransform:'capitalize', fontFamily: 'Avenir',color:'#fff' }}>Next</Button>
        </Box>
        </Box>
      </Box>  
  )
}

export default Index;
