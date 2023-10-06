import React from 'react'
import Post from '../Post'
import './tags.css'

function index() {
    return (
        <>
            <div id="___gatsby" className='gatsby'>
                <div tabIndex="-1" id="gatsby-focus-wrapper" style={{ outline: 'none' }}>
                    <div className="viewport">
                        <div className="viewport-top">
                            <main className="site-main tags">
                                <div className="container">
                                    <header className="tags-header">
                                        <div className="tags-header-content">
                                            <h1>Getting Started</h1>
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
    )
}

export default index
