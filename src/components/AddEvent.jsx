import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

const AddEvent = () => {
    const [formData, setFormData] = useState({
        eventTitle: '',
        eventType: '',
        price: '',
        description: '',
    });

    const [message, setMessage] = useState('');
    const [msgType, setMsgType] = useState(''); // 'success' or 'error'

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        if (!token) {
            setMessage('You must be logged in to add events.');
            setMsgType('error');
            setTimeout(() => {
                setMessage('');
                navigate('/login');
            }, 1500);
            return;
        }

        try {
            const res = await axios.post('http://localhost:5000/api/events/addevent', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (res.data === 'Already registered') {
                setMessage('E-mail already registered! Please Login.');
                setMsgType('error');
                setTimeout(() => {
                    setMessage('');
                    navigate('/login');
                }, 1500);
            } else {
                setMessage('Event Added successfully!');
                setMsgType('success');
                // Clear the form fields but keep the message
                setFormData({
                    eventTitle: '',
                    eventType: '',
                    price: '',
                    description: '',
                });
                // Do NOT clear message or redirect
            }
        } catch (err) {
            setMessage('Failed to add event.');
            setMsgType('error');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-light p-4 rounded mt-4" style={{ width: '350px' }}>
            <h4 className="mb-3">Add New Event</h4>

            {message && (
                <div
                    className={`mb-3 p-2 text-center fw-bold rounded ${msgType === 'success' ? 'text-success border border-success bg-success bg-opacity-10' : 'text-danger border border-danger bg-danger bg-opacity-10'}`}
                >
                    {message}
                </div>
            )}

            <div className="mb-3">
                <label className="form-label">Event Title</label>
                <input
                    type="text"
                    className="form-control"
                    name="eventTitle"
                    value={formData.eventTitle}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Event Type</label>
                <input
                    type="text"
                    className="form-control"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Price</label>
                <input
                    type="number"
                    className="form-control"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Description</label>
                <input
                    type="text"
                    className="form-control"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
            </div>

            <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
    );
};

export default AddEvent;