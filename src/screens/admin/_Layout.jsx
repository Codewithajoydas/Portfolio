import { useContext } from 'react';
import { NavLink, Outlet, Route, Routes, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import '../../styles/css/admin/dashboard.css';
import LoginPage from './Login';

import {
     BanknoteX,
     CircleCheck,
     ClipboardClock,
     Cog,
     LayoutDashboard,
     LogOut,
     Target,
} from 'lucide-react';

const AdminLayout = () => {
     const { isLoggedIn, logout } = useContext(AuthContext);
     const navigate = useNavigate();

     const logoutHandler = () => {
          logout();
          navigate('/admin/login');
     };

     if (!isLoggedIn) {
          return <LoginPage />;
     }

     return (
          <div className="container">
               <aside className="sidebar">
                    <ul className="projectManagment">
                         <span
                              style={{
                                   padding: '10px 20px',
                                   color: 'gray',
                                   fontSize: 'small',
                              }}>
                              Menus
                         </span>
                         <li>
                              <NavLink to="/admin" end>
                                   <LayoutDashboard size={18} />
                                   <span>Dashboard</span>
                              </NavLink>
                         </li>

                         <li>
                              <NavLink to="/admin/pending">
                                   <ClipboardClock size={18} />
                                   <span>Pending Projects</span>
                              </NavLink>
                         </li>

                         <li>
                              <NavLink to="/admin/completed">
                                   <CircleCheck size={18} />
                                   <span>Completed Projects</span>
                              </NavLink>
                         </li>

                         <li>
                              <NavLink to="/admin/cancelled">
                                   <BanknoteX size={18} />
                                   <span>Cancelled Projects</span>
                              </NavLink>
                         </li>

                         <li>
                              <NavLink to="/admin/all">
                                   <Target size={18} />
                                   <span>All Projects</span>
                              </NavLink>
                         </li>

                         {/* Bottom Section */}
                         <div className="bottom_link">
                              <span
                                   style={{
                                        padding: '10px 20px',
                                        color: 'gray',
                                        fontSize: 'small',
                                   }}>
                                   Actions
                              </span>

                              <li className="bottom-section">
                                   <NavLink to="/admin/settings">
                                        <Cog size={18} />
                                        <span>Settings</span>
                                   </NavLink>
                              </li>

                              <li
                                   onClick={logoutHandler}
                                   className="logout-link">
                                   <a href="#">
                                        <LogOut size={18} />
                                        <span>Logout</span>
                                   </a>
                              </li>
                         </div>
                    </ul>
               </aside>
               <main style={{marginLeft:"250px"}}>
                    <Outlet />
               </main>
          </div>
     );
};

export default AdminLayout;
