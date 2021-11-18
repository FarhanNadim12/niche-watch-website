import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../context/AuthProvider/useAuth';

const Menubar = () => {
    const [users, setUsers] = useState([]);
    const { user, logout, admin } = useAuth();
    useEffect(() => {
        fetch('https://radiant-bayou-30066.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" to='/home' aria-current="page" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#" to='/watches'>Watches</Link>
                        </li>
                        {!user.email && <li className="nav-item">
                            <Link className="nav-link" href="#" to='/register'>Register</Link>
                        </li>}
                        {user?.email && <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">Dashboard</Link>
                            <ul class="dropdown-menu">
                                {
                                    !admin && <>
                                        <li><a className="dropdown-item" href="#scrollspyHeading3"> <Link className="nav-link" to='/myOrders'>My Orders</Link></a></li>
                                        <li><a className="dropdown-item" href="#scrollspyHeading4"><Link className="nav-link" to='/pay'>Pay</Link></a></li>
                                        <li><a className="dropdown-item" href="#scrollspyHeading4"><Link className="nav-link" to='/review'>Review</Link></a></li>
                                    </>
                                }
                                {
                                    admin && <>
                                        <li><a className="dropdown-item" href="#scrollspyHeading4"><Link className="nav-link" to='/makeAdmin'>Make Admin</Link></a></li>
                                        <li><a className="dropdown-item" href="#scrollspyHeading4"><Link className="nav-link" to='/addProducts'>Add Product</Link></a></li>
                                        <li><a className="dropdown-item" href="#scrollspyHeading4"><Link className="nav-link" to='/manageProducts'>Manage Products</Link></a></li>
                                        <li><a className="dropdown-item" href="#scrollspyHeading4"><Link className="nav-link" to='/manageOrders'>Manage Orders</Link></a></li>
                                    </>
                                }

                                <li><a className="dropdown-item" href="#scrollspyHeading5"><li className="nav-item">
                                    <button onClick={logout}>Logout</button>
                                </li></a></li>
                            </ul>
                        </li>}
                        {
                            !user?.email && <li className="nav-item">
                                <Link className="nav-link" to='/login'>Login</Link>
                            </li>
                        }
                        {/* {
                            user?.email && <li className="nav-item">
                                <Link className="nav-link" to='/myOrders'>My Orders</Link>
                            </li>
                        } */}
                        {
                            user?.email && <li className="nav-item"><span className="nav-link">
                                {user.displayName}
                            </span></li>
                        }
                        {/* <li className="nav-item">
                            <Link className="nav-link" href="#">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled">Disabled</Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Menubar;