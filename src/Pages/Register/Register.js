import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../context/AuthProvider/useAuth';
import Menubar from '../Shared/Menubar/Menubar';
import './Register.css'
const Register = () => {
    const { user, registerUser, isLoading, authError } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleRegistration = (e) => {
        e.preventDefault();
        registerUser(email, password, name);

    }


    return (
        <div>
            <Menubar></Menubar>
            <div className='form-container'>
                <h3 className='mb-3'>Register Here</h3>
                {!isLoading && <form onSubmit={handleRegistration}>
                    <input onBlur={handleName} name="" id="" placeholder='Enter User Name' required /><br />
                    <input onBlur={handleEmail} type="email" name="" id="" placeholder='Enter Email' required /><br />
                    {/* <input type="text" name="" id="" placeholder='Enter User Name' required /><br /> */}
                    <input onBlur={handlePassword} type="password" name="" id="" placeholder='Enter Password' required /><br />

                    <input type="submit" value="Register" />
                </form>}
                {
                    isLoading && <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                }


                <p>Hey Already Registered?? <Link to='/login'>Log In</Link> </p>
                {/* <p className='text-danger'>{error}</p> */}
                {
                    user?.email && <div class="alert alert-success" role="alert">
                        Registration Successful!
                    </div>
                }
                {
                    authError && <div class="alert alert-danger" role="alert">
                        {authError}
                    </div>
                }
            </div>

        </div>
    );
};

export default Register;