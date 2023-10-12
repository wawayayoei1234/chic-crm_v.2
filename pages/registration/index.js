import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

function index() {
  const [age, setAge] = React.useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    
  }, [selectedValue]);
  return (
    <Box sx={{background:"linear-gradient(110deg, #84BAA1, #FFFBE2 100%)",height:"100vh",width:'100%'}}>  
      <Box p={5} sx={{display:'flex',flexDirection:'column', background: 'white',width:'200',height:'auto',borderRadius: 10,
        position:'absolute',top:'50%',left:'50%',transform: 'translate(-50%, -50%)'
      }}> 
        <Box sx={{ color: '#171717', fontSize: 25, fontFamily: 'Avenir', fontWeight: '800', wordWrap: 'break-word'}}>User Registration</Box>
        <Box pb={3} sx={{color: '#7F8391', fontSize: 15, fontFamily: 'Avenir', fontWeight: '0', textAlign: 'left'}}>
          Please fill in the form. All fields marked with (*) shall be required.
        </Box>
        <Box style={{width: '100%', height: '100%', border: '1px #7F8391 solid'}}>  
        </Box>
        <Box>
        <div style={{color: '#171717', fontSize: 24, fontFamily: 'Avenir', fontWeight: '800', wordWrap: 'break-word'}}>Personal Details</div>
        </Box>
        <Grid container spacing={2} justifyContent="flex-end"> 
          <Grid item>
            <TextField id="Email1" label="First Name" placeholder="Enter Your First Name" size='small' style={{ width: '300px', height: '60px' }} focused color='primary' />
          </Grid>
          <Grid item>
            <TextField id="Email2" label="Last Name" placeholder="Enter Your Job Title" size='small' style={{ width: '300px', height: '60px' }} focused color='primary' />
          </Grid>
          <Grid item>
            <TextField id="Email3" label="Job Title" placeholder="Enter Your Job Title" size='small' style={{ width: '300px', height: '60px' }} focused color='primary' />
          </Grid>
          <Grid item>
            <TextField id="Email4" label="Mobile Number" placeholder="Enter Your Mobile Number" size='small' style={{ width: '300px', height: '60px' }} focused color='primary' />
          </Grid>
          <Grid item>
            <TextField id="Email5" label="Email" placeholder="example@thac.com" size='small' style={{ width: '300px', height: '60px' }} focused color='primary' />
          </Grid>
        </Grid>
        
        <Box style={{ width: '100%', height: '100%', border: '1px #7F8391 solid' }}></Box>
        <Box>
        <div style={{color: '#171717', fontSize: 24, fontFamily: 'Avenir', fontWeight: '800', wordWrap: 'break-word'}}>Company Details</div>
        </Box>
        <Grid container spacing={2} justifyContent="flex-end"> 
          <Grid item>
            <TextField id="Email1" label="Company Name" placeholder="Enter Company Name" size='small' style={{ width: '300px', height: '60px' }} focused color='primary' />
          </Grid>
          <Grid item>
            <TextField id="Email2" label="Branch" placeholder="Enter Company Branch" size='small' style={{ width: '300px', height: '60px' }} focused color='primary' />
          </Grid>
          <Grid item>
            <TextField id="Email3" label="Address" placeholder="Street, Apt" size='small' style={{ width: '300px', height: '60px' }} focused color='primary' />
          </Grid>
          <Grid item>
            <TextField id="Email4" label="Address 2" placeholder="Office, Room/Flat" size='small' style={{ width: '300px', height: '60px' }} focused color='primary' />
          </Grid>
          <Grid item>
          <FormControl fullWidth ><InputLabel id="demo-simple-select-label" >Country</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" color='primary'  sx={{width: '300px', height: '40px' }}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
          <FormControl fullWidth ><InputLabel id="demo-simple-select-label"  >State / Provice</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" color='primary'  sx={{width: '300px', height: '40px' }}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
          <FormControl fullWidth ><InputLabel id="demo-simple-select-label"  >District</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" color='primary'  sx={{width: '300px', height: '40px' }}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
          <FormControl fullWidth ><InputLabel id="demo-simple-select-label"  >Sub-District</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" color='primary'  sx={{width: '300px', height: '40px' }}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <TextField id="Email5" label="Postal / ZIP Code" placeholder="Enter Postal / Code" size='small' style={{ width: '300px', height: '60px' }} focused color='primary' />
          </Grid>
          <Grid item>
            <TextField id="Email5" label="Website" placeholder="www.thacthai.com" size='small' style={{ width: '300px', height: '60px' }} focused color='primary' />
          </Grid>
        </Grid>
        <Box sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
        <Button variant="contained"  sx={{color:'white', textTransform:'capitalize', width: '200px', height: 'auto'}}>Next</Button>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  )
}

export default index
