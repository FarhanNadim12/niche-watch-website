import React, { useEffect, useState } from 'react';
import HomeWatch from './HomeWatch/HomeWatch';

const Homewatches = () => {
    const [watches, setWatches] = useState([])
    useEffect(() => {
        fetch('https://radiant-bayou-30066.herokuapp.com/watches')
            .then(res => res.json())
            .then(data => setWatches(data))
    }, [])
    const homeWatches = watches.slice(0, 6)
    return (
        <div className="container">
            <h1>Watches: {homeWatches.length}</h1>
            <div className="row w-100">
                {
                    homeWatches.map(homeWatch => <HomeWatch homeWatch={homeWatch}></HomeWatch>)
                }
            </div>

        </div>
    );
};

export default Homewatches;