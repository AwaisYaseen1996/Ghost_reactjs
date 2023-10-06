import React from 'react';
import './post.css';

const posts = [
  // 1
  {
    href: '/about/',
    imageSrc: 'https://gatsby.ghost.io/content/images/2019/01/ghost-headless-feature-image.png',
    tags: [],
    title: 'About Ghost + Gatsby',
    excerpt: 'Build an API driven static-site with Gatsby.js and use Ghost as a completely decoupled headless CMS. Read more about how it works and how to use this starter theme here!',
    author: 'Ghost',
    readTime: '2 min read',
  },
  // 2
  {
    href: '/welcome/',
    imageSrc: 'https://static.ghost.org/v3.0.0/images/welcome-to-ghost.png',
    tags: ['Getting Started'],
    title: 'Welcome to Ghost',
    excerpt: "Welcome, it's great to have you here. We know that first impressions are important, so we've populated your new site with some initial getting started posts that will help you get familiar with everything in no time.",
    author: 'Ghost',
    readTime: '1 min read',
  },
  // 3
  {
    href: '/the-editor/',
    imageSrc: 'https://static.ghost.org/v3.0.0/images/writing-posts-with-ghost.png',
    tags: ['Getting Started'],
    title: 'Writing posts with Ghost ✍️',
    excerpt: "Discover familiar formatting options in a functional toolbar and the ability to add dynamic content seamlessly.",
    author: 'Ghost',
    readTime: '3 min read',
  },
  // 4
  {
    href: '/publishing-options/',
    imageSrc: 'https://static.ghost.org/v3.0.0/images/publishing-options.png',
    tags: ['Getting Started'],
    title: 'Publishing options',
    excerpt: "The Ghost editor post settings menu has everything you need to fully optimise and distribute your content effectively.",
    author: 'Ghost',
    readTime: '2 min read'
  },
  // 5
  {
    href: '/admin-settings/',
    imageSrc: 'https://static.ghost.org/v3.0.0/images/admin-settings.png',
    tags: ['Getting Started'],
    title: 'Managing admin settings',
    excerpt: "There are a couple of things to do next while you're getting set up: making your site private and inviting your team.",
    author: 'Ghost',
    readTime: '2 min read'
  },
  // 6
  {
    href: '/organising-content/',
    imageSrc: 'https://static.ghost.org/v3.0.0/images/organising-your-content.png',
    tags: ['Getting Started'],
    title: 'Organising your content',
    excerpt: "Ghost has a flexible organisational taxonomy called tags and the ability to create custom site structures using dynamic routes.",
    author: 'Ghost',
    readTime: '2 min read'
  },
  // 7
  {
    href: '/apps-integrations/',
    imageSrc: 'https://static.ghost.org/v3.0.0/images/app-integrations.png',
    tags: ['Getting Started'],
    title: 'Apps & integrations',
    excerpt: "Work with all your favourite apps and tools or create your own custom integrations using the Ghost API.",
    author: 'Ghost',
    readTime: '2 min read'
  },
  // 8
  {
    href: '/themes/',
    imageSrc: 'https://static.ghost.org/v3.0.0/images/creating-a-custom-theme.png',
    tags: ['Getting Started'],
    title: 'Creating a custom theme',
    excerpt: "Ghost comes with a beautiful default theme designed for publishers which can easily be adapted for most purposes, or you can build a custom theme to suit your needs.",
    author: 'Ghost',
    readTime: '2 min read'
  }
  // Add more post objects here for additional posts
];

const PostCard = ({ post }) => (
  <a className="post-card" href={post.href}>
    <header className="post-card-header">
      <div className="post-card-image" style={{ backgroundImage: `url(${post.imageSrc})` }}></div>
      <div className="post-card-tags">
        {post.tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
      <h2 className="post-card-title">{post.title}</h2>
    </header>
    <section className="post-card-excerpt">{post.excerpt}</section>
    <footer className="post-card-footer">
      <div className="post-card-footer-left">
        <div className="post-card-avatar">
          <img className="author-profile-image" src="https://static.ghost.org/v2.0.0/images/ghost.png" alt="Ghost" />
        </div>
        <span>{post.author}</span>
      </div>
      <div className="post-card-footer-right">
        <div>{post.readTime}</div>
      </div>
    </footer>
  </a>
);

const Post = () => (
  <main className="site-main post">
    <div className="container">
      <section className="post-feed">
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </section>
      <nav className="pagination" role="navigation">
        <div></div>
        <div></div>
      </nav>
    </div>
  </main>
);

export default Post;
