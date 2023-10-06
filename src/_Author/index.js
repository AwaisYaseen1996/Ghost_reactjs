import React from 'react';
import Post from '../components/Post';

const Author = () => {
    // Define an array of social media platforms with their names and URLs.
    const socialMediaLinks = [
        { name: 'Website', url: 'https://ghost.org' },
        { name: 'Twitter', url: 'https://twitter.com/tryghost' },
        { name: 'Facebook', url: 'https://www.facebook.com/ghost' },
    ];

    return (
        <>
            <div id="___gatsby">
                <div tabIndex="-1" id="gatsby-focus-wrapper" style={{ outline: 'none' }}>
                    <div className="viewport">
                        <div className="viewport-top">
                            <main className="site-main">
                                <div className="container">
                                    <header className="author-header">
                                        <div className="author-header-content">
                                            <h1>Ghost</h1>
                                            <p>You can delete this user to remove all the welcome posts</p>
                                            <div className="author-header-meta">
                                                {/* Use the map function to generate social media links */}
                                                {socialMediaLinks.map((link, index) => (
                                                    <a
                                                        key={index}
                                                        className="author-header-item"
                                                        href={link.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {link.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="author-header-image">
                                            <img src="https://static.ghost.org/v2.0.0/images/ghost.png" alt="Ghost" />
                                        </div>
                                    </header>
                                    {/* Post Component */}
                                    <Post />
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Author;
