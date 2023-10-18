import React from 'react'
import { Box } from '@mui/material';
import Body from './components/pc'
import mobile from '../change-password'
import Layout from  '../../components/layout'


function Index() {
  return (
    
    <Box sx={{background:"linear-gradient( #84BAA1, #FFFBE2 )",height:"100vh",width:'100%'}}>
      <Layout containerheight="auto" templaterow="0fr auto 0fr" templateareas="'nav' 'content1' 'footer'" 
      mtemplaterow="0fr auto 0fr" mtemplateareas="'nav' 'content1' 'footer'"
      Content1={<Box><Body/></Box>}/>
      
    </Box>
  
  )
}

export default Index