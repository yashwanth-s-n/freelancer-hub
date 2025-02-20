import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ApplicationForm.css';

const ApplicationForm = () => {
  const { id } = useParams(); // Get the job ID from the URL
  const [formData, setFormData] = useState({ name: '', email: '', coverLetter: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5005/api/apply', { ...formData, jobId: id });
      alert(response.data.message);
    } catch (error) {
      alert('Failed to submit application');
    }
  };

  return (
    <div className="application-form-container">
      <h2>Application Form for Job ID: {id}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Cover Letter:
          <textarea name="coverLetter" value={formData.coverLetter} onChange={handleChange} required></textarea>
        </label>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplicationForm;
