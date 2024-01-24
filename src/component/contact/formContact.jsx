import React from 'react'

function FormContact() {
  return (
    <div>
          <section className="w3l-contact-1">
		<div className="contacts-9 py-5">
		  <div className="container py-lg-4">
			<div className="headerhny-title text-center">
				<h4 className="sub-title text-center">Contact us</h4>
				<h3 className="hny-title mb-0">Leave a Message</h3>
				<p className="hny-title mb-lg-5 mb-4">If you have a question regarding our services, feel free to contact us using the form below.</p>
			</div>
			<div className="contact-view mt-lg-5 mt-4">
			  <div className="conhny-form-section">
				<form action="https://sendmail.w3layouts.com/submitForm" method="post" className="formhny-sec">
						<div className="form-grids">
							<div className="form-input">
								<input type="text" name="w3lName" id="w3lName" placeholder="Enter your name *" required="" />
							</div>
							<div className="form-input">
								<input type="text" name="w3lSubject" id="w3lSubject" placeholder="Enter subject " required />
							</div>
							<div className="form-input">
								<input type="email" name="w3lSender" id="w3lSender" placeholder="Enter your email *"
									required />
							</div>
							<div className="form-input">
								<input type="text" name="w3lPhone" id="w3lPhone" placeholder="Enter your Phone Number *"
									required />
							</div>
						</div>
						<div className="form-input mt-4">
							<textarea name="w3lMessage" id="w3lMessage" placeholder="Type your query here"
								required=""></textarea>
						</div>
						<div className="submithny text-right mt-4">
							<button className="btn read-button">Submit Message</button>
						</div>
					</form>
			  </div>

			  <div className="d-grid contact-addres-inf mt-5 pt-lg-4">
				<div className="contact-info-left d-grid">
					<div className="contact-info">
						<div className="icon">
							<span className="fa fa-location-arrow" aria-hidden="true"></span>
						</div>
						<div className="contact-details">
							<h4>Address:</h4>
							<p>Lorem dolor sit, New York, USA</p>
						</div>
					</div>
					<div className="contact-info">
						<div className="icon">
							<span className="fa fa-phone" aria-hidden="true"></span>
						</div>
						<div className="contact-details">
							<h4>Phone:</h4>
							<p><a href="tel:+598-658-456">+598-658-346</a></p>
							<p><a href="tel:+598-658-457">+598-658-436</a></p>
						</div>
					</div>
					<div className="contact-info">
						<div className="icon">
							<span className="fa fa-envelope-open-o" aria-hidden="true"></span>
						</div>
						<div className="contact-details">
							<h4>Mail:</h4>
							<p><a href="mailto:mail@example.com" className="email">info@proshowz.com</a></p>
							<p><a href="mailto:mail@example.com" className="email">proshowz@support.com</a></p>
						</div>
					</div>
				</div>
			</div>
			</div>
		  </div>
		</div>
		<div className="contact-map">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1563262564932!5m2!1sen!2sin" style={{border:'0'}} allowFullScreen=""></iframe>
		</div>
	  </section>
    </div>
  )
}

export default FormContact