import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {useState,useEffect} from "react"
import { deleteTicket, getTickets } from '../../../data/imgData';
import Swal from 'sweetalert2';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';






export default function ProductList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(9);
  const [flag,setFlag]=useState(false);
  const [rows, setRows] = React.useState([]);
  const [albumData,setAlbumData]=useState([]);
useEffect(() => {
  getTickets()
  .then((data) => {
    setRows(data);
  })
  .catch((error) => {
    console.error('Lỗi khi lấy dữ liệu từ API:', error);
  });

}, [flag]);
console.log(rows);
console.log(flag);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const deleteFilm=(id)=>{
    console.log(id);
    Swal.fire({
        title:"Are you sure ?",
        text:"You won't be able to revert this!",
        icon:"warning",
        showCancelButton:true,
        confirmButtonColor:"blue",
        cancelButtonColor:"red",
        confirmButtonText:"Yes ,delete it !"
    }).then((result)=>{
        if (result.value) {
            deleteTicket(id)
            
              .then(() => {
                setFlag(!flag);
                
                Swal.fire("Deleted!", "Your film has been deleted.", "success");
              })
              .catch((error) => {
                console.error("Error deleting film:", error);
                Swal.fire("Error", "An error occurred while deleting the film.", "error");
              });
          }
        });
      };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
             
                <TableCell
                
                  align="left"
                  style={{ minWidth: "100px" }}
                >
                    Name
                 
                </TableCell>
                <TableCell
                
                align="left"
                style={{ minWidth: "100px" }}
              >
                Title
               
              </TableCell>
              <TableCell
                
                align="left"
                style={{ minWidth: "100px" }}
              >
                  Genre
               
              </TableCell>
              <TableCell
                
                align="left"
                style={{ minWidth: "100px" }}
              >
                  Runtime
               
              </TableCell>
              <TableCell
                
                align="left"
                style={{ minWidth: "100px" }}
              >
                  Info
               
              </TableCell>
              <TableCell
                
                align="center"
                style={{ minWidth: "100px" }}
              >
                  Tools
               
              </TableCell>
             
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
           
              .map((row) => {
                return (
                  
                  <TableRow hover role="checkbox" tabIndex={-1} >
                    
                        <TableCell key={row.id} align="left">
                          {row.id}
                        </TableCell>
                        <TableCell key={row.id} align="left">
                          {row.title}
                        </TableCell>
                        <TableCell key={row.id} align="left">
                          {row.genre}
                        </TableCell>
                        <TableCell key={row.id} align="left">
                          {row.runtime}
                        </TableCell>
                        <TableCell key={row.id} align="left">
                          {row.info }
                        </TableCell>
                        <TableCell key={row.id} align="left">
                          <EditIcon style={{marginRight:20}}/>
                          <DeleteOutlineIcon onClick={()=>deleteFilm(row.id)}/>
                        </TableCell>
                    
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
     
    </Paper>
  );
}