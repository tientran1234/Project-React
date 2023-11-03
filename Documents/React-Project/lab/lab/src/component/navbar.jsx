import React,{useState} from 'react'
import {AppBar, Button} from '@mui/material'
import {Toolbar,Tabs,Tab} from '@mui/material'


function Navbar() {
  
  const [value, setValue] = useState();
    return(
        <div>
          
        <AppBar sx={{background:"#063970"}} >
            <Toolbar>
                <Tabs   textColor="inherit" value ={value} onChange={(e,value)=>setValue(value)} indicatorColor='secondary'>
                <Button variant='contained' href='/' color="error" sx={{marginLeft:"auto"}}>Home</Button>
                   
                    <Tab label ="New"/>
                    <Tab label ="About"/>
                    <Tab label ="Contact"/>
                    
                </Tabs>
                <Button variant='contained' color="error" sx={{marginLeft:"auto"}}>Login</Button>
            </Toolbar>
        </AppBar>
        </div>
    )
}


export default Navbar;
