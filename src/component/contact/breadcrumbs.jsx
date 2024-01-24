import React from 'react'

function Breadcrumbs() {
  return (
    <div>
        <div className="w3l-breadcrumbs">
		<nav id="breadcrumbs" className="breadcrumbs">
			<div className="container page-wrapper">
			<a href="index.html">Home</a> » <span className="breadcrumb_last" aria-current="page">Contact</span>
			</div>
		</nav>
	</div>
    </div>
  )
}

export default Breadcrumbs