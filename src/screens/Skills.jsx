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

     const buttonRef = useRef(null);
     const cardWidth = 400;
     const leftScroll = () => {
          console.log(buttonRef.current.scrollLeft);
          console.log(buttonRef.current.scrollWidth);
          if(buttonRef.current.scrollWidth >= buttonRef.current.scrollLeft ){
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
                    <div className="skillsContainer"
                         style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                         }}>
                         <div>
                              <h1>Skills</h1>
                              <p>
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
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-target-icon lucide-target">
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
                                   stroke-width="2"
                                   stroke-linecap="round"
                                   stroke-linejoin="round"
                                   class="lucide lucide-chevron-left-icon lucide-chevron-left">
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
                                   stroke-width="2"
                                   stroke-linecap="round"
                                   stroke-linejoin="round"
                                   class="lucide lucide-chevron-right-icon lucide-chevron-right">
                                   <path d="m9 18 6-6-6-6" />
                              </svg>
                         </div>
                    </div>
               </div>
          </>
     );
};

export default Skills;
