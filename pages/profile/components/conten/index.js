import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import OtpInput from 'react-otp-input';

function IndexComponent() {
  const [otp, setOtp] = useState('');

  return (
    <Box sx={{width: '100%',height: '100%',position: 'relative'}}>
      <Typography variant="h6" sx={{left: 4,top: 20,position: 'absolute',color: '#171717',fontSize: 28,fontFamily: 'Avenir',
          fontWeight: '350',wordWrap: 'break-word'}}>Oct, 9
          </Typography>
      <Typography variant="h5" sx={{left: 2,top: 177,position: 'absolute',color: '#171717',fontSize: 32,fontFamily: 'Avenir',
          fontWeight: '350',wordWrap: 'break-word'}}>Front-end
          </Typography>
      <Typography variant="h1" sx={{left: 0,top: 83,position: 'absolute',color: '#171717',fontSize: 64,fontFamily: 'Avenir',
          fontWeight: '800',wordWrap: 'break-word'}}>Hi, Name
          </Typography>
      <Box sx={{width: 240,height: 240,left: 1096,top: 0,position: 'absolute'}}>
          <Box sx={{width: 240,height: 240,left: 0,top: 0,position: 'absolute',bgcolor: '#D9D9D9',borderRadius: '50%'}} />
          <Box sx={{width: 55,height: 55,left: 172,top: 185,position: 'absolute'}}>
              <Box sx={{width: 55,height: 55,left: 0,top: 0,position: 'absolute',bgcolor: '#307BF1',borderRadius: '50%'}} />
              <Box sx={{width: 26,height: 26,left: 14,top: 15,position: 'absolute',bgcolor: 'white',borderRadius: '50%'}} />
          </Box>
      </Box>
  </Box>
  );
}

export default IndexComponent;
