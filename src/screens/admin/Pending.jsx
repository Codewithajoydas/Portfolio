import { useEffect, useState } from 'react';
import '../../styles/css/admin/AdminDashboard.css';
import '../../styles/css/admin/PendingProjects.css';
import { ClipboardClock, Check, X } from 'lucide-react';
import { Link, Navigate, useNavigate } from 'react-router';

const PendingProjects = () => {
     const [pendingProjects, setPendingProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const NagateTo = useNavigate()

     useEffect(() => {
          const fetchPending = async () => {
               try {
                    const res = await fetch('http://localhost:3000/reports');
                    const data = await res.json();

                    // Filter only pending projects
                    const onlyPending = data.findReports.filter(
                         (item) => item.status === 'pending',
                    );

                    setPendingProjects(onlyPending);
               } catch (error) {
                    console.error('Error fetching pending projects:', error);
               } finally {
                    setLoading(false);
               }
          };

          fetchPending();
     }, []);

     if (loading) return <p>Loading pending projects...</p>;

     return (
          <div className="content">
               <div className="dashboard-header">
                    <h1>Pending Projects</h1>
                    <p>All projects waiting for approval</p>
               </div>

          

               <div>
                    <table>
                         <thead>
                              <tr>
                                   <th>S.N.</th>
                                   <th>Project ID</th>
                                   <th>Name</th>
                                   <th>Email</th>
                                   <th>Timeline</th>
                                   <th>Approve</th>
                                   <th>Reject</th>
                              </tr>
                         </thead>
                         <tbody>
                              {pendingProjects.map((item, index) => (
                                   <tr key={item._id}>
                                        <td>{index + 1}</td>
                                        <td>
                                             <Link
                                                  to={`/admin/pending/${item._id}`}>
                                                  {item._id}
                                             </Link>
                                        </td>
                                        <td>{item.fullName}</td>
                                        <td>{item.email}</td>
                                        <td>{item.timeline}</td>

                                        <td>
                                             <button className="approve-btn">
                                                  <Check size={16} /> Approve
                                             </button>
                                        </td>

                                        <td>
                                             <button className="reject-btn">
                                                  <X size={16} /> Reject
                                             </button>
                                        </td>
                                   </tr>
                              ))}
                         </tbody>
                    </table>
               </div>
          </div>
     );
};

export default PendingProjects;
