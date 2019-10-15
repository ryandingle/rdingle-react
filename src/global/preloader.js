import React from 'react';
import ReactLoading from "react-loading";

const Preloader = (props) => {
    return (
        <h1 className="mt-s text-center mb-s">
            <p style={{width: '65px', margin: '0px auto'}}><ReactLoading type="spin" color="#ccc" /></p>
        </h1>
    );
}

export default Preloader;

