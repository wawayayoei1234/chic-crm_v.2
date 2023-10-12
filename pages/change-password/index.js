import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react';
import bgbox from '../../components/bgbox';

function index() {
  const [data, setdata] = useState({username:'',oldpassword:'',newpassword:''})
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "username": data.username,
  "oldpassword": data.oldpassword,
  "newpassword": data.newpassword
});
const update=()=>{
    var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'PATCH',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://192.168.5.71:8080/api/change-password", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}
  return (
    <div>
      <Box>{bgbox}</Box>
        <Box sx={{display:'flex',flexDirection:'column',justifyItems:'center' ,alignItems:'center',justifyContent:'center',height:'100vh',}}>
        change-password
        <TextField id="username" label="username" variant="outlined" required  onChange={(e)=>{setdata((prevState) => ({ ...prevState, username: e.target.value }))}}/>
        <TextField id="password" label="oldpassword" variant="outlined" required  onChange={(e)=>{setdata((prevState) => ({ ...prevState, oldpassword: e.target.value }))}}/>
        <TextField id="password" label="newpassword" variant="outlined" required  onChange={(e)=>{setdata((prevState) => ({ ...prevState, newpassword: e.target.value }))}}/>
        <Button variant='contained' onClick={update}> 
            update</Button>
        </Box>
    </div>
  )
}

export default index