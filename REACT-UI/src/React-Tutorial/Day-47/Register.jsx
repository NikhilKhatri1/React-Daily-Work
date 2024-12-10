import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
    const [token, setToken] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Select Role');
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:5000/api/user/register-user", {
                firstName,
                lastName,
                userName,
                email,
                password,
                role
            })
            if (data.success) {
                localStorage.setItem('token', data.token);
                setToken(data.token);
                toast.success("Account Created successfully!");
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
    }
    useEffect(() => {
        if (token) {
            navigate("/login");
        }
    }, [token])

    return (
        <div className='flex items-center justify-center min-h-screen p-4 bg-gray-700 sm:p-0'>
            <div className='p-6 bg-gray-200 sm:min-w-[70%] w-[300px] h-auto rounded-xl shadow-custom-shadow'>
                <div className='mb-3 text-center'>
                    <h3 className='text-2xl font-semibold'>Register Page</h3>
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
                    <div className="flex flex-col sm:flex-row sm:space-x-4"> {/* Flex container for responsive layout */}
                        <div className="flex-1 mb-2 sm:mb-0">
                            <label htmlFor="firstName" className='text-sm font-medium'>First Name:</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className='w-full p-2 border rounded-md border-neutral-900'
                                placeholder='Enter first name'
                                required
                            />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="lastName" className='text-sm font-medium'>Last Name:</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className='w-full p-2 border rounded-md border-neutral-900'
                                placeholder='Enter last name'
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:space-x-4">
                        <div className="flex-1 mb-2 sm:mb-0">
                            <label htmlFor="userName" className='text-sm font-medium'>User Name:</label>
                            <input
                                type="text"
                                id="userName"
                                name="userName"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                className='w-full p-2 border rounded-md border-neutral-900'
                                placeholder='Enter user name'
                                required
                            />
                        </div>

                        <div className='flex-1'>
                            <label htmlFor="email" className='text-sm font-medium'>Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='w-full p-2 border rounded-md border-neutral-900'
                                placeholder='Enter email'
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:space-x-4">
                        <div className="flex-1 mb-2 sm:mb-0">
                            <label htmlFor="password" className='text-sm font-medium'>Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='w-full p-2 border rounded-md border-neutral-900'
                                placeholder='Enter password'
                                required
                            />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="role" className='text-sm font-medium'>Role:</label>
                            <select onChange={(e) => setRole(e.target.value)} value={role} id='role' className='w-full p-2 border rounded-md border-neutral-900' required>
                                <option value="Select Role" disabled >Select Role</option>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                    </div>

                    <div className='mt-4 text-center'>
                        <button type="submit" className='w-full p-2 font-medium bg-lime-300 rounded-xl'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )


}

export default Register
