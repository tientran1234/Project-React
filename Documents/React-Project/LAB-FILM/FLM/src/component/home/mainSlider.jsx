import React,{useRef,useEffect} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MainSlider() {
  const carouselRef = useRef(null);
    const settings ={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slideToScroll:1
    }
    const goToPrevSlide = () => {
      if (carouselRef.current) {
        carouselRef.current.slickPrev();
      }
    };
  
    const goToNextSlide = () => {
      if (carouselRef.current) {
        carouselRef.current.slickNext();
      }
    };
    
    useEffect(() => {
      // Hàm để tự động chuyển slide sau một khoảng thời gian
      const autoChangeSlide = () => {
        if (carouselRef.current) {
          carouselRef.current.slickNext();
        }
      };
  
      // Đặt interval để tự động chuyển slide sau một khoảng thời gian
      const intervalId = setInterval(autoChangeSlide, 5000); // 5000 milliseconds = 5 giây
  
      // Xóa interval khi component unmount
      return () => clearInterval(intervalId);
    }, []);

  return (
    <section className="w3l-main-slider position-relative" id="home">
      <div className="companies20-content">
        
        <Slider {...settings} ref={carouselRef}>
            
          <div className="item">
            <div className="slider-info banner-view bg bg2">
              <div className="banner-info">

                <h3>Latest Movie Trailers</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<span className="over-para"> Consequuntur hic odio
                    voluptatem tenetur consequatur.</span></p>
                <a href="#small-dialog1" className="popup-with-zoom-anim play-view1">
                  <span className="video-play-icon">
                    <span className="fa fa-play"></span>
                  </span>
                  <h6>Watch Trailer</h6>
                </a>
                <div id="small-dialog1" className="zoom-anim-dialog mfp-hide">
                  <iframe src="https://player.vimeo.com/video/358205676" allow="autoplay; fullscreen"
                    allowFullScreen=""></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="slider-info  banner-view banner-top1 bg bg2">
              <div className="banner-info">
                <h3>Latest Online Movies</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<span className="over-para"> Consequuntur hic odio
                    voluptatem tenetur consequatur.</span></p>
                <a href="#small-dialog2" className="popup-with-zoom-anim play-view1">
                  <span className="video-play-icon">
                    <span className="fa fa-play"></span>
                  </span>
                  <h6>Watch Trailer</h6>
                </a>
                <div id="small-dialog2" className="zoom-anim-dialog mfp-hide">
                  <iframe src="https://player.vimeo.com/video/395376850" allow="autoplay; fullscreen"
                    allowFullScreen=""></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="slider-info banner-view banner-top2 bg bg2">
              <div className="banner-info">
                <h3>Latest Movie Trailers</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<span className="over-para"> Consequuntur hic odio
                    voluptatem tenetur consequatur.</span></p>
                <a href="#small-dialog3" className="popup-with-zoom-anim play-view1">
                  <span className="video-play-icon">
                    <span className="fa fa-play"></span>
                  </span>
                  <h6>Watch Trailer</h6>
                </a>
                <div id="small-dialog3" className="zoom-anim-dialog mfp-hide">
                  <iframe src="https://player.vimeo.com/video/389969665" allow="autoplay; fullscreen"
                    allowFullScreen=""></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="slider-info banner-view banner-top3 bg bg2">
              <div className="banner-info">
                <h3>Latest Online Movies</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<span className="over-para"> Consequuntur hic odio
                    voluptatem tenetur consequatur.</span></p>
                <a href="#small-dialog4" className="popup-with-zoom-anim play-view1">
                  <span className="video-play-icon">
                    <span className="fa fa-play"></span>
                  </span>
                  <h6>Watch Trailer</h6>
                </a>
                <div id="small-dialog4" className="zoom-anim-dialog mfp-hide">
                  <iframe src="https://player.vimeo.com/video/323491174" allow="autoplay; fullscreen"
                    allowFullScreen=""></iframe>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      
      </div>
      <div className="slider-controls">
        <button className="control-btn prev-btn" onClick={goToPrevSlide}>
        &#9664;
        </button>
        <button className="control-btn next-btn" onClick={goToNextSlide}>
        &#9654;
        </button>
      </div>
    </section>
  );
}

export default MainSlider;
