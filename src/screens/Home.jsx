import { Helmet } from 'react-helmet-async';
import '../styles/css/components/Home.css';
import { Link, useNavigate } from 'react-router';
const Home = () => {
     const text = 'Scalable Applications';
  
     return (
          <>
               <Helmet>
                    <title>Home | Codewithajoydas</title>

                    {/* Basic SEO */}
                    <meta
                         name="description"
                         content="Codewithajoydas is the personal portfolio of Ajoy Das, a software engineer focused on JavaScript, system fundamentals, low-level computing, and real-world engineering projects."
                    />
                    <meta
                         name="keywords"
                         content="Codewithajoydas, Ajoy Das, software engineer, JavaScript developer, system programming, portfolio, web development"
                    />
                    <meta name="author" content="Ajoy Das" />
                    <meta name="robots" content="index, follow" />

                    {/* Canonical */}
                    <link
                         rel="canonical"
                         href="https://codewithajoydas.live/"
                    />

                    {/* Open Graph */}
                    <meta
                         property="og:title"
                         content="Codewithajoydas | Software Engineer Portfolio"
                    />
                    <meta
                         property="og:description"
                         content="Explore projects, blogs, and system-level insights by Ajoy Das, a software engineer passionate about fundamentals and performance."
                    />
                    <meta property="og:type" content="website" />
                    <meta
                         property="og:url"
                         content="https://codewithajoydas.live/"
                    />
                    <meta
                         property="og:image"
                         content="https://codewithajoydas.live/logo.png"
                    />

                    {/* Twitter */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta
                         name="twitter:title"
                         content="Codewithajoydas | Software Engineer Portfolio"
                    />
                    <meta
                         name="twitter:description"
                         content="Portfolio and blogs by Ajoy Das covering JavaScript, system fundamentals, and real-world software engineering."
                    />
                    <meta
                         name="twitter:image"
                         content="https://codewithajoydas.live/logo.png"
                    />
               </Helmet>

               <div className="hero_banner">
                    {/* <video src="\src\assets\221965_small.mp4" loop autoPlay></video> */}
                    <div>
                         {' '}
                         <p>Hi 👋, I'm Ajoy Das,</p>
                         <h1 className="hero_text">
                              Designing and building reliable,
                              <span
                                   style={{
                                        borderRadius: '15px',
                                   }}>
                                   {' '}
                                   {text.split('').map((char, index) => (
                                        <span key={index} className="char">
                                             {char === ' ' ? '\u00A0' : char}
                                        </span>
                                   ))}
                              </span>{' '}
                              from frontend to backend.
                         </h1>
                         <p>
                              I focus on writing clean, maintainable code and
                              creating thoughtful user experiences. My work
                              combines solid engineering principles with
                              practical problem-solving to deliver applications
                              that are efficient, adaptable, and built to last.
                         </p>
                         <div className="btns">
                              <button>
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
                                        class="lucide lucide-equal-approximately-icon lucide-equal-approximately">
                                        <path d="M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" />
                                        <path d="M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" />
                                   </svg>
                                   <Link to={'/about'}>About Me</Link>
                              </button>
                              <button>
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
                                        class="lucide lucide-file-user-icon lucide-file-user">
                                        <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
                                        <path d="M14 2v5a1 1 0 0 0 1 1h5" />
                                        <path d="M16 22a4 4 0 0 0-8 0" />
                                        <circle cx="12" cy="15" r="3" />
                                   </svg>
                                   <a
                                        href="/Ajoy_Das_Software_Developer_Resume.pdf"
                                        download="Resume_Ajoy_Das.pdf">
                                        Download Resume
                                   </a>
                              </button>
                         </div>
                    </div>
                    <div>
                         <img
                              src="src\assets\images\codewithajoydas.png"
                              alt=""
                         />
                    </div>
               </div>
          </>
     );
};

export default Home;
