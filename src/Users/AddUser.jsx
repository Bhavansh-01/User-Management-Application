import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function AddUser() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    });

    const { name, username, email } = user;

    function onInputChange(e) {
        setUser({
            ...user,
            [e.target.id]: e.target.value
        });
    }

    async function onSubmit(e) {
        e.preventDefault();
        await axios.post("http://localhost:8080/user", user);
        navigate("/");
    }

    return (
        <div className='container outline shadow my-3 py-3 px-3'>
            <div className='py-3'>
                <h1>Register User</h1>
                <form className='py-3' onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" aria-describedby="nameHelp" placeholder='Enter Your Name' value={name} onChange={onInputChange}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">User Name</label>
                        <input type="text" className="form-control" id="username" placeholder='Enter Your User Name' value={username} onChange={onInputChange}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder='Enter Your Email' value={email} onChange={onInputChange}></input>
                    </div>
                    <button type="submit" className="btn btn-outline-primary mt-2 mx-2">Submit</button>
                    <Link to='/' className="btn btn-danger mt-2 mx-2">Cancel</Link>
                </form>
            </div>
        </div>
    )
}
