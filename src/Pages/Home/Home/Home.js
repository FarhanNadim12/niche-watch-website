
import React from 'react';
import About from '../../About/About';
import Footer from '../../Shared/Footer/Footer';
import Menubar from '../../Shared/Menubar/Menubar';
import AllReviews from '../AllReviews/AllReviews';

import Header from '../Header/Header';
import Homewatches from '../Homewatches/Homewatches';


const Home = () => {

    return (
        <div >
            <Menubar></Menubar>
            <Header></Header>
            <Homewatches></Homewatches>
            <AllReviews></AllReviews>
            <About></About>
            <Footer></Footer>

        </div>

    );
};

export default Home;