import React from 'react';
import './header.css';
import Navbar from '../Navbar';

const socialLinks = [
    { name: 'Twitter', url: 'https://twitter.com/tryghost', icon: 'https://gatsby.ghost.org/images/icons/twitter.svg' },
    { name: 'Facebook', url: 'https://www.facebook.com/ghost', icon: 'https://gatsby.ghost.org/images/icons/facebook.svg' },
    { name: 'RSS Feed', url: 'https://feedly.com/i/subscription/feed/http://localhost:8000/rss/', icon: 'https://gatsby.ghost.org/images/icons/rss.svg' },
];

const Header = () => {
    return (
        <>
            <div className='viewport-top header'>
                <header className="site-head" style={{ backgroundImage: 'url("https://static.ghost.org/v1.0.0/images/blog-cover.jpg")' }}>
                    <div className="container">
                        <div className="site-mast">
                            <div className="site-mast-left">
                                <a aria-current="page" className="" href="/">
                                    <img className="site-logo" src="https://gatsby.ghost.io/content/images/2022/05/ghost-logo-lime-wh-01.png" alt="Ghost & Gatsby" />
                                </a>
                            </div>
                            <div className="site-mast-right">
                                {socialLinks.map((link, index) => (
                                    <a key={index} href={link.url} className="site-nav-item" target="_blank" rel="noopener noreferrer">
                                        <img className="site-nav-icon" src={link.icon} alt={link.name} />
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="site-banner">
                            <h1 className="site-banner-title">Ghost & Gatsby</h1>
                            <p className="site-banner-desc">Thoughts, stories, and JAMstack</p>
                        </div>
                        <Navbar />
                    </div>
                </header>

            </div>
        </>
    );
}

export default Header;
