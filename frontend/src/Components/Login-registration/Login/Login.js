import React, { useState } from 'react'
import "./Login.css"
import LoginHeader from '../../Headers/LoginHeader'
import FooterOne from '../../Footers/FooterOne'
import FooterTwo from '../../Footers/FooterTwo'
import axios from "axios"
import { Link } from 'react-router-dom'

const Login = () => {

    const [inputValue, setInputValue] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");



    // Regular expression for email validation


    const handleSubmit = async (e) => {
        e.preventDefault()

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Check if it's a valid number or email
        if (emailRegex.test(inputValue) || !isNaN(inputValue)) {
            setErrorMessage("");
        } else {
            setErrorMessage("Please enter a valid email or number");
            return
        }

        try {
            const response = await axios.post()
        } catch (error) {

        }

    };


    return (
        <>
            <LoginHeader />
            <div className='login_page'>
                <div className='left'>
                    <p className='laundry_service'>Laundry Service</p>
                    <p className='left_txt'>Doorstep Wash & Dryclean Service</p>
                    <p className='left-txt2'>Don’t Have An Account?</p>
                    <Link to="/register" className="reg-btn" >Register </Link>
                </div>
                <div className='right'>
                    <p className='sign_in_title'>SIGN IN</p>
                    <form onSubmit={handleSubmit}>
                        <input className='login_input' type='text' value={inputValue} placeholder='Mobile / Email' onChange={(e) => setInputValue(e.target.value)} /> <br />
                        <input className='login_input' type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <p className='fp'>Forget password?</p>
                        <button className='btn-signIn' type='submit'>Sign In</button>
                        <div>
                            {errorMessage}
                        </div>
                    </form>
                </div>

            </div>
            <div className='middle'>
                <p className='refer_txt'>Now Refer & Earn ₹500 for every referral*</p>
                <p className='tc'>*Terms and conditions will be applied</p>
            </div>
            <FooterOne />
            <FooterTwo />
        </>
    )
}

export default Login
