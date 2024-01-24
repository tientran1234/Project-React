import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Header from '../home/header';
import Footer from '../home/\bfooter';
import useFilm from '../../hook/useFilm';

function Detail() {
    const {listFilm}=useFilm();
    const userName = useParams();
  
    const filmLocal = listFilm.find(obj => {
        return obj.id == userName.id;
    });
    
    if(localStorage.getItem("film")==undefined ||userName.id!= JSON.parse(localStorage.getItem("film")).id){
        localStorage.setItem("film",JSON.stringify(filmLocal));
    
    }
   
    const film=JSON.parse(localStorage.getItem("film"));
    console.log(film);
  return (
   
    <div>
        <Header/>
         <div className='container-detail'>
                <div className='product-tumb'>
                    <img src={`../${film.imageUrl}`} alt='' />
                </div>
                <div className='product-card'>
                    <div className='badge'>{film.title}</div>
                    <div className='product-details'>
                        <p><span>Info:</span> {film.info}</p>
                        <p><span>Genre:</span> {film.genre}</p>
                        <p><span>Runtime:</span> {film.runtime}</p>
                        <div className="video" style={{height:"100px"}}>
                        <div dangerouslySetInnerHTML={{ __html: film.link }} />
                        
                        </div>
                       
                    </div>
                </div>
            </div>
            <Footer/>
    </div>
  )
}

export default Detail
