import React from 'react';
import Header from './header';
import MainSlider from './mainSlider';
import Gridsec1 from './gridsec1';
import Gridsec2 from './gridsec2';
import Albums from './albums';
import Footer from './\bfooter';
import useScrollY from '../../hook/useScrollY'; 

import { FaArrowCircleUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { Button } from '../../assets/js/Styles';

function Home() {
    const {scrollY}=useScrollY();
    console.log("haha"+scrollY);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <div>
            <Header />
            <MainSlider />
            <Gridsec1 />
            <Gridsec2 />
            <Albums />
            <Footer />
            <Button
               
                onClick={scrollToTop}
                style={{ visibility: `${useScrollY() > 100 ? 'visible' : 'hidden'}` }}
            >
                <FaArrowCircleUp />
            </Button>
        </div>
    );
}

export default Home;