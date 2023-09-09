import React, { useState } from 'react';

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({
            ...credentials,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(credentials);
    };

    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email: </label>
                    <input 
                        type="email" 
                        name="email" 
                        value={credentials.email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input 
                        type="password" 
                        name="password" 
                        value={credentials.password} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;

