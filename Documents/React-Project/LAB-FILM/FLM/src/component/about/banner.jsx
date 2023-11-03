import React, { useState, useEffect } from 'react';


function Banner() {
    const [movieCount, setMovieCount] = useState(0);
  const [showCount, setShowCount] = useState(0);
  const [memberCount, setMemberCount] = useState(0);
  const [yearOfUse, setYearOfUse] = useState(0);

  useEffect(() => {
    // Sử dụng setInterval để tăng giá trị của các số tự động mỗi giây
    const interval = setInterval(() => {
      if (movieCount < 65) {
        setMovieCount(movieCount + 1);
      }
      if (showCount < 165) {
        setShowCount(showCount + 1);
      }
      if (memberCount < 463) {
        setMemberCount(memberCount + 1);
      }
      if (yearOfUse < 1200) {
        setYearOfUse(yearOfUse + 1);
      }
    }, 10); // Mỗi 1000ms (1 giây)

    // Xóa interval khi component unmount để tránh memory leak
    return () => clearInterval(interval);
  }, [movieCount, showCount, memberCount, yearOfUse]);
  return (
    <div>
        <div className="w3l-ab-grids py-5">
		<div className="container py-lg-4">
			<div className="row ab-grids-sec align-items-center">
				<div className="col-lg-6 ab-right">
					<img className="img-fluid" src="../../../src/assets/images/banner1.jpg"/>
				</div>
				<div className="col-lg-6 ab-left pl-lg-4 mt-lg-0 mt-5">
					<h3 className="hny-title">Great Entertainment</h3>
					<p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam id quisquam ipsam
						molestiae ad eius accusantium? Nulla dolorem perferendis inventore! posuere cubilia Curae;
						Nunc non risus in justo convallis feugiat.</p>
					<div className="ready-more mt-4">
						<a href="#" className="btn read-button">Read More <span className="fa fa-angle-double-right ml-2" aria-hidden="true"></span></a>
					</div>
				</div>
			</div>
		   
			<div className="w3l-counter-stats-info text-center">
				<div className="stats_left">
					<div className="counter_grid">
						<div className="icon_info">
							<p className="counter">{movieCount}</p>
							<h4>Movies</h4>

						</div>
					</div>
				</div>
				<div className="stats_left">
					<div className="counter_grid">
						<div className="icon_info">
							<p className="counter">{showCount}</p>
							<h4>Shows</h4>

						</div>
					</div>
				</div>
				<div className="stats_left">
					<div className="counter_grid">
						<div className="icon_info">
							<p className="counter">{memberCount}</p>
							<h4>Members</h4>

						</div>
					</div>
				</div>
				<div className="stats_left">
					<div className="counter_grid">
						<div className="icon_info">
							<p className="counter">{yearOfUse}</p>
							<h4>Year of Use</h4>

						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
    </div>
  )
}

export default Banner