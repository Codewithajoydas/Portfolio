import { useState } from 'react';
import '../styles/css/components/StartProject.css';
import { Helmet } from 'react-helmet-async';

const StartProject = () => {
     const [formData, setFormData] = useState({
          name: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          description: '',
          features: '',
          budget: '',
          timeline: '',
     });

     const [submitted, setSubmitted] = useState(false);
     const [loading, setLoading] = useState(false);

     const handleChange = (e) => {
          setFormData((prev) => ({
               ...prev,
               [e.target.name]: e.target.value,
          }));
     };

     const handleSubmit = async (e) => {
          e.preventDefault();
          setLoading(true);

          try {
               const res = await fetch(
                    'https://p-back-jo4r.onrender.com/projectRequests',
                    {
                         method: 'POST',
                         headers: {
                              'Content-Type': 'application/json',
                         },
                         body: JSON.stringify({
                              name: formData.name,
                              email: formData.email,
                              phone: formData.phone,
                              projectType: formData.projectType,
                              description: formData.description,
                              features: formData.features,
                              budget: formData.budget,
                              timeline: formData.timeline,
                         }),
                    },
               );

               if (!res.ok) {
                    throw new Error('Failed to submit');
               }

               setSubmitted(true);

               // Reset form
               setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    projectType: '',
                    description: '',
                    features: '',
                    budget: '',
                    timeline: '',
               });
          } catch (error) {
               console.error(error);
               alert('Something went wrong. Please try again.');
          } finally {
               setLoading(false);
          }
     };

     if (submitted) {
          return (
               <section className="startproject">
                    <div className="header">
                         <h1>
                              {' '}
                              🎉 <br />
                              Request Submitted Successfully
                         </h1>
                         <p>
                              Thank you for sharing your project details. I will
                              contact you shortly to discuss the next steps.
                         </p>
                         <button
                              className="button"
                              onClick={() => setSubmitted(false)}
                              style={{
                                   marginTop: '20px',
                                   padding: '10px 20px',
                                   cursor: 'pointer',
                              }}>
                              Submit Another Request
                         </button>
                    </div>
               </section>
          );
     }

     return (
          <>
               <Helmet>
                    <title>Start a Project | Codewithajoydas</title>

                    <meta
                         name="description"
                         content="Start your project with Codewithajoydas. Share your idea for a website, web application, mobile app, or PWA and get a professional solution tailored to your business needs."
                    />
                    <meta
                         name="keywords"
                         content="Start project, hire web developer, build website, web application development, mobile app development, PWA development, Codewithajoydas"
                    />
                    <meta name="author" content="Ajoy Das" />
                    <meta name="robots" content="index, follow" />

                    <link
                         rel="canonical"
                         href="https://codewithajoydas.live/start-project"
                    />

                    <meta
                         property="og:title"
                         content="Start a Project | Codewithajoydas"
                    />
                    <meta
                         property="og:description"
                         content="Have an idea for a website or application? Share your project details and get a professional development plan tailored to your goals."
                    />
                    <meta property="og:type" content="website" />
                    <meta
                         property="og:url"
                         content="https://codewithajoydas.live/start-project"
                    />
                    <meta
                         property="og:image"
                         content="https://codewithajoydas.live/logo.png"
                    />

                    <meta name="twitter:card" content="summary_large_image" />
                    <meta
                         name="twitter:title"
                         content="Start a Project | Codewithajoydas"
                    />
                    <meta
                         name="twitter:description"
                         content="Submit your project requirements and collaborate with Codewithajoydas to build a modern, scalable, and performance-focused solution."
                    />
                    <meta
                         name="twitter:image"
                         content="https://codewithajoydas.live/logo.png"
                    />
               </Helmet>

               <section className="startproject">
                    <div className="header">
                         <h1>Start Your Project</h1>
                         <p>
                              Tell me about your idea and I’ll help you build it
                              professionally.
                         </p>
                         <p className="subtext">
                              Whether you need a modern web application, mobile
                              app, business website, or progressive web app
                              (PWA), I’m here to turn your vision into reality.
                         </p>
                    </div>

                    <form className="project-form" onSubmit={handleSubmit}>
                         <div className="form-grid">
                              <div className="form-group">
                                   <label>Full Name *</label>
                                   <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                   />
                              </div>

                              <div className="form-group">
                                   <label>Email Address *</label>
                                   <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                   />
                              </div>

                              <div className="form-group">
                                   <label>Phone Number</label>
                                   <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                   />
                              </div>

                              <div className="form-group">
                                   <label>Company Name</label>
                                   <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                   />
                              </div>

                              <div className="form-group full-width">
                                   <label>Project Type *</label>
                                   <select
                                        name="projectType"
                                        required
                                        value={formData.projectType}
                                        onChange={handleChange}>
                                        <option value="">
                                             Select Project Type
                                        </option>
                                        <option>Business Website</option>
                                        <option>Portfolio Website</option>
                                        <option>E-commerce Website</option>
                                        <option>Web Application</option>
                                        <option>Mobile App</option>
                                        <option>PWA</option>
                                   </select>
                              </div>

                              <div className="form-group full-width">
                                   <label>Project Description *</label>
                                   <textarea
                                        name="description"
                                        rows="4"
                                        required
                                        value={formData.description}
                                        onChange={handleChange}
                                   />
                              </div>

                              <div className="form-group full-width">
                                   <label>Features Required</label>
                                   <textarea
                                        name="features"
                                        rows="3"
                                        value={formData.features}
                                        onChange={handleChange}
                                   />
                              </div>

                              <div className="form-group">
                                   <label>Budget Range *</label>
                                   <select
                                        name="budget"
                                        required
                                        value={formData.budget}
                                        onChange={handleChange}>
                                        <option value="">Select Budget</option>
                                        <option>$100 – $300</option>
                                        <option>$300 – $800</option>
                                        <option>$800+</option>
                                        <option>Not Sure</option>
                                   </select>
                              </div>

                              <div className="form-group">
                                   <label>Timeline *</label>
                                   <select
                                        name="timeline"
                                        required
                                        value={formData.timeline}
                                        onChange={handleChange}>
                                        <option value="">
                                             Select Timeline
                                        </option>
                                        <option>Urgent (1–2 weeks)</option>
                                        <option>1 Month</option>
                                        <option>2–3 Months</option>
                                        <option>Flexible</option>
                                   </select>
                              </div>
                         </div>

                         <div
                              className="submit-area"
                              style={{
                                   display: 'flex',
                                   gap: '20px',
                                   justifyContent: 'center',
                              }}>
                              <button type="submit" disabled={loading}>
                                   {loading
                                        ? 'Submitting...'
                                        : 'Request Project Discussion'}
                              </button>

                              <button
                                   type="reset"
                                   onClick={() =>
                                        setFormData({
                                             name: '',
                                             email: '',
                                             phone: '',
                                             company: '',
                                             projectType: '',
                                             description: '',
                                             features: '',
                                             budget: '',
                                             timeline: '',
                                        })
                                   }
                                   style={{
                                        backgroundColor: 'pink',
                                        color: 'red',
                                   }}>
                                   Reset Form
                              </button>
                         </div>
                    </form>
               </section>
          </>
     );
};

export default StartProject;
