import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../context/AuthProvider/useAuth';
import Menubar from '../Shared/Menubar/Menubar';

const Login = () => {
    const { login, isLoading, user, authError } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const history = useHistory();
    const handleEmail = (e) => {
        setEmail(e.target.value);

    }
    const handlePassword = (e) => {
        setPassword(e.target.value);


    }

    const handleLogin = (e) => {

        login(email, password, location, history);

        e.preventDefault();

    }

    return (
        <div>
            <Menubar></Menubar>
            <div className='form-container'>
                <h3 className='mb-3'>Login Here</h3>
                {!isLoading && <form onSubmit={handleLogin}>
                    <input onBlur={handleEmail} type="email" name="" id="" placeholder='Enter Email' required /><br />
                    {/* <input type="text" name="" id="" placeholder='Enter User Name' required /><br /> */}
                    <input onBlur={handlePassword} type="password" name="" id="" placeholder='Enter Password' required /><br />

                    <input type="submit" value="Login" />
                </form>}
                {
                    isLoading && <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                }

                <p>Didn't registered yet?? <Link to='/register'>Register</Link> </p>
                {/* <p className='text-danger'>{error}</p> */}
                {
                    user.email && <div class="alert alert-success" role="alert">
                        Login Successful!
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

export default Login;