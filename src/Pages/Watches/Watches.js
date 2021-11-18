import React, { useEffect, useState } from 'react';
import Menubar from '../Shared/Menubar/Menubar';
import AllWatch from './AllWatch/AllWatch';

const Watches = () => {
    const [watches, setWatches] = useState([]);
    useEffect(() => {
        fetch('https://radiant-bayou-30066.herokuapp.com/watches')
            .then(res => res.json())
            .then(data => setWatches(data))
    }, [])
    return (
        <div>
            <Menubar></Menubar>
            <h1>Watches {watches.length}</h1>
            <div className="row w-100">
                {
                    watches.map(watch => <AllWatch watch={watch} key={watch._id} ></AllWatch>)
                }
            </div>
        </div>
    );
};

export default Watches;