import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function MustToWatch() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
  return (
    
    <div>
        <section className="w3l-grids">
		<div className="grids-main py-4">
			<div className="container py-lg-4">
				<div className="headerhny-title">
					<h3 className="hny-title">Must to watch</h3>
				</div>
				<div className="owl-two owl-theme">
                    <Slider {...settings}>
					<div className="item" style={{padding:"10px"}}>
						<div className="two-gridshny-grids">
							<div className="two-gridshny-left">
								<div className="box16 mb-4">
									<a href="#">
										<figure>
											<img style={{padding:"10px"}} className="img-fluid" src="../../../src/assets/images/1.jpg" alt=""/>
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
							</div>
							<div className="two-gridshny-right">
								<h3> <a className="title-gd mt-0" href="#">That’s what I want to show you
										how to do here.</a></h3>

							</div>
						</div>
					</div>
					<div className="item" >
						<div className="two-gridshny-grids">
							<div className="two-gridshny-left">
								<div className="box16 mb-4">
									<a href="#">
										<figure>
											<img style={{padding:"10px"}} className="img-fluid" src="../../../src/assets/images/2.jpg" alt=""/>
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
							</div>
							<div className="two-gridshny-right">
								<h3> <a className="title-gd mt-0" href="#">That’s what I want to show you
										how to do here.</a></h3>

							</div>
						</div>
					</div>
					<div className="item vhny-grid">
						<div className="two-gridshny-grids">
							<div className="two-gridshny-left">
								<div className="box16 mb-4">
									<a href="#">
										<figure>
											<img style={{padding:"10px"}} className="img-fluid" src="../../../src/assets/images/3.jpg" alt=""/>
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
							</div>
							<div className="two-gridshny-right">
								<h3> <a className="title-gd mt-0" href="#">That’s what I want to show you
										how to do here.</a></h3>

							</div>
						</div>
					</div>
					<div className="item vhny-grid">
						<div className="two-gridshny-grids">
							<div className="two-gridshny-left">
								<div className="box16 mb-4">
									<a href="#">
										<figure>
											<img style={{padding:"10px"}} className="img-fluid" src="../../../src/assets/images/4.jpg" alt=""/>
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
							</div>
							<div className="two-gridshny-right">
								<h3> <a className="title-gd mt-0" href="#">That’s what I want to show you
										how to do here.</a></h3>

							</div>
						</div>
					</div>
					<div className="item vhny-grid">
						<div className="two-gridshny-grids">
							<div className="two-gridshny-left">
								<div className="box16 mb-4">
									<a href="#">
										<figure>
											<img style={{padding:"10px"}} className="img-fluid" src="../../../src/assets/images/5.jpg" alt=""/>
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
							</div>
							<div className="two-gridshny-right">
								<h3> <a className="title-gd mt-0" href="#">That’s what I want to show you
										how to do here.</a></h3>

							</div>
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

export default MustToWatch