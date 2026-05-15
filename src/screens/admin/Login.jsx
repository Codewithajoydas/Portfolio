import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router';

const LoginPage = () => {
     const Navigate = useNavigate();
     const { token, login } = useContext(AuthContext);
     const [formData, setFormData] = useState({
          email: '',
          password: '',
     });

     const [error, setError] = useState('');

     const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData((prev) => ({
               ...prev,
               [name]: value,
          }));
     };

     const handleSubmit = async (e) => {
          e.preventDefault();

          if (!formData.email || !formData.password) {
               setError('All fields are required');
               return;
          }

          setError('');

          const res = await fetch('http://localhost:3000/login', {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
               },
               body: JSON.stringify(formData),
          });
          const data = await res.json();
          login(data);
          Navigate('/admin');
     };

     return (
          <div style={styles.container}>
               <form onSubmit={handleSubmit} style={styles.form}>
                    <h1>Admin Login</h1>

                    {error && <p style={styles.error}>{error}</p>}

                    <input
                         type="email"
                         name="email"
                         placeholder="Enter Email"
                         value={formData.email}
                         onChange={handleChange}
                         style={styles.input}
                    />

                    <input
                         type="password"
                         name="password"
                         placeholder="Enter Password"
                         value={formData.password}
                         onChange={handleChange}
                         style={styles.input}
                    />

                    <button type="submit" style={styles.button}>
                         Login
                    </button>
               </form>
          </div>
     );
};

const styles = {
     container: {
          height: 'calc(100vh - 60px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f5f5f5',
     },
     form: {
          width: '350px',
          padding: '30px',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          textalign: 'center',
     },
     input: {
          padding: '10px',
          fontSize: '16px',
          borderRadius: '4px',
          border: '1px solid #ccc',
     },
     button: {
          padding: '10px',
          fontSize: '16px',
          border: 'none',
          borderRadius: '4px',
          backgroundColor: '#000',
          color: '#fff',
          cursor: 'pointer',
     },
     error: {
          color: 'red',
          fontSize: '14px',
     },
};

export default LoginPage;
