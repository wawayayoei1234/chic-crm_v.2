import { Box, Button, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function index() {
  const [age, setAge] = React.useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box  sx={{background:"linear-gradient( #84BAA1, #FFFBE2 )",width:'100%',height:"200vh",display: "flex",justifyContent: "center", alignItems: "center"}}>
      <Box> 
      <Box p={5} sx={{flexDirection:'column', background: 'white',width:'100vh',height:'auto',borderRadius: 10, }}> 
        <Box sx={{ color: '#171717', fontSize: 25, fontFamily: 'Avenir', fontWeight: '800', wordWrap: 'break-word'}}>User Registration</Box>
        <Box pb={3} sx={{color: '#7F8391', fontSize: 15, fontFamily: 'Avenir', fontWeight: '0', textAlign: 'left'}}>
          Please fill in the form. All fields marked with (*) shall be required.
        </Box>
        <Box style={{width: '100%', height: '100%', border: '1px #7F8391 solid'}}>  
        </Box>
        <Box>
        <div style={{color: '#171717', fontSize: 24, fontFamily: 'Avenir', fontWeight: '800', wordWrap: 'break-word'}}>Personal Details</div>
        </Box>
        <Grid container spacing={0.5} sx={{flexDirection:'column',}} > 
          <Grid item sx={{marginLeft:'auto'}}>
            <TextField id="Email1" label="First Name" placeholder="Enter Your First Name" size='small' style={{ width: '300px', height: '60px' }} focused color='primary' />
          </Grid>
          <Grid item sx={{marginLeft:'auto'}}>
            <TextField id="Email2" label="Last Name" placeholder="Enter Your Job Title" size='small' style={{ width: '300px', height: '60px' }} focused color='primary' />
          </Grid>
          <Grid item sx={{marginLeft:'auto'}}>
            <TextField id="Email3" label="Job Title" placeholder="Enter Your Job Title" size='small' style={{ width: '300px', height: '60px' }} focused color='primary' />
          </Grid>
          <Grid item sx={{marginLeft:'auto'}}>
            <TextField id="Email4" label="Mobile Number" placeholder="Enter Your Mobile Number" size='small' style={{ width: '300px', height: '60px' }} focused color='primary' />
          </Grid>
          <Grid item sx={{marginLeft:'auto'}}>
            <TextField id="Email5" label="Email" placeholder="example@thac.com" size='small' style={{ width: '300px', height: '60px' }} focused color='primary' />
          </Grid>
        </Grid>
     
        <Box style={{ width: '100%', height: '100%', border: '1px #7F8391 solid' }}></Box>
        <Box>
        <div style={{color: '#171717', fontSize: 24, fontFamily: 'Avenir', fontWeight: '800', wordWrap: 'break-word'}}>Company Details</div>
        </Box>
        <Grid container spacing={0.5} sx={{flexDirection:'column',justifyContent:"flex-end"}}> 
          <Grid item sx={{marginLeft:'auto'}}>
            <TextField id="Email1" label="Company Name" placeholder="Enter Company Name" size='small' style={{ width: '300px', height: '60px' }} focused color='primary' />
          </Grid>
          <Grid item sx={{marginLeft:'auto'}}>
            <TextField id="Email2" label="Branch" placeholder="Enter Company Branch" size='small' style={{ width: '300px', height: '60px' }} focused color='primary' />
          </Grid>
          <Grid item sx={{marginLeft:'auto'}}>
            <TextField id="Email3" label="Address" placeholder="Street, Apt" size='small' style={{ width: '300px', height: '60px' }} focused color='primary' />
          </Grid>
          <Grid item sx={{marginLeft:'auto'}}>
            <TextField id="Email4" label="Address 2" placeholder="Office, Room/Flat" size='small' style={{ width: '300px', height: '60px' }} focused color='primary' />
          </Grid>
          <Grid item sx={{marginLeft:'auto'}}>
          <FormControl fullWidth ><InputLabel id="demo-simple-select-label" >Country</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" color='primary'  sx={{width: '300px', height: '40px' }}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sx={{marginLeft:'auto'}}>
          <FormControl fullWidth ><InputLabel id="demo-simple-select-label"  >State / Provice</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" color='primary'  sx={{width: '300px', height: '40px' }}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sx={{marginLeft:'auto'}}>
          <FormControl fullWidth ><InputLabel id="demo-simple-select-label"  >District</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" color='primary'  sx={{width: '300px', height: '40px' }}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sx={{marginLeft:'auto'}}>
          <FormControl fullWidth ><InputLabel id="demo-simple-select-label"  >Sub-District</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" color='primary'  sx={{width: '300px', height: '40px' }}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sx={{marginLeft:'auto'}}>
            <TextField id="Email5" label="Postal / ZIP Code" placeholder="Enter Postal / Code" size='small' style={{ width: '300px', height: '60px' }} focused color='primary' />
          </Grid>
          <Grid item sx={{marginLeft:'auto'}}>
            <TextField id="Email5" label="Website" placeholder="www.thacthai.com" size='small' style={{ width: '300px', height: '60px' }} focused color='primary' />
          </Grid>
        </Grid>
        <Box sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
        <Button variant="contained" onClick={handleClickOpen}  sx={{color:'white', textTransform:'capitalize', width: '200px', height: 'auto'}}>Next</Button>
        <Box>
          <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <Box p={1}>
                   <Box sx={{ color: '#171717', fontSize: 25, fontFamily: 'Avenir', fontWeight: '400', wordWrap: 'break-word'}}>User Registration</Box>
          <Box pb={3} sx={{color: '#7F8391', fontSize: 15, fontFamily: 'Avenir', fontWeight: '0', textAlign: 'left'}}>
              Please fill in the form. All fields marked with (*) shall be required.</Box>
          <Divider/>
          <Box p={1} sx={{color: '#171717', fontSize: 22, fontFamily: 'Avenir', fontWeight: '400', wordWrap: 'break-word'}}>Personal Details</Box>
          <Grid container  pl={15}  columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{  width: '50%' }}>
            <Grid xs={4} pb={2}>
              <TextField disabled id="outlined-disabled"label="Disabled"defaultValue="Hello World" size='small' sx={{ width: '70%' }} />
            </Grid>
            <Grid  xs={4}>
              <TextField disabled id="outlined-disabled"label="Disabled"defaultValue="Hello World" size='small' sx={{ width: '70%' }} />
            </Grid>
            <Grid  xs={4}>
              <TextField disabled id="outlined-disabled"label="Disabled"defaultValue="Hello World" size='small' sx={{ width: '70%' }} />
            </Grid>     
            <Grid  xs={4}>
              <TextField disabled id="outlined-disabled"label="Disabled"defaultValue="Hello World" size='small' sx={{ width: '70%' }} />
            </Grid> 
            <Grid  xs={4}>
              <TextField disabled id="outlined-disabled"label="Disabled"defaultValue="Hello World" size='small' sx={{ width: '70%' }} />
            </Grid> 
          </Grid>
          <Box p={2}/>
          <Divider/>
          <Box p={1} sx={{color: '#171717', fontSize: 22, fontFamily: 'Avenir', fontWeight: '400', wordWrap: 'break-word'}}>Company Details</Box>
          <Grid container  pl={15}  columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{  width: '50%' }}>
            <Grid xs={4} pb={2}>
              <TextField disabled id="outlined-disabled"label="Disabled"defaultValue="Hello World" size='small' sx={{ width: '70%' }} />
            </Grid>
            <Grid  xs={4}>
              <TextField disabled id="outlined-disabled"label="Disabled"defaultValue="Hello World" size='small' sx={{ width: '70%' }} />
            </Grid>
            <Grid  xs={4}>
              <TextField disabled id="outlined-disabled"label="Disabled"defaultValue="Hello World" size='small' sx={{ width: '70%' }} />
            </Grid>     
            <Grid  xs={4}pb={2}>
              <TextField disabled id="outlined-disabled"label="Disabled"defaultValue="Hello World" size='small' sx={{ width: '70%' }} />
            </Grid> 
            <Grid  xs={4}>
              <TextField disabled id="outlined-disabled"label="Disabled"defaultValue="Hello World" size='small' sx={{ width: '70%' }} />
            </Grid> 
            <Grid xs={4} pb={2}>
              <TextField disabled id="outlined-disabled"label="Disabled"defaultValue="Hello World" size='small' sx={{ width: '70%' }} />
            </Grid>
            <Grid  xs={4} pb={2}>
              <TextField disabled id="outlined-disabled"label="Disabled"defaultValue="Hello World" size='small' sx={{ width: '70%' }} />
            </Grid>
            <Grid  xs={4}>
              <TextField disabled id="outlined-disabled"label="Disabled"defaultValue="Hello World" size='small' sx={{ width: '70%' }} />
            </Grid>
            <Grid  xs={4}></Grid>      
            <Grid  xs={4}>
              <TextField disabled id="outlined-disabled"label="Disabled"defaultValue="Hello World" size='small' sx={{ width: '70%' }} />
            </Grid> 
            <Grid  xs={4}>
              <TextField disabled id="outlined-disabled"label="Disabled"defaultValue="Hello World" size='small' sx={{ width: '70%' }} />
            </Grid> 
          </Grid>
          <Box p={1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Confirm information is correct" />
          </Box>
          <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Button variant="outlined" sx={{width:'30%'}}>Back</Button>
              <Box p={1}/>
              <Button variant="contained"  sx={{width:'30%'}}>Confirm</Button>
            </Box>
          </Box>
            </Dialog>
              </Box>
            </Box>
          </Box>
          </Box> 
        </Box>
  )
}
export default index
