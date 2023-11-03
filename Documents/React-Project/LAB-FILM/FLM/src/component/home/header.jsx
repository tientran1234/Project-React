import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
    const [isChecked, setIsChecked] = useState(false);
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const searchItems = [
        'Action',
        'Drama',
        'Family',
        'Thriller',
        'Comedy',
        'Romantic',
        'Tv-Series',
        'Horror',
        // Thêm các mục khác nếu cần
    ];
    const searchItemMenu = [
        {
            name:'Home',
            link:"/",
        },
        {
            name:  'About',
            link:"/about"
        },
        {
            name:'Genre',
            link:"/genre"
        },
        {
            name:'Contact',
            link:"/contact"
        }

        
      
        
        
        // Thêm các mục khác nếu cần
    ];
    // Hàm để hiển thị phần tìm kiếm
    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
          document.documentElement.setAttribute('data-theme', currentTheme);
          if (currentTheme === 'dark') {
            setIsChecked(true);
          }
        }
      }, []);
    
      const showSearch = () => {
        setIsSearchVisible(true);
      };
    
      const hideSearch = () => {
        setIsSearchVisible(false);
      };
    
      const handleCheckboxChange = () => {
        const newTheme = isChecked ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        setIsChecked(!isChecked);
      };
    return (
        <div>
            <header id="site-header" className="w3l-header fixed-top">

                <nav className="navbar navbar-expand-lg navbar-light fill px-lg-0 py-0 px-3">
                    <div className="container">
                        <h1><a className="navbar-brand" href="index.html"><span className="fa fa-play icon-log"
                            aria-hidden="true"></span>
                            ProShowz </a></h1>


                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            <span className="fa icon-expand fa-bars"></span>
                            <span className="fa icon-close fa-times"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                {searchItemMenu.map((item, index) => (
                                    <li key={index} className="nav-item">
                                       <Link className="nav-link" to={item.link}>{item.name}</Link>
                                    </li>
                                ))}
                            </ul>


                            <div className="search-right">
                                <Link to="login" className="btn search-hny mr-lg-3 mt-lg-0 mt-4"><span style={{padding:10}}><AccountCircleIcon/></span>Login</Link>
                                

                                {/* <div id="search" className={`pop-overlay ${isSearchVisible ? 'visible' : ''}`}>
                                    <div className="popup">
                                        <form action="#" method="post" className="search-box">
                                            <input type="search" placeholder="Search your Keyword" name="search"
                                                required="required" autoFocus="" />
                                            <button type="submit" className="btn"><span className="fa fa-search"
                                                aria-hidden="true"></span></button>
                                        </form>
                                        <div className="browse-items">
                                            <h3 className="hny-title two mt-md-5 mt-4">Browse all:</h3>
                                            <ul className="search-items">
                                                {searchItems.map((item, index) => (
                                                    <li key={index}><a href="genre.html">{item}</a></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <a className="close" href="#close" onClick={hideSearch}>×</a>
                                </div> */}

                            </div>


                        </div>

                        <div className="mobile-position">
                            <nav className="navigation">
                                <div className="theme-switch-wrapper">

                                    <label className="theme-switch" htmlFor="checkbox">
                                        <input
                                            type="checkbox"
                                            id="checkbox"
                                            checked={isChecked}
                                            onChange={handleCheckboxChange}
                                        />
                                        <div className="mode-container">
                                            <i className="gg-sun"></i>
                                            <i className="gg-moon"></i>
                                        </div>
                                    </label>
                                </div>
                            </nav>
                        </div>

                    </div>
                </nav>

            </header>
        </div>
    )
}

export default Header