import { Helmet } from 'react-helmet-async';
import '../styles/css/components/Projects.css';
import kodhra from '/src/assets/images/Kodhra.png';
import cssProjects from '/src/assets/images/css.png';
import liveCodeCraft from '/src/assets/images/livecodecraft.png';
const Projects = () => {
     return (
          <>
               <Helmet>
                    <title>Projects | Codewithajoydas</title>

                    {/* Basic SEO */}
                    <meta
                         name="description"
                         content="Projects by Ajoy Das showcasing real-world software engineering, including web applications, system-level tools, JavaScript projects, and performance-focused solutions."
                    />
                    <meta
                         name="keywords"
                         content="Ajoy Das projects, Codewithajoydas projects, software engineering projects, JavaScript projects, React projects, system programming, portfolio"
                    />
                    <meta name="author" content="Ajoy Das" />
                    <meta name="robots" content="index, follow" />

                    {/* Canonical */}
                    <link
                         rel="canonical"
                         href="https://codewithajoydas.live/projects"
                    />

                    {/* Open Graph */}
                    <meta
                         property="og:title"
                         content="Projects | Codewithajoydas"
                    />
                    <meta
                         property="og:description"
                         content="Explore real-world software projects built by Ajoy Das, focused on fundamentals, system design, and practical engineering."
                    />
                    <meta property="og:type" content="website" />
                    <meta
                         property="og:url"
                         content="https://codewithajoydas.live/projects"
                    />
                    <meta
                         property="og:image"
                         content="https://codewithajoydas.live/logo.png"
                    />

                    {/* Twitter */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta
                         name="twitter:title"
                         content="Projects | Codewithajoydas"
                    />
                    <meta
                         name="twitter:description"
                         content="Software engineering projects by Ajoy Das, covering JavaScript, system fundamentals, and real-world problem solving."
                    />
                    <meta
                         name="twitter:image"
                         content="https://codewithajoydas.live/logo.png"
                    />
               </Helmet>

               <div className="projects">
                    <h1>Projects</h1>
                    <p>
                         A curated collection of projects focused on real-world
                         problems, system design, and practical engineering
                         fundamentals.
                    </p>
                    <div className="p-items">
                         <div className="p-item">
                              <div className="item-banner">
                                   <img
                                        src={kodhra}
                                        alt="This is kodhra"
                                        width={'700px'}
                                   />
                              </div>
                              <div className="item-body">
                                   <h3>Web Application</h3>
                                   <h2>KODHRA</h2>
                                   <p>
                                        Kodhra is a modern code snippet manager
                                        designed to help developers organize,
                                        search, and reuse their code efficiently
                                        across projects. It allows you to store
                                        snippets by language, category, and
                                        purpose, making frequently used
                                        solutions easy to find when you need
                                        them. With a clean interface and fast
                                        search, Kodhra reduces context switching
                                        and saves valuable development time.
                                        Whether you are working on web, backend,
                                        or desktop applications, Kodhra acts as
                                        a centralized knowledge base for your
                                        personal and professional code.
                                   </p>
                                   <button
                                        onClick={() =>
                                             window.location.assign(
                                                  'https://kodhra.codewithajoydas.live',
                                                  '_blank',
                                             )
                                        }>
                                        Visit Site
                                   </button>
                              </div>
                         </div>
                         <div className="p-item">
                              <div className="item-body">
                                   <h3>Web Application</h3>
                                   <h2>CSS Projects Collection</h2>
                                   <p>
                                        This project is a vast collection of
                                        carefully crafted CSS projects focused
                                        on building strong layout, animation,
                                        and visual design skills. It includes a
                                        wide range of examples such as
                                        responsive components, modern UI
                                        sections, hover effects, transitions,
                                        and small interactive layouts built
                                        using pure CSS. The collection is
                                        designed to help developers understand
                                        how CSS works in real-world scenarios,
                                        from basic styling principles to
                                        advanced techniques like flexbox, grid,
                                        animations, and custom UI patterns. Each
                                        project serves as a practical reference
                                        and learning resource for improving CSS
                                        mastery through hands-on
                                        experimentation.
                                   </p>
                                   <button
                                        onClick={() =>
                                             window.location.assign(
                                                  'https://cssprojects.codewithajoydas.live',
                                                  '_blank',
                                             )
                                        }>
                                        Visit Site
                                   </button>
                              </div>

                              <div className="item-banner">
                                   <img
                                        src={cssProjects}
                                        alt=""
                                        width={'600px'}
                                        className="asas"
                                   />
                              </div>
                         </div>
                         <div className="p-item">
                              <div className="item-banner">
                                   <img
                                        src={liveCodeCraft}
                                        alt=""
                                        width={'750px'}
                                        className="sdsd"
                                   />
                              </div>
                              <div className="item-body">
                                   <h3>Web Application</h3>
                                   <h2>LiveCodeCraft</h2>
                                   <p>
                                        LiveCodeCraft is an interactive web
                                        application focused on practicing and
                                        experimenting with code in a live
                                        environment. It allows developers to
                                        write, edit, and test code in real time,
                                        making it easier to understand how
                                        changes affect output instantly. The
                                        platform is designed to support learning
                                        through hands-on exploration, whether
                                        you are experimenting with small logic
                                        blocks, UI behavior, or basic
                                        application flows. LiveCodeCraft helps
                                        reduce the gap between writing code and
                                        seeing results, encouraging faster
                                        learning and better problem-solving
                                        through continuous practice.
                                   </p>
                                   <button
                                        onClick={() =>
                                             window.location.assign(
                                                  'https://codewithajoydas.github.io/LiveCodeCraft',
                                                  '_blank',
                                             )
                                        }>
                                        Visit Site
                                   </button>
                              </div>
                         </div>
                    </div>
                    <p
                         className="moretocome"
                         style={{
                              textAlign: 'center',
                              color: '#42475b',
                              margin: '20px 0px',
                         }}>
                         More to come
                    </p>
               </div>
          </>
     );
};

export default Projects;
