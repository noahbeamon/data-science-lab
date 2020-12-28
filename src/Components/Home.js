import React, { useState } from 'react';
import ReactMd from 'react-md-file';
import "./Home.css"; 

const Home = () => {
    return(
        <div className="App">
            <div className="content-container">
                <ReactMd fileName="./Home.md" />
            </div>
        </div>
    )
}

export default Home; 