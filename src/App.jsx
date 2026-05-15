import { Route, Routes } from 'react-router';
import Header from './components/Header';
import './styles/css/index.css';
import Home from './screens/Home';
import About from './screens/About';
import Skills from './screens/Skills';
import Projects from './screens/Projects';
import Experience from './screens/Experience';
import Education from './screens/Education';
import Blog from './screens/Blog';
import Contact from './screens/Contact';
import StartProject from './screens/StartProject';
import AdminDashboard from './screens/admin/Dashboard';
import AdminLayout from './screens/admin/_Layout';
import PendingPage from './screens/admin/Pending';
import AllPage from './screens/admin/All';
import CancelledPage from './screens/admin/Cancelled';
import CompletedPage from './screens/admin/Completed';
import SettingsPage from './screens/admin/Settings';
import LoginPage from './screens/admin/Login';
import DetailedPendingPage from './screens/admin/DetailedPendingPage';
const App = () => {
     return (
          <>
               <Header />
               <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/start-project" element={<StartProject />} />
                    <Route path="/admin" element={<AdminLayout />}>
                         <Route index element={<AdminDashboard />} />
                         <Route path="pending" element={<PendingPage />} />
                         <Route
                              path="pending/:id"
                              element={<DetailedPendingPage />}
                         />
                         <Route path="all" element={<AllPage />} />
                         <Route path="cancelled" element={<CancelledPage />} />
                         <Route path="completed" element={<CompletedPage />} />
                         <Route path="settings" element={<SettingsPage />} />
                         <Route path="login" element={<LoginPage />} />
                    </Route>
                    <Route path="*" element={<h1>404</h1>} />
               </Routes>
          </>
     );
};

export default App;
