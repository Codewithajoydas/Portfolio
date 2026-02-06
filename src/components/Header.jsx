import { NavLink, useLocation } from 'react-router';
import '../styles/scss/components/Header.scss';
import { useEffect, useState } from 'react';

const Header = () => {
     const [open, setOpen] = useState(false);
     const location = useLocation();
     useEffect(() => {
          setOpen(false);
     }, [location.pathname]);
     return (
          <header>
               <div className="logo">
                    <img src="/logo.png" alt="Portfolio of Codewithajoydas" />
                    <strong>Codewithajoydas.</strong>
               </div>

               <nav>
                    <ul>
                         <li>
                              <NavLink
                                   to="/"
                                   end
                                   className={({ isActive }) =>
                                        isActive
                                             ? 'nav-link active'
                                             : 'nav-link'
                                   }>
                                   Home
                              </NavLink>
                         </li>

                         <li>
                              <NavLink
                                   to="/about"
                                   className={({ isActive }) =>
                                        isActive
                                             ? 'nav-link active'
                                             : 'nav-link'
                                   }>
                                   About
                              </NavLink>
                         </li>

                         <li>
                              <NavLink
                                   to="/skills"
                                   className={({ isActive }) =>
                                        isActive
                                             ? 'nav-link active'
                                             : 'nav-link'
                                   }>
                                   Skills
                              </NavLink>
                         </li>

                         <li>
                              <NavLink
                                   to="/projects"
                                   className={({ isActive }) =>
                                        isActive
                                             ? 'nav-link active'
                                             : 'nav-link'
                                   }>
                                   Projects
                              </NavLink>
                         </li>

                         <li>
                              <NavLink
                                   to="/experience"
                                   className={({ isActive }) =>
                                        isActive
                                             ? 'nav-link active'
                                             : 'nav-link'
                                   }>
                                   Experience
                              </NavLink>
                         </li>

                         <li>
                              <NavLink
                                   to="/education"
                                   className={({ isActive }) =>
                                        isActive
                                             ? 'nav-link active'
                                             : 'nav-link'
                                   }>
                                   Education
                              </NavLink>
                         </li>

                         <li>
                              <NavLink
                                   to="/blog"
                                   className={({ isActive }) =>
                                        isActive
                                             ? 'nav-link active'
                                             : 'nav-link'
                                   }>
                                   Blog
                              </NavLink>
                         </li>

                         <li>
                              <NavLink
                                   to="/contact"
                                   className={({ isActive }) =>
                                        isActive
                                             ? 'nav-link active'
                                             : 'nav-link'
                                   }>
                                   Contact
                              </NavLink>
                         </li>
                    </ul>
               </nav>
               <div className="hamburger" onClick={() => setOpen(!open)}>
                    {open ? (
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
                              class="lucide lucide-x-icon lucide-x">
                              <path d="M18 6 6 18" />
                              <path d="m6 6 12 12" />
                         </svg>
                    ) : (
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
                              class="lucide lucide-menu-icon lucide-menu">
                              <path d="M4 5h16" />
                              <path d="M4 12h16" />
                              <path d="M4 19h16" />
                         </svg>
                    )}
               </div>

               {open && (
                    <div className="menus">
                         <ul>
                              <li>
                                   <NavLink
                                        to="/"
                                        end
                                        className={({ isActive }) =>
                                             isActive
                                                  ? 'nav-link active'
                                                  : 'nav-link'
                                        }>
                                        Home
                                   </NavLink>
                              </li>

                              <li>
                                   <NavLink
                                        to="/about"
                                        className={({ isActive }) =>
                                             isActive
                                                  ? 'nav-link active'
                                                  : 'nav-link'
                                        }>
                                        About
                                   </NavLink>
                              </li>

                              <li>
                                   <NavLink
                                        to="/skills"
                                        className={({ isActive }) =>
                                             isActive
                                                  ? 'nav-link active'
                                                  : 'nav-link'
                                        }>
                                        Skills
                                   </NavLink>
                              </li>

                              <li>
                                   <NavLink
                                        to="/projects"
                                        className={({ isActive }) =>
                                             isActive
                                                  ? 'nav-link active'
                                                  : 'nav-link'
                                        }>
                                        Projects
                                   </NavLink>
                              </li>

                              <li>
                                   <NavLink
                                        to="/experience"
                                        className={({ isActive }) =>
                                             isActive
                                                  ? 'nav-link active'
                                                  : 'nav-link'
                                        }>
                                        Experience
                                   </NavLink>
                              </li>

                              <li>
                                   <NavLink
                                        to="/education"
                                        className={({ isActive }) =>
                                             isActive
                                                  ? 'nav-link active'
                                                  : 'nav-link'
                                        }>
                                        Education
                                   </NavLink>
                              </li>

                              <li>
                                   <NavLink
                                        to="/blog"
                                        className={({ isActive }) =>
                                             isActive
                                                  ? 'nav-link active'
                                                  : 'nav-link'
                                        }>
                                        Blog
                                   </NavLink>
                              </li>

                              <li>
                                   <NavLink
                                        to="/contact"
                                        className={({ isActive }) =>
                                             isActive
                                                  ? 'nav-link active'
                                                  : 'nav-link'
                                        }>
                                        Contact
                                   </NavLink>
                              </li>
                         </ul>
                    </div>
               )}
          </header>
     );
};

export default Header;
