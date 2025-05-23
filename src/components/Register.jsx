import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [companyName, setCompanyName] = useState();
    const [logo, setLogo] = useState();
    const [netWorth, setNetWorth] = useState();
    const [description, setDescription] = useState();
    const [website, setWebsite] = useState();
    const [address, setAddress] = useState();
    const [noOfEmployees, setNoOfEmployees] = useState();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post( 'http://localhost:5000/api/organizers', {companyName,logo,netWorth,description,
             email, password,website,address,noOfEmployees})
        .then(result => {
            console.log(result);
            if(result.data === "Already registered"){
                alert("E-mail already registered! Please Login to proceed.");
                navigate('/login');
            }
            else{
                alert("Registered successfully! Please Login to proceed.")
                navigate('/login');
            }
            
        })
        .catch(err => console.log(err));
    }


    return (
        <div>
            <div className="d-flex justify-content-center align-items-center text-center vh-100" style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}}>
                <div className="bg-white p-3 rounded" style={{width : '40%'}}>
                    <h2 className='mb-3 text-primary'>Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong >Company Name</strong>
                            </label>
                            <input 
                                type="text"
                                placeholder="Enter Company Name"
                                className="form-control" 
                                id="exampleInputname" 
                                onChange={(event) => setCompanyName(event.target.value)}
                                required
                            /> 
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong>Email Id</strong>
                            </label>
                            <input 
                                type="email" 
                                placeholder="Enter Email"
                                className="form-control" 
                                id="exampleInputEmail1" 
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            /> 
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                <strong>Password</strong>
                            </label>
                            <input 
                                type="password" 
                                placeholder="Enter Password"
                                className="form-control" 
                                id="exampleInputPassword1" 
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                <strong>Logo</strong>
                            </label>
                            <input 
                                type="password" 
                                placeholder=""
                                className="form-control" 
                                id="exampleInputPassword1" 
                                onChange={(event) => setLogo(event.target.value)}
                            />
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                <strong>Net Worth</strong>
                            </label>
                            <input 
                                type="text" 
                                placeholder="Enter Networth"
                                className="form-control" 
                                id="exampleInputPassword1" 
                                onChange={(event) => setNetWorth(event.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                <strong>Description</strong>
                            </label>
                            <input 
                                type="text" 
                                placeholder="Enter Description"
                                className="form-control" 
                                id="exampleInputPassword1" 
                                onChange={(event) => setDescription(event.target.value)}
                                required
                            />
                        </div>
                         <div className="mb-3 text-start">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                <strong>Website</strong>
                            </label>
                            <input 
                                type="text" 
                                placeholder="Enter Website"
                                className="form-control" 
                                id="exampleInputPassword1" 
                                onChange={(event) => setWebsite(event.target.value)}
                            />
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                <strong>Address</strong>
                            </label>
                            <input 
                                type="text" 
                                placeholder="Enter Address"
                                className="form-control" 
                                id="exampleInputPassword1" 
                                onChange={(event) => setAddress(event.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                <strong>No Of Employees</strong>
                            </label>
                            <input 
                                type="text" 
                                placeholder="Enter Address"
                                className="form-control" 
                                id="exampleInputPassword1" 
                                onChange={(event) => setNoOfEmployees(event.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>

                    <p className='container my-2'>Already have an account ?</p>
                    <Link to='/login' className="btn btn-secondary">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Register