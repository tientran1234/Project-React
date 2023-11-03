import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useState,useEffect} from "react"
import { getTickets } from '../hooks/useApi';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import EditItem from './editItem';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
// const currentDate = new Date();

// // Lấy ngày, tháng, năm, giờ, phút, giây và mili giây
// const year = currentDate.getUTCFullYear();  // Năm
// const month = String(currentDate.getUTCMonth() + 1).padStart(2, '0');  // Tháng (cộng 1 và thêm số 0 nếu cần)
// const day = String(currentDate.getUTCDate()).padStart(2, '0');  // Ngày (thêm số 0 nếu cần)
// const hours = String(currentDate.getUTCHours()).padStart(2, '0');  // Giờ (thêm số 0 nếu cần)
// const minutes = String(currentDate.getUTCMinutes()).padStart(2, '0');  // Phút (thêm số 0 nếu cần)
// const seconds = String(currentDate.getUTCSeconds()).padStart(2, '0');  // Giây (thêm số 0 nếu cần);
// const milliseconds = String(currentDate.getUTCMilliseconds()).padStart(3, '0');  // Mili giây (thêm số 0 nếu cần)

// // Tạo chuỗi theo định dạng
// const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;

// console.log(formattedDateTime);

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
const currentDate = new Date();
console.log(currentDate);
const getDay=(dateTimeString)=>{

// Chuyển đổi chuỗi thời gian thành đối tượng Date
const date = new Date(dateTimeString);

// Lấy ngày, tháng và năm từ đối tượng Date
const day = date.getDate(); // Ngày (1-31)
const month = date.getMonth() + 1; // Tháng (0-11), cộng thêm 1 để bắt đầu từ 1
const year = date.getFullYear(); // Năm
    const fullDay =day +"/"+month+"/"+year;
    return fullDay;
}
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    height:"80%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
export default function CustomizedTables() {
    const [rows,setRows]=useState([]);
    const [dopen, setDopen] = React.useState(false);
    const handleCloseEdit = () => setDopen(false);
    const handleDopen = () => setDopen(true);
    const [flag, setFlag] = useState(false);
    const [formId,setFormId]=useState();
    useEffect(() => {
        getTickets().then((data)=>{
         setRows(data);
        })
       }, []);
       const handleFlagChange = () => {
        setFlag(!flag);
      };
      const formEdit=(profile)=>{
       
        const data={
            id: profile.id,
            name: profile.name,
           avatar: profile.avatar,
            age: profile.age,
            address:profile.address,
            createdAt:profile.createdAt,
    
        }
        setFormId(data);
        handleDopen();
       
        
    }
  return (
    <div>

          <Modal
                open={dopen}
                    
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                   <EditItem closeEventEdit={handleCloseEdit} profile={formId}  handleFlagChange={handleFlagChange}/>
                   
                </Box>
            </Modal>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">name</StyledTableCell>
            <StyledTableCell align="left">avatar</StyledTableCell>
            <StyledTableCell align="left">age</StyledTableCell>
            <StyledTableCell align="left">address</StyledTableCell>
            <StyledTableCell align="left">createdAt</StyledTableCell>
            <StyledTableCell align="left">Tools</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
            
              <StyledTableCell align="left">{row.name}</StyledTableCell>
              <StyledTableCell align="left">{row.avatar}</StyledTableCell>
              <StyledTableCell align="left">{row.age}</StyledTableCell>
              <StyledTableCell align="left">{row.address}</StyledTableCell>
              <StyledTableCell align="left">{getDay(row.createdAt)}</StyledTableCell>
              <StyledTableCell align="left">
                <EditIcon style={{marginRight:"10px"}} onClick={()=>formEdit(row)}></EditIcon>
                <DeleteIcon></DeleteIcon>

                </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}