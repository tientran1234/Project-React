import React from 'react'
import Footer from '../home/\bfooter'
import Header from '../home/header'
import Actor from './actor'
import Banner from './banner'
import Testimonial from './testimonial'
import { FaArrowCircleUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { Button } from '../../assets/js/Styles';
import useScrollY from '../../hook/useScrollY'; 

function About() {
  const scrollToTop = () => {
    scroll.scrollToTop();
};

  return (
    <div>
      <Header/>
        <Banner/>
        <Actor/>
        <Testimonial/>
        <Footer/>
        <Button
               
                onClick={scrollToTop}
                style={{ visibility: `${useScrollY() > 100 ? 'visible' : 'hidden'}` }}
            >
                <FaArrowCircleUp />
            </Button>
    </div>
  )
}

export default About