import { useParams } from 'react-router-dom'
import data from '../constant/data'
import React from 'react'
import "../../src/assets/css/detail.css"
import Navbar from './\bnavbar';
import { height } from '@mui/system';

function Detail() {
    const userName = useParams();
    const film = data.find(obj => {
        return obj.id == userName.id;
    });



    return (
        <>
            <Navbar />
           
        </>

    )
}

export default Detail

