import { Link } from 'react-router';
import '../styles/css/components/About.css';
import { Helmet } from 'react-helmet-async';
const About = () => {
     return (
          <>
               <Helmet>
                    <title>About | Codewithajoydas</title>

                    <meta
                         name="description"
                         content="About Ajoy Das – software engineer focused on system fundamentals, JavaScript, low-level computing, and real-world engineering projects."
                    />
                    <meta
                         name="keywords"
                         content="Ajoy Das, Codewithajoydas, software engineer, JavaScript, system programming, portfolio"
                    />
                    <meta name="author" content="Ajoy Das" />
                    <meta name="robots" content="index, follow" />

                    <link
                         rel="canonical"
                         href="https://codewithajoydas.live/about"
                    />

                    <meta
                         property="og:title"
                         content="About | Codewithajoydas"
                    />
                    <meta
                         property="og:description"
                         content="Learn more about Ajoy Das, a software engineer focused on fundamentals and system-level thinking."
                    />
                    <meta property="og:type" content="website" />
                    <meta
                         property="og:url"
                         content="https://codewithajoydas.live/about"
                    />
                    <meta
                         property="og:image"
                         content="https://codewithajoydas.live/logo.png"
                    />

                    <meta name="twitter:card" content="summary_large_image" />
                    <meta
                         name="twitter:title"
                         content="About | Codewithajoydas"
                    />
                    <meta
                         name="twitter:description"
                         content="About Ajoy Das – software engineer passionate about fundamentals and performance."
                    />
                    <meta
                         name="twitter:image"
                         content="https://codewithajoydas.live/logo.png"
                    />
               </Helmet>
               <div className="about">
                    <div className="about__container">
                         <h1>Who Is Codewithajoydas?</h1>
                         <img
                              src="\logo.png"
                              alt="Codewithajoydas"
                              style={{ float: 'right', width: 400 }}
                              className="about__img"
                         />
                         <p>
                              Codewithajoydas is the personal brand of Ajoy Das,
                              a developer focused on designing and building
                              reliable, scalable applications from frontend to
                              backend. The brand represents a disciplined,
                              engineering-first approach to software
                              development—where clarity, maintainability, and
                              long-term thinking matter more than short-lived
                              trends. Codewithajoydas is not about flashy demos
                              or over-engineered solutions. It stands for clean
                              architecture, thoughtful user experiences, and
                              systems that are built to grow without constant
                              rewrites. Every project under this name reflects a
                              commitment to practical problem-solving, readable
                              code, and professional standards. Through
                              Codewithajoydas, Ajoy shares his work, ideas, and
                              projects, aiming to create software that is
                              dependable, adaptable, and built to last—whether
                              for personal products, real-world applications, or
                              collaborative development.
                         </p>
                         <div className="btns">
                              <button style={{ background: 'white' }}>
                                   <Link
                                        to="/education"
                                        style={{
                                             display: 'flex',
                                             justifyContent: 'center',
                                             alignItems: 'center',
                                             gap: '10px',
                                        }}>
                                        {' '}
                                        <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width="24"
                                             height="24"
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke=""
                                             stroke-width="2"
                                             stroke-linecap="round"
                                             stroke-linejoin="round"
                                             class="lucide lucide-book-open-icon lucide-book-open">
                                             <path d="M12 7v14" />
                                             <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                                        </svg>
                                        Education
                                   </Link>
                              </button>
                              <button
                                   style={{
                                        background: '#42475b',
                                        color: 'white',
                                   }}
                                   className="projectBtn">
                                   <Link
                                        to="/projects"
                                        style={{
                                             display: 'flex',
                                             justifyContent: 'center',
                                             alignItems: 'center',
                                             gap: '10px',
                                             color: 'white',
                                        }}>
                                        {' '}
                                        <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width="24"
                                             height="24"
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="white"
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
                    </div>
                    <div className="philosophy">
                         I believe good software is built through clarity, not
                         complexity. My focus is on clean architecture, readable
                         code, and systems that scale naturally over time.
                    </div>
               </div>
          </>
     );
};

export default About;
