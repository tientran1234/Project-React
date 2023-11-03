import React,{useState} from 'react'

import {AppBar, Button} from '@mui/material'
import {Toolbar,Tabs,Tab} from '@mui/material'
import Navbar from './\bnavbar'
import data from '../constant/data'
function New() {
  const [value, setValue] = useState();
  return (

    <div>
      <Navbar/>
      <h1 style={{marginTop:"100px"}}>New Film</h1>
      <Tabs   textColor="inherit" value ={value} onChange={(e,value)=>setValue(value)} indicatorColor='secondary' >
                    <Tab label ="All"/>
                    <Tab label ="Film"/>
                    <Tab label ="Series"/>
        </Tabs>
        {data!=null && data.map((i)=>{
          <img src={`../${i.img}`} alt="" srcset="" />
        })}
        <hr />

    </div>
  )
}

export default New