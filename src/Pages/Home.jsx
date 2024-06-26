import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Home() {


    const { id } = useParams();

    const [user, setUser] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    async function deleteUser(id) {
        try {
            await axios.delete(`http://localhost:8080/user/${id}`);
            getUsers(); // Refresh the user list after deletion
        } catch (error) {
            console.error(error);
        }
    }

    async function getUsers() {
        try {
            const response = await axios.get("http://localhost:8080/user");
            setUser(response.data);
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='container py-4'>
            <table className="table table-striped table-border shadow">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map(
                            (users, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{users.name}</td>
                                    <td>{users.username}</td>
                                    <td>{users.email}</td>
                                    <td>
                                        <Link className='btn btn-primary mx-2' to={`viewuser/${users.id}`}>View</Link>
                                        <Link className='btn btn-outline-primary mx-2' to={`edituser/${users.id}`}>Edit</Link>
                                        <button className='btn btn-danger mx-2' onClick={() => deleteUser(users.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
