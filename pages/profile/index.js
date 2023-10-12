import React from 'react'
import { Box } from '@mui/material';
import Navbar from '../profile/components/navbar'
import Layout from  '../../components/layout'
import Title from '@/components/title'
import conten from './components/conten'

function Index() {
  return (
    
<Layout containerheight="auto" templaterow="0fr auto 0fr" templateareas="'nav' 'content1' 'footer'" 
      mtemplaterow="0fr auto 0fr" mtemplateareas="'nav' 'content1' 'footer'"
      nav={<Box><Navbar/></Box>}
      footer={<Box><Title namepage="Registration" /></Box>}
   
      
      />
  )
}

export default Index