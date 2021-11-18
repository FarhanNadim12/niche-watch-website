import React, { useEffect, useState } from 'react';
import Menubar from '../Shared/Menubar/Menubar';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const handleOnBlur = (e) => {
        setEmail(e.target.value)
    }
    const handleMakeAdmin = (e) => {
        const user = { email }
        fetch('https://radiant-bayou-30066.herokuapp.com/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('Admin Created Successfully')

                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <Menubar></Menubar>
            <form onSubmit={handleMakeAdmin}>
                <input width="100px" onBlur={handleOnBlur} type="email" placeholder="Enter Email" /><br />
                <input className="mt-3" type="submit" value="Make Admin" />
            </form>
        </div>
    );
};

export default MakeAdmin;