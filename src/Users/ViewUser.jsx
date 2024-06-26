import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
export default function ViewUser() {

    const { id } = useParams();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    });

    useEffect(() => {
        loadUser();
    }, [])

    const { name, username, email } = user;

    function onInputChange(e) {
        setUser({
            ...user,
            [e.target.id]: e.target.value
        });
    }

    async function loadUser(e) {
        try {
            const result = await axios.get(`http://localhost:8080/user/${id}`);
            setUser(result.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='container outline shadow my-3 py-3 px-3'>
            <div className="card" >
                <div className="card-header">
                    <h5>User id: <span>{user.id}</span></h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><h5>Name: {user.name}</h5> </li>
                    <li className="list-group-item"><h5>User Name: {user.username}</h5> </li>
                    <li className="list-group-item"><h5>Email: {user.email}</h5> </li>
                </ul>
            </div>
            <Link className='btn btn-primary mt-4' to='/' >Go Back</Link>
        </div>
    )
}

