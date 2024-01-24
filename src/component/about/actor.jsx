import React from 'react'
import Slider from 'react-slick'

function Actor() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear",
    }
  return (
    <div>
        <section className="w3l-team" id="team">
			<div className="grids-main py-5">
				<div className="container py-lg-4">
					<div className="headerhny-title">
						<h3 className="hny-title">Our Actors</h3>
					</div>
					<div className="owl-team  owl-theme">
                    <Slider {...settings}>
						<div className="item vhny-grid" >
							<div className="d-grid team-info">
								<div className="column position-relative">
									<a href="#url"><img style={{padding:" 0 20px"}} src="../../../src/assets/images/a1.jpg" alt="" className="img-fluid rounded team-image" /></a>
								</div>
								<div className="column text-center">
									<h3 className="name-pos"><a href="#url">Dwayne johnson</a></h3>
									
									<div className="social">
										<a href="#facebook" className="facebook"><span className="fa fa-facebook" aria-hidden="true"></span></a>
										<a href="#twitter" className="twitter"><span className="fa fa-twitter" aria-hidden="true"></span></a>
										<a href="#linkedin" className="linkedin"><span className="fa fa-linkedin" aria-hidden="true"></span></a>
									</div>
								</div>
							</div>
	
						</div>
						<div className="item vhny-grid">
							<div className="box16">
								<div className="d-grid team-info">
									<div className="column position-relative">
										<a href="#url"><img style={{padding:" 0 20px"}} src="../../../src/assets/images/a2.jpg" alt="" className="img-fluid rounded team-image" /></a>
									</div>
									<div className="column text-center">
										<h3 className="name-pos"><a href="#url">Karen Gillan</a></h3>
										
										<div className="social">
											<a href="#facebook" className="facebook"><span className="fa fa-facebook" aria-hidden="true"></span></a>
											<a href="#twitter" className="twitter"><span className="fa fa-twitter" aria-hidden="true"></span></a>
											<a href="#linkedin" className="linkedin"><span className="fa fa-linkedin" aria-hidden="true"></span></a>
										</div>
									</div>
								</div>
							</div>
	
						</div>
						<div className="item vhny-grid">
							<div className="box16">
								<div className="d-grid team-info">
									<div className="column position-relative">
										<a href="#url"><img style={{padding:" 0 20px"}} src="../../../src/assets/images/a3.jpg" alt="" className="img-fluid rounded team-image" /></a>
									</div>
									<div className="column text-center">
										<h3 className="name-pos"><a href="#url">Chris Hemsworth</a></h3>
										
										<div className="social">
											<a href="#facebook" className="facebook"><span className="fa fa-facebook" aria-hidden="true"></span></a>
											<a href="#twitter" className="twitter"><span className="fa fa-twitter" aria-hidden="true"></span></a>
											<a href="#linkedin" className="linkedin"><span className="fa fa-linkedin" aria-hidden="true"></span></a>
										</div>
									</div>
								</div>
							</div>
	
						</div>
						<div className="item vhny-grid">
							<div className="box16">
								<div className="d-grid team-info">
									<div className="column position-relative">
										<a href="#url"><img style={{padding:" 0 20px"}} src="../../../src/assets/images/a4.jpg" alt="" className="img-fluid rounded team-image" /></a>
									</div>
									<div className="column text-center">
										<h3 className="name-pos"><a href="#url">Elton John</a></h3>
									
										<div className="social">
											<a href="#facebook" className="facebook"><span className="fa fa-facebook" aria-hidden="true"></span></a>
											<a href="#twitter" className="twitter"><span className="fa fa-twitter" aria-hidden="true"></span></a>
											<a href="#linkedin" className="linkedin"><span className="fa fa-linkedin" aria-hidden="true"></span></a>
										</div>
									</div>
								</div>
							</div>
	
						</div>
						<div className="item vhny-grid">
							<div className="box16">
								<div className="d-grid team-info">
									<div className="column position-relative">
										<a href="#url"><img style={{padding:" 0 20px"}} src="../../../src/assets/images/a5.jpg" alt="" className="img-fluid rounded team-image" /></a>
									</div>
									<div className="column text-center">
										<h3 className="name-pos"><a href="#url">Liu Yifei</a></h3>
										<div className="social">
											<a href="#facebook" className="facebook"><span className="fa fa-facebook" aria-hidden="true"></span></a>
											<a href="#twitter" className="twitter"><span className="fa fa-twitter" aria-hidden="true"></span></a>
											<a href="#linkedin" className="linkedin"><span className="fa fa-linkedin" aria-hidden="true"></span></a>
										</div>
									</div>
								</div>
							</div>
	
						</div>
						<div className="item vhny-grid">
							<div className="box16">
								<div className="d-grid team-info">
									<div className="column position-relative">
										<a href="#url"><img style={{padding:" 0 20px"}} src="../../../src/assets/images/a3.jpg" alt="" className="img-fluid rounded team-image" /></a>
									</div>
									<div className="column text-center">
										<h3 className="name-pos"><a href="#url">Chris Hemsworth</a></h3>
										
										<div className="social">
											<a href="#facebook" className="facebook"><span className="fa fa-facebook" aria-hidden="true"></span></a>
											<a href="#twitter" className="twitter"><span className="fa fa-twitter" aria-hidden="true"></span></a>
											<a href="#linkedin" className="linkedin"><span className="fa fa-linkedin" aria-hidden="true"></span></a>
										</div>
									</div>
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

export default Actor