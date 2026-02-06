import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import { Helmet } from 'react-helmet-async';
import '../styles/css/components/Blog.css';

const GITHUB_API =
     'https://api.github.com/repositories/1149576770/contents/posts';

const Blog = () => {
     const [posts, setPosts] = useState([]);
     const [activePost, setActivePost] = useState(null);
     const [content, setContent] = useState('');
     const [loading, setLoading] = useState(true);

useEffect(() => {
     (async () => {
          try {
               const res = await fetch(GITHUB_API);
               const files = await res.json();

               const markdownPosts = files.filter((file) =>
                    file.name.endsWith('.md'),
               );

               setPosts(markdownPosts);

               
               if (markdownPosts.length > 0) {
                    loadPost(markdownPosts[0]);
               }

               setLoading(false);
          } catch (err) {
               console.error('Failed to load posts', err);
          }
     })();
}, []);


     const loadPost = async (post) => {
          setActivePost(post.name);

          const res = await fetch(post.download_url);
          const text = await res.text();

          setContent(text);
     };

     if (loading) return <p>Loading blogs...</p>;

     return (
          <>
               <Helmet>
                    <title>Blog | Codewithajoydas</title>

                    {/* Basic SEO */}
                    <meta
                         name="description"
                         content="Technical blogs by Ajoy Das covering JavaScript, system fundamentals, low-level computing, software engineering concepts, and real-world development insights."
                    />
                    <meta
                         name="keywords"
                         content="Ajoy Das blog, Codewithajoydas blog, software engineering blog, JavaScript blog, system programming blog, low level computing articles"
                    />
                    <meta name="author" content="Ajoy Das" />
                    <meta name="robots" content="index, follow" />

                    {/* Canonical */}
                    <link
                         rel="canonical"
                         href="https://codewithajoydas.live/blog"
                    />

                    {/* Open Graph */}
                    <meta
                         property="og:title"
                         content="Blog | Codewithajoydas"
                    />
                    <meta
                         property="og:description"
                         content="Read in-depth technical blogs by Ajoy Das on JavaScript, system fundamentals, and real-world software engineering."
                    />
                    <meta property="og:type" content="website" />
                    <meta
                         property="og:url"
                         content="https://codewithajoydas.live/blog"
                    />
                    <meta
                         property="og:image"
                         content="https://codewithajoydas.live/logo.png"
                    />

                    {/* Twitter */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta
                         name="twitter:title"
                         content="Blog | Codewithajoydas"
                    />
                    <meta
                         name="twitter:description"
                         content="Technical articles and engineering insights by Ajoy Das, focused on fundamentals, performance, and real-world systems."
                    />
                    <meta
                         name="twitter:image"
                         content="https://codewithajoydas.live/logo.png"
                    />
               </Helmet>

               <div className="blog-layout">
                    {/* LEFT: Blog List */}
                    <aside className="blog-list">
                         <h3>Blogs</h3>
                         <ul>
                              {posts.map((post) => (
                                   <li
                                        key={post.sha}
                                        onClick={() => loadPost(post)}
                                        className={
                                             activePost === post.name
                                                  ? 'active'
                                                  : ''
                                        }>
                                        {post.name.replace('.md', '')}
                                   </li>
                              ))}
                         </ul>
                    </aside>

                    {/* RIGHT: Blog Content */}
                    <main className="blog-content">
                         {content ? (
                              <Markdown>{content}</Markdown>
                         ) : (
                              <Markdown>{content}</Markdown>
                         )}
                    </main>
               </div>
          </>
     );
};

export default Blog;
