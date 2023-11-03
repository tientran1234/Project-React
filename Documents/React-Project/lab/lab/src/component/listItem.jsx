import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {useEffect,useState} from 'react'
import { getTickets } from '../hooks/useApi';
export default function MultiActionAreaCard() {
  const [dataList,setDataList]=useState([]);
  useEffect(() => {
   getTickets().then((data)=>{
    setDataList(data);
   })
  }, []);
  console.log(dataList);
  return (
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gridGap:"20px",margin:"100px"}}>
      {dataList.map((item)=>(
          <Card sx={{ maxWidth: 345 }}>
     
          <CardActionArea>
            <CardMedia 
              component="img"
              height="100%"
              
              image={item.avatar}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.data}
              </Typography>
              <Typography variant="body2" color="text.secondary">
               {item.address}
              </Typography>
              <Typography variant="body2" color="text.secondary">
               {item.age}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              
            </Button>
          </CardActions>
        </Card>
        ))} 
       
   
    </div>
   
  );
}
