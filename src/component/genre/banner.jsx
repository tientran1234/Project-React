import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Banner() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
        <div className="w3l-breadcrumbs">
		<nav id="breadcrumbs" className="breadcrumbs">
			<div className="container page-wrapper">
				<a href="index.html">Home</a> » <span className="breadcrumb_last" aria-current="page">Genre</span>
			</div>
		</nav>
        <section className="w3l-grids">
		<div className="grids-main py-4">
			<div className="container py-lg-4">
				<div className="headerhny-title">
					<h3 className="hny-title">Popular Movies</h3>
				</div>
				<div className=" owl-theme">
                <Slider {...settings}>
					<div className="item vhny-grid">
						<div className="box16">
							<a href="#">
								<figure>
									<img className="img-fluid" src="../../../src/assets/images/banner1.jpg" alt=""/>

								</figure>
								<div className="box-content">
									<h3 className="title">Rocketman</h3>
									<h4> <span className="post"><span className="fa fa-clock-o"> </span> 1 Hr 4min

										</span>

										<span className="post fa fa-heart text-right"></span>
									</h4>
								</div>
								<span className="fa fa-play video-icon" aria-hidden="true"></span>
							</a>
						</div>
						<div className="box16 mt-4">
							<a href="#">
								<figure>
									<img className="img-fluid" src="../../../src/assets/images/banner2.jpg" alt=""/>
								</figure>
								<div className="box-content">
									<h3 className="title">Frozen 2</h3>
									<h4> <span className="post"><span className="fa fa-clock-o"> </span> 1 Hr 4min

										</span>

										<span className="post fa fa-heart text-right"></span>
									</h4>
								</div>
								<span className="fa fa-play video-icon" aria-hidden="true"></span>
							</a>
						</div>
					</div>
					<div className="item vhny-grid">
						<div className="box16">
							<a href="#">
								<figure>
									<img className="img-fluid" src="../../../src/assets/images/banner3.jpg" alt=""/>
								</figure>
								<div className="box-content">
									<h3 className="title">Doctor Sleep</h3>
									<h4> <span className="post"><span className="fa fa-clock-o"> </span> 1 Hr 4min

										</span>

										<span className="post fa fa-heart text-right"></span>
									</h4>
								</div>
								<span className="fa fa-play video-icon" aria-hidden="true"></span>
							</a>
						</div>
						<div className="box16 mt-4">
							<a href="#">
								<figure>
									<img className="img-fluid" src="../../../src/assets/images/banner4.jpg" alt=""/>
								</figure>
								<div className="box-content">
									<h3 className="title">Toy story 4</h3>
									<h4> <span className="post"><span className="fa fa-clock-o"> </span> 1 Hr 4min

										</span>

										<span className="post fa fa-heart text-right"></span>
									</h4>
								</div>
								<span className="fa fa-play video-icon" aria-hidden="true"></span>
							</a>
						</div>
					</div>
					<div className="item vhny-grid">
						<div className="box16">
							<a href="#">
								<figure>
									<img className="img-fluid" src="../../../src/assets/images/banner1.jpg" alt=""/>

								</figure>
								<div className="box-content">
									<h3 className="title">Rocketman</h3>
									<h4> <span className="post"><span className="fa fa-clock-o"> </span> 1 Hr 4min

										</span>

										<span className="post fa fa-heart text-right"></span>
									</h4>
								</div>
								<span className="fa fa-play video-icon" aria-hidden="true"></span>
							</a>
						</div>
						<div className="box16 mt-4">
							<a href="#">
								<figure>
									<img className="img-fluid" src="../../../src/assets/images/banner2.jpg" alt=""/>
								</figure>
								<div className="box-content">
									<h3 className="title">Frozen 2</h3>
									<h4> <span className="post"><span className="fa fa-clock-o"> </span> 1 Hr 4min

										</span>

										<span className="post fa fa-heart text-right"></span>
									</h4>
								</div>
								<span className="fa fa-play video-icon" aria-hidden="true"></span>
							</a>
						</div>
					</div>
                    </Slider>
				</div>
			</div>
		</div>
	</section>
	</div>
    </div>
  )
}

export default Banner