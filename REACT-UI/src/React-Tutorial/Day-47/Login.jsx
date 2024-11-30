import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
    const [token, setToken] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/user/login-user', {
                email,
                password,
                role,
            });

            // If login is successful
            if (response.data.success) {
                localStorage.setItem('token', response.data.token);
                setToken(response.data.token);
                toast.success("Login successful!");
            }
        } catch (error) {
            // Handle backend-specific error messages
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message); // Backend message
            } else {
                toast.error("An unexpected error occurred!");
            }
            console.error("Login Error:", error.message);
        }
    };

    useEffect(() => {
        if (token) {
            navigate("/dashboard");
        }
    }, [token])
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-700">
            <div className="min-w-[340px] h-auto p-6 bg-gray-200 shadow-lg rounded-xl">
                <h3 className="mb-6 text-2xl font-semibold text-center">Login page</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className='w-full'>
                        <p>Email : </p>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='Enter Email' className='min-w-[90%] min-h-[36px] rounded-lg p-1 border border-zinc-300' required />
                    </div>
                    <div className='w-full'>
                        <p>Password : </p>
                        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder='Enter password' className='min-w-[90%] min-h-[36px] rounded-lg p-1 border border-zinc-300' required />
                    </div>
                    <div className='w-full'>
                        <p>Role : </p>
                        <input onChange={(e) => setRole(e.target.value)} value={role} type="text" placeholder='Enter Role' className='min-w-[90%] min-h-[36px] rounded-lg p-1 border border-zinc-300' required />
                    </div>

                    <button type="submit" className="w-full p-2 font-medium bg-lime-300 rounded-xl">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
