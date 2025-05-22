import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';


const OrganizerRegister = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        logo: '',
        netWorth: '',
        description: '',
        email: '',
        website: '',
        password: '',
        address: '',
        noOfEmployees: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/organizers', formData);
            if (res.data === 'Already registered') {
                alert('E-mail already registered! Please Login.');
                navigate('/login');
            } else {
                alert('Registered successfully!');
                navigate('/login');
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
            <div className="row w-100">
                {/* Left Section */}
                <div className="col-md-8 d-flex flex-column justify-content-center align-items-center text-white p-5" style={{ backgroundColor: '#0052cc' }}>
                    <h1 className="mb-3 text-center">Booking events freedom starts here</h1>
                    <p className="mb-4 text-center">Events planning tools and guidance you want.</p>
                    <img src="/image.jpg" alt="Plan for event" className="img-fluid rounded" style={{ maxWidth: '80%' }} />
                </div>

                {/* Right Section */}
                <div className="col-md-4 d-flex align-items-center justify-content-center bg-light py-5">
                    <div className="p-4 shadow bg-white w-100" style={{ maxWidth: '750px' }}>
                        <h4 className="mb-4 text-center">Set up your Events Dashboard</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Company Name</label>
                                <input type="text" className="form-control" name="companyName" onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Logo</label>
                                <input type="text" className="form-control" name="logo" onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Net Worth</label>
                                <input className="form-control" name="netWorth" onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <input type="text" className="form-control" name="description" onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" name="email" onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" name="password" onChange={handleChange} required />
                                <div className="form-text">
                                    Password must be 8–63 characters and include 3 of the following: uppercase, lowercase, number, symbol.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Website</label>
                                <input type="text" className="form-control" name="website" onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Address</label>
                                <input type="text" className="form-control" name="address" onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">No Of Employees</label>
                                <input type="number" className="form-control" name="noOfEmployees" onChange={handleChange} required />
                            </div>
                            <button type="submit" className="btn btn-primary w-100 mt-3">Register</button>
                        </form>
                        <div className="text-center mt-3">
                            <p>Already have an account?</p>
                            <Link to="/login" className="btn btn-secondary">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrganizerRegister;
