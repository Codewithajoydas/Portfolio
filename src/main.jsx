import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './contexts/AuthContext.jsx';
createRoot(document.getElementById('root')).render(
     <AuthProvider>
          <BrowserRouter>
               <HelmetProvider>
                    <App />
               </HelmetProvider>
          </BrowserRouter>
     </AuthProvider>,
);
