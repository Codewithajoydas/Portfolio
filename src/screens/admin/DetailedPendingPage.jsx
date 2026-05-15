import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Check, X } from 'lucide-react';
import '../../styles/css/admin/DetailedPendingPage.css';

const DetailedPendingPage = () => {
     const { id } = useParams();
     const [data, setData] = useState(null);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);

     useEffect(() => {
          const fetchData = async () => {
               try {
                    const res = await fetch(
                         `http://localhost:3000/reports/${id}`,
                    );

                    if (!res.ok) {
                         throw new Error('Failed to fetch project');
                    }

                    const result = await res.json();
                    setData(result);
               } catch (err) {
                    setError(err.message);
               } finally {
                    setLoading(false);
               }
          };

          fetchData();
     }, [id]);

     const handleApprove = async () => {
          await fetch(`http://localhost:3000/reports/${id}/approve`, {
               method: 'PUT',
          });
          setData({ ...data, status: 'approved' });
     };

     const handleReject = async () => {
          await fetch(`http://localhost:3000/reports/${id}/reject`, {
               method: 'PUT',
          });
          setData({ ...data, status: 'rejected' });
     };

     if (loading) return <p className="loading">Loading...</p>;
     if (error) return <p className="error">{error}</p>;
     if (!data) return <p>No data found</p>;

     return (
          <div className="content">
               <div className="dashboard-header">
                    <h1>Project Details</h1>
                    <p>Complete information about this project request</p>
               </div>

               <div className="detail-card">
                    <div className="detail-row">
                         <span>Project ID</span>
                         <strong>{data._id}</strong>
                    </div>

                    <div className="detail-row">
                         <span>Full Name</span>
                         <strong>{data.fullName}</strong>
                    </div>

                    <div className="detail-row">
                         <span>Email</span>
                         <strong>{data.email}</strong>
                    </div>
                    <div className="detail-row">
                         <span>Description</span>
                         <strong>{data.description}</strong>
                    </div>
                    <div className="detail-row">
                         <span>Features Required</span>
                         <strong>{data.featuresRequired}</strong>
                    </div>
                    <div className="detail-row">
                         <span>Company Name</span>
                         <strong>{data.companyName}</strong>
                    </div>
                    <div className="detail-row">
                         <span>Budget</span>
                         <strong>{data.budget}</strong>
                    </div>

                    <div className="detail-row">
                         <span>Timeline</span>
                         <strong>{data.timeline}</strong>
                    </div>

                    <div className="detail-row">
                         <span>Status</span>
                         <strong className={`status ${data.status}`}>
                              {data.status}
                         </strong>
                    </div>

                    {data.status === 'pending' && (
                         <div className="action-buttons">
                              <button
                                   className="approve-btn"
                                   onClick={handleApprove}>
                                   <Check size={18} /> Approve
                              </button>

                              <button
                                   className="reject-btn"
                                   onClick={handleReject}>
                                   <X size={18} /> Reject
                              </button>
                         </div>
                    )}
               </div>
          </div>
     );
};

export default DetailedPendingPage;
