import { Helmet } from 'react-helmet-async';
import '../styles/css/components/Experience.css';
const Experience = () => {
     return (
          <>
               <Helmet>
                    <title>Experience | Codewithajoydas</title>

                    {/* Basic SEO */}
                    <meta
                         name="description"
                         content="Professional experience of Ajoy Das as a software engineer, highlighting hands-on work in JavaScript, system fundamentals, web development, and real-world engineering projects."
                    />
                    <meta
                         name="keywords"
                         content="Ajoy Das experience, Codewithajoydas experience, software engineer experience, JavaScript developer experience, web development career, engineering experience"
                    />
                    <meta name="author" content="Ajoy Das" />
                    <meta name="robots" content="index, follow" />

                    {/* Canonical */}
                    <link
                         rel="canonical"
                         href="https://codewithajoydas.live/experience"
                    />

                    {/* Open Graph */}
                    <meta
                         property="og:title"
                         content="Experience | Codewithajoydas"
                    />
                    <meta
                         property="og:description"
                         content="Explore the professional experience and engineering journey of Ajoy Das, focused on fundamentals, responsibility, and real-world problem solving."
                    />
                    <meta property="og:type" content="website" />
                    <meta
                         property="og:url"
                         content="https://codewithajoydas.live/experience"
                    />
                    <meta
                         property="og:image"
                         content="https://codewithajoydas.live/logo.png"
                    />

                    {/* Twitter */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta
                         name="twitter:title"
                         content="Experience | Codewithajoydas"
                    />
                    <meta
                         name="twitter:description"
                         content="Professional software engineering experience of Ajoy Das, covering JavaScript, system fundamentals, and real-world development."
                    />
                    <meta
                         name="twitter:image"
                         content="https://codewithajoydas.live/logo.png"
                    />
               </Helmet>

               <section className="experience">
                    <div className="experience-header">
                         <h1>Experience</h1>
                         <p>
                              A combination of professional responsibility and
                              self-driven development, focused on continuous
                              learning and practical execution.
                         </p>
                    </div>

                    <div className="experience-list">
                         {/* Job 1 */}
                         <div className="experience-card">
                              <div className="experience-time">
                                   2023 – Present
                              </div>

                              <div className="experience-content">
                                   <h2>MIS Executive</h2>
                                   <h3>Genus Power Infrastructures Ltd.</h3>
                                   <p>
                                        Working as an MIS Executive responsible
                                        for maintaining, organizing, and
                                        validating operational data across
                                        internal systems. Regularly preparing
                                        structured reports, ensuring data
                                        accuracy, and supporting team
                                        coordination through consistent
                                        information flow. This role has
                                        strengthened my analytical thinking,
                                        attention to detail, and
                                        process-oriented approach.
                                   </p>
                              </div>
                         </div>

                         {/* Job 2 */}
                         <div className="experience-card">
                              <div className="experience-time">
                                   2022 – Present
                              </div>

                              <div className="experience-content">
                                   <h2>Self-Taught Web Developer</h2>
                                   <h3>
                                        Personal Projects & Continuous Learning
                                   </h3>
                                   <p>
                                        Actively learning and building web
                                        applications through hands-on projects.
                                        Focused on JavaScript fundamentals, CSS
                                        layouts, responsive design, and
                                        application structure. Built multiple
                                        personal projects including UI
                                        components, CSS collections, and
                                        developer tools while continuously
                                        improving code quality, design
                                        consistency, and problem-solving skills.
                                   </p>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     );
};

export default Experience;
