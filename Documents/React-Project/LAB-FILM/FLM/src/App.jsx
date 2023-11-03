
import './App.css'
import "../src/assets/css/style.css"
import { Route,Routes } from 'react-router-dom'
import Home from "../src/component/home/home"
import Contact from "../src/component/contact/contact"
import About from "../src/component/about/about"
import Detail from './component/detail/detail'
import Genre from './component/genre/genre'
import useFilm from './hook/useFilm'
import { getTickets } from './data/imgData';
import React,{useEffect,useState} from 'react';
import Login from './login/login'
import DashBoard from './component/dashboard/DashBoard'


function App() {
  const [albumData,setAlbumData]=useState([]);
  const {listFilm,handleSetFilm}=useFilm();
  useEffect(() => {
    getTickets(1)
    .then((data) => {
      setAlbumData(data);
    })
    .catch((error) => {
      console.error('Lỗi khi lấy dữ liệu từ API:', error);
    });
  
  }, []);

handleSetFilm(albumData);
console.log(listFilm);
const user=JSON.parse(localStorage.getItem("name"));

  return (
    <>
   <Routes>
      
        <Route path="/"  exact  element={<Home/>} ></Route>
        <Route path="/contact"  exact element={<Contact/>} ></Route>
        <Route path="/about"  exact element={<About/>} ></Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path="/genre"  exact element={<Genre/>} ></Route>
        <Route path="/login"  exact element={<Login/>} ></Route>
        <Route path="/dashboard"  exact element={user?<DashBoard/>:<Login/>} ></Route>

        
    </Routes>
  
    
    </>
  )
}

export default App
