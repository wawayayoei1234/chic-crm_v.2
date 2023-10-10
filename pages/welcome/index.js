import { Box, Button, Divider } from '@mui/material'
import Image from 'next/image';
import React, { useState } from 'react'
import Logochic from '../../data/images/img_v2_54c80a1a-4593-400d-bf42-ab1f26031f1h 2.png'


function Index() {
  const [otp, setOtp] = useState('');
  return (
    <Box>
      <Box sx={{background:"linear-gradient(110deg, #84BAA1, #FFFBE2 100%)",height:"100vh",width:'100%'}}>
        <Box  sx={{display:'flex',flexDirection:'column',width: '32%', height: '65%', background: 'white',
        borderRadius: 10,justifyContent:'center',alignItems:'center',position:'absolute',top:'50%',left:'50%',
        transform: 'translate(-50%, -50%)'}}> 
          <Box sx={{ color: '#171717', fontSize: 25, fontFamily: 'Avenir', fontWeight: '800', 
          wordWrap: 'break-word',}}>Welcome to ChicCRM</Box>
          <Box>
          <Box pt={5} ><Image alt="Iconview" src={Logochic} width={100} height={'auto'}></Image></Box>
          </Box>  
         <Divider sx={{ backgroundColor: 'black', height: 2 }}/>
        </Box>
      </Box>  
    </Box>
  )
}

export default Index;
