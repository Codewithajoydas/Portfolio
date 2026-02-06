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
               </Routes>
          </>
     );
};

export default App;
