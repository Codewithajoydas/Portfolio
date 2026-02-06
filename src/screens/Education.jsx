import { Helmet } from 'react-helmet-async';
import '../styles/css/components/Education.css';
const Education = () => {
     return (
          <>
               <Helmet>
                    <title>Education | Codewithajoydas</title>

                    {/* Basic SEO */}
                    <meta
                         name="description"
                         content="Educational background of Ajoy Das, covering formal education, self-learning journey, and continuous study in software engineering, JavaScript, and system fundamentals."
                    />
                    <meta
                         name="keywords"
                         content="Ajoy Das education, Codewithajoydas education, software engineering education, computer science learning, self taught developer, programming education"
                    />
                    <meta name="author" content="Ajoy Das" />
                    <meta name="robots" content="index, follow" />

                    {/* Canonical */}
                    <link
                         rel="canonical"
                         href="https://codewithajoydas.live/education"
                    />

                    {/* Open Graph */}
                    <meta
                         property="og:title"
                         content="Education | Codewithajoydas"
                    />
                    <meta
                         property="og:description"
                         content="Learn about the educational journey of Ajoy Das, including formal studies and self-driven learning in software engineering and system fundamentals."
                    />
                    <meta property="og:type" content="website" />
                    <meta
                         property="og:url"
                         content="https://codewithajoydas.live/education"
                    />
                    <meta
                         property="og:image"
                         content="https://codewithajoydas.live/logo.png"
                    />

                    {/* Twitter */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta
                         name="twitter:title"
                         content="Education | Codewithajoydas"
                    />
                    <meta
                         name="twitter:description"
                         content="Educational background and learning journey of Ajoy Das in software engineering and computer science."
                    />
                    <meta
                         name="twitter:image"
                         content="https://codewithajoydas.live/logo.png"
                    />
               </Helmet>

               <section className="education">
                    <div className="education-header">
                         <h1>Education</h1>
                         <p>
                              My educational background combines formal
                              academics with continuous self-driven learning,
                              focused on building practical knowledge and
                              long-term technical growth.
                         </p>
                    </div>

                    <div className="education-list">
                         {/* College */}
                         <div className="education-card">
                              <div className="education-image">
                                   <img
                                        src="src\assets\images\photo-1588072432836-e10032774350.jpg"
                                        alt="College"
                                   />
                              </div>
                              <div className="education-content">
                                   <h2>Bachelor’s Degree</h2>
                                   <h3>Amity University</h3>
                                   <span>2023 – 2027</span>
                                   <p>
                                        Completed undergraduate education with a
                                        focus on building a strong academic
                                        foundation. Gained exposure to
                                        structured learning, analytical
                                        thinking, and problem-solving skills
                                        that later supported my transition into
                                        technical and development work.
                                   </p>
                              </div>
                         </div>

                         {/* School */}
                         <div className="education-card">
                              <div className="education-image">
                                   <img
                                        src="src\assets\images\photo-1524995997946-a1c2e315a42f.jpg"
                                        alt="School"
                                   />
                              </div>
                              <div className="education-content">
                                   <h2>Higher Secondary Education</h2>
                                   <h3>Swami Vivekananda Junior College</h3>
                                   <span>2021 – 2023</span>
                                   <p>
                                        Completed higher secondary education
                                        with an emphasis on core subjects and
                                        discipline-based learning. This phase
                                        helped develop consistency, time
                                        management, and a structured approach to
                                        studying and problem solving.
                                   </p>
                              </div>
                         </div>

                         {/* Self Learning */}
                         <div className="education-card">
                              <div className="education-image">
                                   <img
                                        src="src\assets\images\photo-1519389950473-47ba0277781c.jpg"
                                        alt="Self Learning"
                                   />
                              </div>
                              <div className="education-content">
                                   <h2>Self-Driven Learning</h2>
                                   <h3>Web Development & Programming</h3>
                                   <span>Ongoing</span>
                                   <p>
                                        Continuously learning web development
                                        through hands-on practice, personal
                                        projects, and independent study. Focus
                                        areas include JavaScript, CSS, frontend
                                        development, and building real-world
                                        applications with an emphasis on
                                        fundamentals and long-term mastery.
                                   </p>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     );
};

export default Education;
