// import '../../styles/css/admin/dashboard.css';
import { useEffect, useState } from 'react';
import '../../styles/css/admin/AdminDashboard.css';
import {
     ClipboardClock,
     CircleCheck,
     BanknoteX,
     Target,
     Check,
     X,
} from 'lucide-react';

const AdminDashboard = () => {
     const [data, setData] = useState([]);
     useEffect(() => {
          (async () => {
               const res = await fetch('http://localhost:3000/reports');
               const data = await res.json();
               console.log(data);
               setData(data);
          })();
     }, []);

     return (
          <div className="content">
               <div className="dashboard-header">
                    <h1>Admin Dashboard</h1>
                    <p>Overview of all project requests</p>
               </div>

               <div className="cards">
                    <div className="card pending">
                         <div className="card-icon">
                              <ClipboardClock size={28} />
                         </div>
                         <div className="card-info">
                              <h2>{data.pending}</h2>
                              <p>Pending Requests</p>
                         </div>
                    </div>

                    <div className="card approved">
                         <div className="card-icon">
                              <Target size={28} />
                         </div>
                         <div className="card-info">
                              <h2>{data.approved}</h2>
                              <p>Approved Projects</p>
                         </div>
                    </div>

                    <div className="card completed">
                         <div className="card-icon">
                              <CircleCheck size={28} />
                         </div>
                         <div className="card-info">
                              <h2>{data.completed}</h2>
                              <p>Completed Projects</p>
                         </div>
                    </div>

                    <div className="card cancelled">
                         <div className="card-icon">
                              <BanknoteX size={28} />
                         </div>
                         <div className="card-info">
                              <h2>{data.rejected}</h2>
                              <p>Cancelled Projects</p>
                         </div>
                    </div>
               </div>
               <div>
                    <p style={{ fontSize: 'large', fontWeight: 'bolder' }}>
                         Project Requests
                    </p>
                    <table>
                         <tr key={1}>
                              <th>S.N.</th>
                              <th>Project ID</th>
                              <th>Sender Name</th>
                              <th>Sender Email</th>
                              <th>Project Timeline</th>
                              <th>Approve</th>
                              <th>Reject</th>
                         </tr>
                         {data?.findReports?.map((item, index) => (
                              <tr key={item.id}>
                                   <td>{index + 1}</td>
                                   <td>{item._id}</td>
                                   <td>{item.fullName}</td>
                                   <td>{item.email}</td>
                                   <td>{item.timeline}</td>
                                   <td>
                                        <span
                                             style={{
                                                  display: 'flex',
                                                  justifyContent: 'center',
                                                  alignItems: 'center',
                                                  gap: '5px',
                                                  background: 'lightgreen',
                                                  padding: '5px',
                                                  borderRadius: '5px',
                                                  color: 'green',
                                             }}>
                                             <Check size={18} /> Approve
                                        </span>
                                   </td>
                                   <td>
                                        <span
                                             style={{
                                                  display: 'flex',
                                                  justifyContent: 'center',
                                                  alignItems: 'center',
                                                  gap: '5px',
                                                  background: 'lightcoral',
                                                  padding: '5px',
                                                  borderRadius: '5px',
                                                  color: 'red',
                                             }}>
                                             <X size={18} /> Reject
                                        </span>
                                   </td>
                              </tr>
                         ))}
                    </table>
               </div>
          </div>
     );
};

export default AdminDashboard;
