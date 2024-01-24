import React from 'react'
import Slider from 'react-slick';

function Testimonial() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true
      };
  return (
    <div>
        <section className="w3l-clients" id="clients">
    <div className="cusrtomer-layout py-5">
        <div className="container py-lg-4">
			<div className="headerhny-title">
				<h3 className="hny-title">Our Testimonials</h3>
			</div>
           
            <div className="testimonial-width">
                <div className="owl-clients owl-theme mb-lg-5">
                    <Slider {...settings}>
                    <div className="item">
                        <div className="testimonial-content">
                            <div className="testimonial" style={{margin:"20px"}}>
                                <blockquote>
                                    <q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae laudantium
                                        voluptate rem ullam dolore!.</q>
                                </blockquote>
                                <div className="testi-des">
                                    <div className="test-img"><img src="../../../src/assets/images/team1.jpg" className="img-fluid" alt="/"/>
                                    </div>
                                    <div className="peopl align-self">
                                        <h3>Johnson smith</h3>
                                        <p className="indentity">Washington</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonial-content">
                            <div className="testimonial" style={{margin:"20px"}}>
                                <blockquote>
									<q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae laudantium
                                        voluptate rem ullam dolore!.</q>
                                </blockquote>
                                <div className="testi-des">
                                    <div className="test-img"><img src="../../../src/assets/images/team2.jpg" className="img-fluid" alt="/"/>
                                    </div>
                                    <div className="peopl align-self">
                                        <h3>Alexander leo</h3>
                                        <p className="indentity">Washington</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonial-content">
                            <div className="testimonial" style={{margin:"20px"}}>
                                <blockquote>
                                    <q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae laudantium
                                        voluptate rem ullam dolore!.</q>
                                </blockquote>
                                <div className="testi-des">
                                    <div className="test-img"><img src="../../../src/assets/images/team3.jpg" className="img-fluid" alt="/"/>
                                    </div>
                                    <div className="peopl align-self">
                                        <h3>Roy Linderson</h3>
                                        <p className="indentity">Washington</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonial-content">
                            <div className="testimonial" style={{margin:"20px"}}>
                                <blockquote>
                                    <q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae laudantium
                                        voluptate rem ullam dolore!.</q>
                                </blockquote>
                                <div className="testi-des">
                                    <div className="test-img"><img src="../../../src/assets/images/team4.jpg" className="img-fluid" alt="/"/>
                                    </div>
                                    <div className="peopl align-self">
                                        <h3>Mike Thyson</h3>
                                        <p className="indentity">Washington</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonial-content">
                            <div className="testimonial" style={{margin:"20px"}}>
                                <blockquote>
									<q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae laudantium
                                        voluptate rem ullam dolore!.</q>
                                </blockquote>
                                <div className="testi-des">
                                    <div className="test-img"><img src="../../../src/assets/images/team2.jpg" className="img-fluid" alt="/"/>
                                    </div>
                                    <div className="peopl align-self">
                                        <h3>Laura gill</h3>
                                        <p className="indentity">Washington</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonial-content">
                            <div className="testimonial" style={{margin:"20px"}}>
                                <blockquote>
									<q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae laudantium
                                        voluptate rem ullam dolore!.</q>
                                </blockquote>
                                <div className="testi-des">
                                    <div className="test-img"><img src="../../../src/assets/images/team3.jpg" className="img-fluid" alt="/"/>
                                    </div>
                                    <div className="peopl align-self">
                                        <h3>Smith Johnson</h3>
                                        <p className="indentity">Washington</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Slider>
                </div>
            </div>
        </div>
       
    </div>
  
</section>
    </div>
  )
}

export default Testimonial