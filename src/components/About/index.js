import React from 'react'
import './about.css';

function index() {
    return (
        <>
            <main class="site-main about">
                <div class="container">
                    <article class="content">
                        <figure class="post-feature-image">
                            <img src="https://gatsby.ghost.io/content/images/2019/01/ghost-headless-feature-image.png" alt="About Ghost + Gatsby" />
                        </figure>
                        <section class="post-full-content">
                            <h1 class="content-title">About Ghost + Gatsby</h1>
                            <section class="content-body load-external-scripts">
                                <p class="first_section">Use Ghost as a completely decoupled headless CMS and bring your own front-end written in
                                    <a href="https://gatsbyjs.org/?ref=gatsby.ghost.io">Gatsby.js</a>
                                </p>&nbsp;

                                <h2 id="build-an-api-driven-static-site">Build an API driven static-site</h2>
                                <p class="second_section">There has been a lot of progress around static site generators, front end frameworks and
                                    API-centric infrastructure in recent years, which has generated some very cool products, like
                                    Gatsby. Since Ghost allows you to completely replace its default Handlebars theme layer in favour
                                    of a front-end framework, you can use Gatsby to build your site statically from the Ghost API.
                                </p>
                                <figure class="kg-card kg-image-card">
                                    <img src="https://gatsby.ghost.io/content/images/2019/01/headless-ghost.png" class="kg-image" alt="" loading="lazy" />
                                </figure>

                                <h2 id="the-headless-cms-revolution">The headless-cms revolution</h2>
                                <p class="thrid_section">Using a static site generator usually involves storing Markdown files locally in the code
                                    repository. This would involve using a code editor to write content and a GIT workflow to publish -
                                    which works fine for small sites or developers. However, it's not ideal for professional publishers
                                    that need to scale. This is where a headless CMS comes in!
                                </p> &nbsp;

                                <p class="fourth_section">Instead, you can use Ghost for
                                    authoring, and then build out your front-end in Gatsby to pull content from the Ghost API. This
                                    provides several benefits for publishers:
                                </p>&nbsp;

                                <ul class="list_details">
                                    <li>Developers can use their preferred stack</li>
                                    <li>Writers have their preferred editor &amp; content management</li>
                                    <li>Performance is the maximum possible </li><li>Security is the maximum possible </li>
                                    <li>Your site will be extremely scalable </li>
                                </ul>&nbsp;

                                <p className='fifth_section'>Building sites in this way has become known as the
                                    <a href="https://jamstack.org/?ref=gatsby.ghost.io">JAMstack</a> -
                                    (as in <strong>J</strong>avaScript, <strong>A</strong>PIs,
                                    <strong>M</strong>arkup). When you look at the bigger picture of
                                    <a href="https://www.gatsbyjs.org/blog/2018-10-04-journey-to-the-content-mesh/?ref=gatsby.ghost.io">
                                        the content mesh
                                    </a>,
                                    it really starts to feel like an inevitable future for building websites.
                                </p>&nbsp;

                                <h2 id="official-gatsby-js-source-plugin-starter">
                                    Official Gatsby.js Source Plugin + Starter
                                </h2>
                                <p className='sixth_section'>
                                    We rebuilt our entire <a href="https://ghost.org/docs/?ref=gatsby.ghost.io">Ghost Docs</a>
                                    site with a front-end written in <a href="https://gatsbyjs.org/?ref=gatsby.ghost.io">
                                        Gatsby.js</a>
                                    - which is a great example of what can be achieved with Ghost and Gatsby in the wild.
                                    We also shipped a few things to help others build their own sites using the same stack:
                                </p>&nbsp;
                                <h3 id="-gatsby-source-ghost-plugin">⚡
                                    <a href="https://github.com/tryghost/gatsby-source-ghost?ref=gatsby.ghost.io">
                                        gatsby-source-ghost
                                    </a>
                                    plugin
                                </h3>
                                <p className='sub_section'>A straightforward Gatsby source plugin which wraps the Ghost API and makes it

                                    compatible with Gatsby and GraphQL, so it's quick and easy to load all your Ghost
                                    data into any Gatsby project.
                                </p>&nbsp;
                                <h3 id="-gatsby-starter-ghost">⚡
                                    <a href="https://github.com/tryghost/gatsby-starter-ghost?ref=gatsby.ghost.io">
                                        gatsby-starter-ghost
                                    </a>
                                </h3>
                                <p className='sub_ssection'>
                                    An official
                                    <a href="https://github.com/tryghost/gatsby-starter-ghost?ref=gatsby.ghost.io">
                                        Gatsby starter repository
                                    </a>
                                    which is pre-configured to get content from Ghost and output it in a clean,
                                    blog-style design. The fastest way to get up and running with Gatsby and
                                    Ghost is to fork this repository, and check out our
                                    <a href="https://ghost.org/docs/jamstack/gatsby/?ref=gatsby.ghost.io">
                                        Gatsby docs
                                    </a>.
                                </p>&nbsp;

                                <h2 id="official-netlify-support">Official Netlify Support</h2>
                                <p className='seven_section'>Deploying a static site with Gatsby and Ghost should be easy - so
                                    we've partnered with Netlify, which we also use for Ghost Docs:
                                </p>&nbsp;

                                <h3 id="-netlify-integration-for-ghost">⚡
                                    <a href="https://ghost.org/integrations/netlify/?ref=gatsby.ghost.io">
                                        Netlify integration for Ghost
                                    </a>
                                </h3>
                                <p className='sub_section'>The official integration guide for Netlify &nbsp;explains how
                                    to set up outgoing webhooks in Ghost to trigger a site rebuild
                                    on Netlify. This means that any time you publish,
                                    update or remove any content in Ghost, the front end will
                                    update.
                                </p>&nbsp;

                                <h2 id="future-proof-publishing">Future-proof publishing</h2>
                                <p className='sub_section'>Converging disparate technologies under a single front-end centralises otherwise decentralised services
                                    in a way which caters predominantly to the needs of the site owner, rather than the platform and
                                    fosters flexibility and scalability.
                                </p>&nbsp;
                                <figure class="kg-card kg-image-card">
                                    <img src="https://gatsby.ghost.io/content/images/2019/01/ghost-jamstack.png"
                                        class="kg-image" alt="" loading="lazy" />
                                </figure>
                                <p>No more platform-specific plugins and extensions. Just one front-end, and many APIs; all
                                    connected together and served as a single site or application with Gatsby!
                                </p>
                                <p></p>
                                <p></p>
                                <p></p>
                            </section>
                        </section>
                    </article>
                </div>
            </main>

        </>
    )
}

export default index
