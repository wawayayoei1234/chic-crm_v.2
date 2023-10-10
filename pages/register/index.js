import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react';

function index() {
    const [data, setdata] = useState({username:'',password:''})
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "username": data.username,
  "password": data.password
});
 console.log(data)
const register=()=>{
    var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
 

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://192.168.5.71:8080/api/register", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}
  return (
    <div>
        <Box sx={{display:'flex',flexDirection:'column',justifyItems:'center' ,alignItems:'center',justifyContent:'center',height:'100vh',}}>
        register
      <TextField id="username" label="username" variant="outlined" required  onChange={(e)=>{setdata((prevState) => ({ ...prevState, username: e.target.value }))}} />
      <TextField id="password" label="password" variant="outlined" required  onChange={(e)=>{setdata((prevState) => ({ ...prevState, password: e.target.value }))}} />
      <Button variant='contained' onClick={register}> 
      Submit</Button>
      </Box>
    </div>
  )
}

export default index