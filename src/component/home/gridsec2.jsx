
import React,{useRef,useEffect} from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function Gridsec2() {
	const carouselRef = useRef(null);
    const settings ={
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "60px",
		slidesToShow: 3,
		speed: 500
     
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
    
      const autoChangeSlide = () => {
        if (carouselRef.current) {
          carouselRef.current.slickNext();
        }
      };
  
      
      const intervalId = setInterval(autoChangeSlide, 5000); 
  
    
      return () => clearInterval(intervalId);
    }, []);
  return (
    <div>
        <section className="w3l-grids">
		<div className="grids-main py-5">
			<div className="container py-lg-3" >
				<div className="headerhny-title">
					<div className="w3l-title-grids">
						<div className="headerhny-left">
							<h3 className="hny-title">New Releases</h3>
						</div>
						<div className="headerhny-right text-lg-right">
							<h4><a className="show-title" href="genre.html">Show all</a></h4>
						</div>
					</div>
				</div>

				<div className="owl-three owl-theme">
					<Slider {...settings}>
					<div className="item vhny-grid">
						<div className="box16 mb-0">
							<a href="genre.html">
								<figure>
									<img className="img-fluid" src="../../../src/assets/images/n1.jpg" alt=""/>
								</figure>
								<div className="box-content">
									<h4> <span className="post"><span className="fa fa-clock-o"> </span> 2 Hr 4min

										</span>

										<span className="post fa fa-heart text-right"></span>
									</h4>
								</div>
								<span className="fa fa-play video-icon" aria-hidden="true"></span>
							</a>
						</div>
						<h3> <a className="title-gd" href="genre.html">No Time to Die</a></h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
						<div className="button-center text-center mt-4">
							<a href="genre.html" className="btn watch-button">Watch now</a>
						</div>

					</div>
					<div className="item vhny-grid">
						<div className="box16 mb-0">
							<a href="genre.html">
								<figure>
									<img className="img-fluid" src="../../../src/assets/images/n2.jpg" alt=""/>
								</figure>
								<div className="box-content">

									<h4> <span className="post"><span className="fa fa-clock-o"> </span> 2 Hr 4min

										</span>

										<span className="post fa fa-heart text-right"></span>
									</h4>
								</div>
								<span className="fa fa-play video-icon" aria-hidden="true"></span>
							</a>
						</div>
						<h3> <a className="title-gd" href="genre.html">Mulan</a></h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
						<div className="button-center text-center mt-4">
							<a href="genre.html" className="btn watch-button">Watch now</a>
						</div>
					</div>
					<div className="item vhny-grid">
						<div className="box16 mb-0">
							<a href="genre.html">
								<figure>
									<img className="img-fluid" src="../../../src/assets/images/n3.jpg" alt=""/>
								</figure>
								<div className="box-content">

									<h4> <span className="post"><span className="fa fa-clock-o"> </span> 2 Hr 4min

										</span>

										<span className="post fa fa-heart text-right"></span>
									</h4>
								</div>
								<span className="fa fa-play video-icon" aria-hidden="true"></span>
							</a>
						</div>
						<h3> <a className="title-gd" href="genre.html">Free Guy</a></h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
						<div className="button-center text-center mt-4">
							<a href="genre.html" className="btn watch-button">Watch now</a>
						</div>
					</div>
					<div className="item vhny-grid">
						<div className="box16 mb-0">
							<a href="genre.html">
								<figure>
									<img className="img-fluid" src="../../../src/assets/images/n4.jpg" alt=""/>
								</figure>
								<div className="box-content">

									<h4> <span className="post"><span className="fa fa-clock-o"> </span> 2 Hr 4min

										</span>

										<span className="post fa fa-heart text-right"></span>
									</h4>
								</div>
								<span className="fa fa-play video-icon" aria-hidden="true"></span>
							</a>
						</div>
						<h3> <a className="title-gd" href="genre.html">My Spy</a></h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
						<div className="button-center text-center mt-4">
							<a href="genre.html" className="btn watch-button">Watch now</a>
						</div>

					</div>
					<div className="item vhny-grid">
						<div className="box16 mb-0">
							<a href="genre.html">
								<figure>
									<img className="img-fluid" src="../../../src/assets/images/n5.jpg" alt=""/>
								</figure>
								<div className="box-content">

									<h4> <span className="post"><span className="fa fa-clock-o"> </span> 2 Hr 4min

										</span>

										<span className="post fa fa-heart text-right"></span>
									</h4>
								</div>
								<span className="fa fa-play video-icon" aria-hidden="true"></span>
							</a>
						</div>
						<h3> <a className="title-gd" href="genre.html">Scoob</a></h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
						<div className="button-center text-center mt-4">
							<a href="genre.html" className="btn watch-button">Watch now</a>
						</div>
					</div>
					<div className="item vhny-grid">
						<div className="box16 mb-0">
							<a href="genre.html">
								<figure>
									<img className="img-fluid" src="../../../src/assets/images/n6.jpg" alt=""/>
								</figure>
								<div className="box-content">

									<h4> <span className="post"><span className="fa fa-clock-o"> </span> 2 Hr 4min

										</span>

										<span className="post fa fa-heart text-right"></span>
									</h4>
								</div>
								<span className="fa fa-play video-icon" aria-hidden="true"></span>
							</a>
						</div>
						<h3> <a className="title-gd" href="genre.html">Downhill</a></h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
						<div className="button-center text-center mt-4">
							<a href="genre.html" className="btn watch-button">Watch now</a>
						</div>
					</div>
					</Slider>
				</div>
			</div>

		</div>
	</section>
    </div>
  )
}

export default Gridsec2