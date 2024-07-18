import React,{ useEffect,useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Userlist() {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/users/')
        .then(response=>{
            setUsers(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[]);

    const deleteuser=(id)=>{
        axios.delete(`http://localhost:5000/users/${id}`)
        .then(response=>{
            console.log(response.data);
            setUsers(users.filter(user=>user._id!==id));
        });
    };
  return (
    <div className='container'>
        <h3>User List</h3>
        <table className='table'>
            <thead className='thead-light'>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Course</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {users.map(user=>(
                <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.course}</td>
                    <td><Link to={`/edit/${user._id}`}>Edit</Link> | 
                    <a href='#' onClick={()=>{deleteuser(user._id)}}>Delete</a></td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
};
export default Userlist