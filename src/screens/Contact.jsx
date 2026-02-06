import React, { useState } from 'react';
import '../styles/css/components/Contact.css';
import { Helmet } from 'react-helmet-async';
import facebok from '/src/assets/images/facebook.svg';
import github from '/src/assets/images/github.svg';
import instagram from '/src/assets/images/instagram.svg';
import youtube from '/src/assets/images/youtube.svg';
export default function Contact() {
     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [message, setMessage] = useState('');
     const [loading, setLoading] = useState(false);

     const submitData = async (e) => {
          e.preventDefault();

          if (!name || !email || !message) {
               alert('All fields are required');
               return;
          }

          try {
               setLoading(true);

               const res = await fetch(
                    'https://p-back-jo4r.onrender.com/contact',
                    {
                         method: 'POST',
                         headers: {
                              'Content-Type': 'application/json',
                         },
                         body: JSON.stringify({
                              name,
                              email,
                              message,
                         }),
                    },
               );

               const data = await res.json();
               console.log(data);

               if (!res.ok) {
                    alert(data.message || 'Something went wrong');
                    return;
               }

               alert('Message sent successfully');

               // clear form
               setName('');
               setEmail('');
               setMessage('');
          } catch (error) {
               console.error(error);
               alert('Server error');
          } finally {
               setLoading(false);
          }
     };

     return (
          <>
               <Helmet>
                    <title>Contact | Codewithajoydas</title>
                    <meta
                         name="description"
                         content="Contact page of Codewithajoydas"
                    />
               </Helmet>

               <section className="contact">
                    <div className="contact__container">
                         {/* LEFT SIDE */}
                         <div className="contact__info">
                              <h2>Get in touch</h2>

                              <div className="contact__detail">
                                   <span>Email:</span>
                                   <p>codewithajoydas@gmail.com</p>
                              </div>

                              <div className="contact__detail">
                                   <span>Phone:</span>
                                   <p>+91 6900611920</p>
                              </div>

                              <div className="contact__detail">
                                   <span>Address:</span>
                                   <p>
                                        782001, Liladhar Kataki Path,
                                        Morikolong, Nagaon, Assam
                                   </p>
                              </div>

                              <div className="contact__social">
                                   <span>Follow us</span>
                                   <div className="icons">
                                        <i className="icon">
                                             <img
                                                  src={facebok}
                                                  alt="Facebook"
                                             />
                                        </i>
                                        <i className="icon">
                                             <img src={github} alt="GitHub" />
                                        </i>
                                        <i className="icon">
                                             <img
                                                  src={instagram}
                                                  alt="Instagram"
                                             />
                                        </i>
                                        <i className="icon">
                                             <img src={youtube} alt="YouTube" />
                                        </i>
                                   </div>
                              </div>
                         </div>

                         {/* RIGHT SIDE */}
                         <div className="contact__form">
                              <form onSubmit={submitData}>
                                   <div className="row">
                                        <input
                                             type="text"
                                             placeholder="Your full name"
                                             value={name}
                                             onChange={(e) =>
                                                  setName(e.target.value)
                                             }
                                        />

                                        <input
                                             type="email"
                                             placeholder="Your email address"
                                             value={email}
                                             onChange={(e) =>
                                                  setEmail(e.target.value)
                                             }
                                        />
                                   </div>

                                   <textarea
                                        placeholder="Write something..."
                                        value={message}
                                        onChange={(e) =>
                                             setMessage(e.target.value)
                                        }
                                   />

                                   <button type="submit" disabled={loading}>
                                        {loading
                                             ? 'Sending...'
                                             : 'Send Message'}
                                   </button>
                              </form>
                         </div>
                    </div>
               </section>
          </>
     );
}
