import { Box, Button, Divider, TextField } from '@mui/material'
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import React, { useState } from 'react'
import logocmpany from '../../data/images/img_v2_54c80a1a-4593-400d-bf42-ab1f26031f1h 2.png'
import jook from '../../data/images/jookking.png'
import gg from '../../data/images/logogoogle.png'
import fb from '../../data/images/logofacebook.png'
import az from '../../data/images/logoAzure.png'
import OtpInput from 'react-otp-input';

const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) ~ :not(style)': {
      marginTop: theme.spacing(2),
    },
  }));

function Index() {
  return (
      <Box sx={{background:"linear-gradient( #84BAA1, #FFFBE2 )",height:"100vh",width:'100%'}}>
        <Box p={10} sx={{display:'flex',flexDirection:'column', background: 'white',
        borderRadius: 10,justifyContent:'center',alignItems:'center',position:'absolute',top:'50%',left:'50%',
        transform: 'translate(-50%, -50%)'}}> 
        <Box sx={{ textAlign: 'center' }}>
        <span style={{ color: 'black', fontSize: 30, fontFamily: 'Avenir', fontWeight: 500, wordWrap: 'break-word' }}>Welcome to </span>
        
        <span style={{ color: '#52752F', fontSize: 30, fontFamily: 'Avenir', fontWeight: 1000, wordWrap: 'break-word' }}>ChicCRM</span>
    </Box>
          <Box pt={3} ><Image alt="Iconview" src={logocmpany} width={100} height={'auto'}></Image></Box>
          <Box  ><Image alt="Iconview" src={jook} width={300} height={'auto'}></Image></Box>
          <Box sx={{display:'flex'}}>
          <Box sx={{ width: 50, height: 30, background: 'white', border: '1px #48846B solid', display: 'flex', alignItems: 'center',margin: '0 15px' }} >
            <Image  alt="Iconview" src={gg} width={15} height={'auto'} style={{ margin: 'auto' }}/>
            </Box>
          <Box sx={{width: 50, height: 30, background: 'white',  border: '1px #48846B solid', display: 'flex', alignItems: 'center',margin: '0 15px' }} >
            <Image alt="Iconview" src={fb} width={15} height={'auto'} style={{ margin: 'auto' }}/>
            </Box>
          <Box sx={{width: 50, height: 30, background: 'white',  border: '1px #48846B solid', display: 'flex', alignItems: 'center',margin: '0 15px' }} >
            <Image alt="Iconview" src={az} width={15} height={'auto'} style={{ margin: 'auto' }}/>
            </Box>
        </Box>
      </Box> 
      </Box> 
  )
}

export default Index;
