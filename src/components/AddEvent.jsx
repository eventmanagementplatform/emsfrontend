import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ No Link needed now
import axios from 'axios';
import './Register.css';

const AddEvent = () => {
    const [formData, setFormData] = useState({
        eventTitle: '',
        eventType: '',
        price: '',
        description: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

    if (!token) {
      alert('You must be logged in to add events.');
      navigate('/login');
      return;
    }

        try {
            const res = await axios.post('http://localhost:5000/api/events/addevent', formData,
                {
          headers: {
            Authorization: `Bearer ${token}`, // send token in headers
          },
        }
            );
            if (res.data === 'Already registered') {
                alert('E-mail already registered! Please Login.');
                navigate('/login');
            } else {
                alert('Event Added successfully!');
                navigate('/home'); // ✅ Automatically redirects to home
            }
        } catch (err) {
            console.error("Error submitting event:", err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-light p-4 rounded mt-4" style={{ width: '350px' }}>
            <h4 className="mb-3">Add New Event</h4>

            <div className="mb-3">
                <label className="form-label">Event Title</label>
                <input type="text" className="form-control" name="eventTitle" onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <label className="form-label">Event Type</label>
                <input type="text" className="form-control" name="eventType" onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label className="form-label">Price</label>
                <input type="number" className="form-control" name="price" onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label className="form-label">Description</label>
                <input type="text" className="form-control" name="description" onChange={handleChange} required />
            </div>

            <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
    );
};

export default AddEvent;
