import React from 'react';
import './footer.css';

const Footer = () => {
    const links = [
        { text: 'Home', href: '/' },
        { text: 'Tag', href: '/tag/getting-started/' },
        { text: 'Author', href: '/author/ghost/' },
        { text: 'Help', href: 'https://ghost.org/docs/' },
    ];

    return (
        <>
            <div className='viewport-bottom'>
                <div className="viewport-bottom">
                    <footer className="site-foot">
                        <div className="site-foot-nav container">
                            <div className="site-foot-nav-left">
                                <a aria-current="page" className="" href="/">
                                    Ghost &amp; Gatsby
                                </a>
                                © 2021 — Published with{' '}
                                <a
                                    className="site-foot-nav-item"
                                    href="https://ghost.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Ghost
                                </a>
                            </div>
                            <div className="site-foot-nav-right">
                                {links.map((link, index) => (
                                    <a
                                        key={index}
                                        aria-current="page"
                                        className="site-foot-nav-item"
                                        href={link.href}
                                    >
                                        {link.text}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default Footer;
