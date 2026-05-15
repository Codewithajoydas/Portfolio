import { Link } from 'react-router';
import '../styles/css/components/Skiils.css';
import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
const Skills = () => {
     const skills = {
          JavaScript: 90,
          HTML5: 100,
          CSS: 100,
          SQL: 65,
          Dart: 55,
          Python: 50,
          NodeJS: 85,
          ElectronJS: 70,
          ReactNative: 70,
          ExpressJS: 80,
          ReactJS: 70,
          SocketIO: 75,
          MongoDB: 75,
          CICD: 65,
          Bash: 55,
          JSON: 85,
          Markdown: 90,
     };
     const simpleIconMap = {
          JavaScript: 'javascript',
          HTML5: 'html5',
          CSS: 'css',
          NodeJS: 'nodedotjs',
          ExpressJS: 'express',
          ReactJS: 'react',
          ReactNative: 'react',
          SocketIO: 'socketdotio',
          MongoDB: 'mongodb',
          ElectronJS: 'electron',
          SQL: 'mysql',
          Python: 'python',
          Dart: 'dart',
          Bash: 'gnubash',
          CICD: 'githubactions',
          JSON: 'json',
          Markdown: 'markdown',
     };
     const simpleIconColorMap = {
          JavaScript: 'f7df1e',
          HTML5: 'e34f26',
          CSS: '663399',

          NodeJS: '339933',
          ExpressJS: '000000',

          ReactJS: '61dafb',
          ReactNative: '61dafb',

          SocketIO: '010101',
          MongoDB: '47a248',
          ElectronJS: '47848f',

          SQL: '4479a1',
          Python: '3776ab',
          Dart: '0175c2',

          Bash: '4eaa25',
          CICD: '2088ff',
          JSON: '000000',
          Markdown: '000000',
     };
     const tools = [
          {
               title: 'VS Code',
               level: 95,
               icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
               description:
                    'My primary code editor for writing and debugging HTML, CSS, and JavaScript. I use extensions like Prettier and Live Server to maintain clean formatting and fast development.',
          },
          {
               title: 'Git',
               level: 95,
               icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
               description:
                    'Used for version control to track changes, manage branches, and maintain structured project history.',
          },
          {
               title: 'GitHub',
               level: 95,
               icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
               description:
                    'Host repositories, collaborate on projects, and manage code safely in the cloud.',
          },
          {
               title: 'Chrome DevTools',
               level: 90,
               icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg',
               description:
                    'Debug layouts, inspect elements, test responsiveness, and analyze performance issues.',
          },
          {
               title: 'npm',
               level: 85,
               icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
               description:
                    'Manage project dependencies and run development scripts for modern JavaScript workflows.',
          },
          {
               title: 'Linux',
               level: 85,
               icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
               description:
                    'Comfortable working in a Linux environment for development, terminal usage, and server-related tasks.',
          },
          {
               title: 'Windows',
               level: 90,
               icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg',
               description:
                    'Daily development environment with strong understanding of system tools and configuration.',
          },
          {
               title: 'Docker',
               level: 80,
               icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
               description:
                    'Create consistent development environments and containerize applications for reliable deployment.',
          },
          {
               title: 'Figma',
               level: 85,
               icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
               description:
                    'Translate UI designs into responsive code and understand layout, spacing, and visual hierarchy.',
          },
          {
               title: 'Terminal',
               level: 85,
               icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
               description:
                    'Use command-line tools for Git, npm, Docker, and system operations to streamline development.',
          },
          {
               title: 'Netlify',
               level: 80,
               icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg',
               description:
                    'Deploy and host front-end projects quickly with continuous deployment from Git repositories.',
          },
          {
               title: 'Vercel',
               level: 80,
               icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
               description:
                    'Deploy modern web applications with optimized builds and automatic updates.',
          },
     ];

     const buttonRef = useRef(null);
     const cardWidth = 400;
     const leftScroll = () => {
          console.log(buttonRef.current.scrollLeft);
          console.log(buttonRef.current.scrollWidth);
          if (buttonRef.current.scrollWidth >= buttonRef.current.scrollLeft) {
               buttonRef.current.scrollBy({ left: 0, behavior: 'smooth' });
          }
          buttonRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
     };
     const rightScroll = () => {
          buttonRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
     };

     useEffect(() => {
          const container = buttonRef.current;

          const onWheel = (e) => {
               e.preventDefault();
               if (e.deltaY < 0) {
                    rightScroll();
               } else {
                    leftScroll();
               }
          };

          container.addEventListener('wheel', onWheel, { passive: false });

          return () => {
               container.removeEventListener('wheel', onWheel);
          };
     }, []);

     return (
          <>
               <Helmet>
                    <title>Skills | Codewithajoydas</title>

                    {/* Basic SEO */}
                    <meta
                         name="description"
                         content="Technical skills of Ajoy Das, including JavaScript, React, Node.js, system fundamentals, low-level computing concepts, and modern web development tools."
                    />
                    <meta
                         name="keywords"
                         content="Ajoy Das skills, Codewithajoydas skills, JavaScript, React, Node.js, system programming, web development, software engineering"
                    />
                    <meta name="author" content="Ajoy Das" />
                    <meta name="robots" content="index, follow" />

                    {/* Canonical */}
                    <link
                         rel="canonical"
                         href="https://codewithajoydas.live/skills"
                    />

                    {/* Open Graph */}
                    <meta
                         property="og:title"
                         content="Skills | Codewithajoydas"
                    />
                    <meta
                         property="og:description"
                         content="Explore the technical skills and engineering strengths of Ajoy Das, focused on fundamentals, performance, and real-world software development."
                    />
                    <meta property="og:type" content="website" />
                    <meta
                         property="og:url"
                         content="https://codewithajoydas.live/skills"
                    />
                    <meta
                         property="og:image"
                         content="https://codewithajoydas.live/logo.png"
                    />

                    {/* Twitter */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta
                         name="twitter:title"
                         content="Skills | Codewithajoydas"
                    />
                    <meta
                         name="twitter:description"
                         content="Technical skills and engineering expertise of Ajoy Das, including JavaScript, system fundamentals, and modern web technologies."
                    />
                    <meta
                         name="twitter:image"
                         content="https://codewithajoydas.live/logo.png"
                    />
               </Helmet>

               <div className="skiles">
                    <div
                         className="skillsContainer"
                         style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                         }}>
                         <div>
                              <h1>Skills</h1>
                              <p style={{ color: '#42475b' }} className="asas">
                                   A practical set of skills shaped by hands-on
                                   experience and continuous learning.
                              </p>
                         </div>
                         <button className="projectsBtn">
                              <Link
                                   to={'/projects'}
                                   style={{ textDecoration: 'none' }}>
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-target-icon lucide-target">
                                        <circle cx="12" cy="12" r="10" />
                                        <circle cx="12" cy="12" r="6" />
                                        <circle cx="12" cy="12" r="2" />
                                   </svg>
                                   Projects
                              </Link>
                         </button>
                    </div>
                    <div
                         className="items"
                         style={{ position: 'relative' }}
                         ref={buttonRef}>
                         <div className="leftbutton" onClick={rightScroll}>
                              <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   width="24"
                                   height="24"
                                   viewBox="0 0 24 24"
                                   fill="none"
                                   stroke="currentColor"
                                   strokeWidth="2"
                                   strokeLinecap="round"
                                   strokeLinejoin="round"
                                   className="lucide lucide-chevron-left-icon lucide-chevron-left">
                                   <path d="m15 18-6-6 6-6" />
                              </svg>
                         </div>
                         {Object.entries(skills).map(([key, value]) => (
                              <div className="circle">
                                   <div
                                        className="bg-color"
                                        style={{
                                             background: `linear-gradient(
  90deg,
  #${simpleIconColorMap[key]} 0%,
  #${simpleIconColorMap[key]} ${value}%,
  #ddd ${value}%,
  #ddd 100%
)`,
                                        }}>
                                        <div className="item" key={key}>
                                             <img
                                                  src={
                                                       key === 'JavaScript'
                                                            ? 'https://toppng.com/uploads/thumbnail/javascript-logo-number-angularjs-node-javascript-logo-11563241338johlif2oij.png'
                                                            : key === 'CSS'
                                                              ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/960px-CSS3_logo.svg.png'
                                                              : `https://cdn.simpleicons.org/${simpleIconMap[key]}`
                                                  }
                                                  alt=""
                                             />
                                             <div className="name">{key}</div>
                                             {/* <div
                                                  className="bar"
                                                  title={value + '%'}>
                                                  <div
                                                       className="progress"
                                                       style={{
                                                            width: `${value}%`,
                                                            background: `#${simpleIconColorMap[key]}`,
                                                            height: '10px',
                                                       }}></div>
                                             </div> */}
                                        </div>
                                   </div>
                              </div>
                         ))}
                         <div className="rightbutton" onClick={leftScroll}>
                              <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   width="24"
                                   height="24"
                                   viewBox="0 0 24 24"
                                   fill="none"
                                   stroke="currentColor"
                                   strokeWidth="2"
                                   strokeLinecap="round"
                                   strokeLinejoin="round"
                                   className="lucide lucide-chevron-right-icon lucide-chevron-right">
                                   <path d="m9 18 6-6-6-6" />
                              </svg>
                         </div>
                    </div>
               </div>
               <div className="tools">
                    <h2 style={{ textAlign: 'center', fontSize: '2rem' }}>
                         Tools
                    </h2>
                    <p>
                         Tools and technologies I use to build reliable,
                         scalable applications.
                    </p>
                    <div className="toolsContainer">
                         {Object.entries(tools).map(([key, value]) => (
                              <div className="item" key={key}>
                                   <img
                                        src={value.icon}
                                        alt={value.title}
                                        width={200}
                                   />
                                   <h3>{value.title}</h3>
                                   <p>{value.description}</p>
                              </div>
                         ))}
                    </div>
               </div>
               <br />
               <div
                    className="why"
                    style={{
                         display: 'flex',
                         justifyContent: 'start',
                         flexDirection: 'column',
                         alignItems: 'start',
                         padding: '10px 70px',
                    }}>
                    <h2 style={{ textAlign: 'center', fontSize: '2rem' }}>
                         Why So Many Tools?
                    </h2>
                    <div
                         className="dx"
                         style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              width: '100%',
                         }}>
                         <p
                              style={{
                                   width: '700px',
                                   // textAlign: 'center',
                                   lineHeight: '1.7',
                              }}>
                              I believe the right tool truly matters. Every
                              technology I learn has a clear purpose — whether
                              it improves performance, enhances workflow
                              efficiency, strengthens collaboration, or
                              simplifies deployment. I don’t explore tools to
                              chase trends or simply expand a list of skills.
                              Instead, I focus on understanding how and when
                              each tool should be used.
                              <br />
                              <br />
                              Modern development requires flexibility and
                              adaptability. Different projects demand different
                              approaches, and having a strong toolkit allows me
                              to choose the most effective solution rather than
                              forcing a single method onto every problem. This
                              mindset helps me write cleaner code, build more
                              maintainable systems, and deliver reliable
                              results.
                              <br />
                              <br />
                              For me, learning tools is not about quantity —
                              it’s about capability. The goal is always the
                              same: build better software with clarity,
                              precision, and purpose.
                         </p>
                         <img
                              src="https://cdn.pixabay.com/photo/2017/03/18/20/02/question-mark-2154831_1280.png"
                              alt=""
                              width={200}
                              style={{ float: 'right' }}
                         />
                    </div>
               </div>
          </>
     );
};

export default Skills;
