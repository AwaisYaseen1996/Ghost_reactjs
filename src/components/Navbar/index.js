import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/header.css'

const Navbar = () => {
    return (
        <>
            <nav className="site-nav">
                <div className="site-nav-left">
                    <ul className='nav_list'>
                        <li className="site-nav-item"><Link to="/">Home</Link></li>
                        <li className="site-nav-item"><Link to="/tag/getting-started">Tag</Link></li>
                        <li className="site-nav-item"><Link to="/author/ghost">Author</Link></li>
                        <li className="site-nav-item"><a href="https://ghost.org/docs" target="_blank" rel="noopener noreferrer">Help</a></li>
                    </ul></div>
                <div className="site-nav-right">
                    <ul className='nav_list'>
                        <li className="site-nav-item"><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    );
};


export default Navbar;
