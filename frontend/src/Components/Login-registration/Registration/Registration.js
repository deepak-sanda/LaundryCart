import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {
    const [error, setError] = useState('');
    const [data, setData] = useState({
        name: '',
        phone: '',
        address: '',
        state: '',
        district: '',
        email: '',
        pincode: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setError('');
        const newData = { ...data };
        newData[e.target.name] = e.target.value; 
        setData(newData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!data.email || !data.password || !data.confirmPassword || !data.name || !data.state || !data.district || !data.phone || !data.pincode || !data.address) {
            setError('Please enter all the required fields!');
            return;
        }

        // Validation for password match
        if (data.password !== data.confirmPassword) {
            setError('Passwords do not match!');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/register', {
                name: data.name,
                email: data.email,
                phone: data.phone,
                state: data.state,
                district: data.district,
                address: data.address,
                pincode: data.pincode,
                password: data.password
            });

            if (response.status >= 200 && response.status < 300) {
                console.log('Signup successful');
                // navigate('/login'); // Redirect to the login page
            } else {
                throw new Error('Signup failed with status code ' + response.status);
            }
        } catch (error) {
            console.error('Error:', error.message);
            
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' placeholder='Name' className='reg_input' value={data.name} onChange={handleChange} />
                <input type='number' name='phone' placeholder='Phone number' className='reg_input' value={data.phone} onChange={handleChange} />
                <input type='email' name='email' placeholder='Email' className='reg_input' value={data.email} onChange={handleChange} />
                <input type='text' name='address' placeholder='Address' className='reg_input' value={data.address} onChange={handleChange} />
                <input type='text' name='state' placeholder='State' className='reg_input' value={data.state} onChange={handleChange} />
                <input type='text' name='district' placeholder='District' className='reg_input' value={data.district} onChange={handleChange} />
                <input type='number' name='pincode' placeholder='Pin code' className='reg_input' value={data.pincode} onChange={handleChange} />
                <input type='password' name='password' placeholder='Password' className='reg_input' value={data.password} onChange={handleChange} />
                <input type='password' name='confirmPassword' placeholder='Confirm password' className='reg_input' value={data.confirmPassword} onChange={handleChange} />
                <button type='submit'>Submit</button>
                <div>{error}</div>
            </form>
        </div>
    );
};

export default Registration;
