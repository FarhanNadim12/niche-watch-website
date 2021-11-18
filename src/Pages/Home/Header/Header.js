import React from 'react';
import './Header.css'
const Header = () => {
    return (

        <div className="row m-0 w-100  headerContainer d-flex align-items-center">
            <div className="col-md-8 col-12">

            </div>
            <div className="col-md-4 col-12 text-end headerLeftContent">
                <span style={{  }}>New Arrivals</span>
                <h1 style={{  }}>Our Best <br />
                    Collections</h1>
                <button>Explore</button>
            </div>
        </div>


    );
};

export default Header;