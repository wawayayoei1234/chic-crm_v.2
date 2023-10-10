import { Box, Button, TextField, Typography } from '@mui/material'
import Image from 'next/image';
import React, { useState } from 'react'

function Index() {
  const [otp, setOtp] = useState('');
  return (
      <Box sx={{background:"linear-gradient( #84BAA1, #FFFBE2 )",height:"100vh",width:'100%'}}>
        <Box p={3} sx={{display:'flex',flexDirection:'column', background: 'white',width:'80%',
        borderRadius: 10,justifyContent:'center',alignItems:'center',position:'absolute',top:'50%',left:'50%',
        transform: 'translate(-50%, -50%)'}}> 
          <Box sx={{ color: '#171717', fontSize: 20, fontFamily: 'Avenir', fontWeight: '800', 
          wordWrap: 'break-word'}}>Company Selection</Box>
          <Box pb={3} sx={{color: '#7F8391', fontSize: 13, fontFamily: 'Avenir', fontWeight: '0', 
          textAlign: 'left'}}>Please Take A Look At The Companies Listed Below<br/> And Tell Us Whether You Are Working At Any Of Them</Box>
          <Box sx={{display:'flex',flexDirection:'row'}}>
          <Box sx={{ width: "150%", height: 'auto', background: 'white', borderRadius: 1, border: '1px #48846B solid',p:2,mr:2 }}>
          <span  style={{ color: '#171717', fontFamily: 'Avenir', fontWeight: '800', wordWrap: 'break-word', }}>Yes! </span>
          <span  style={{ color: '#171717', fontFamily: 'Avenir', fontWeight: '350', wordWrap: 'break-word',fontSize:'12px' }}>
          I'm working at one of these companies Please state which company you work for.
        </span>
        </Box>
        <Box sx={{ width: "150%", height: 'auto', background: 'white', borderRadius: 1, border: '1px #48846B solid',p:2 }}>
          <span  style={{ color: '#171717', fontFamily: 'Avenir', fontWeight: '900', wordWrap: 'break-word'}}>No!</span>
          <span  style={{ color: '#171717', fontFamily: 'Avenir', fontWeight: '350', wordWrap: 'break-word',fontSize:'12px'  }}> 
          I'm not working at any companies listed.<br />On the next page, you'll need to fill in a new<br/>account registration form.</span>
        </Box>
        </Box>
        <Box p={5}>
          <Button   variant='contained'  sx={{fontSize: '12px', padding: '6px 12px',backgroundColor:'#DAEBE3',
          width: '300px', height: 'auto',textTransform:'capitalize', fontFamily: 'Avenir',color:'#fff' }}>Next</Button>       
        </Box>
        </Box>
      </Box>  
  )
}
export default Index;
