import React from  'react';
import { Link } from 'react-router-dom';

const Social = (props) => {
    return (
        <ul className="list">
            <li><Link className="plain-link" target="_blank" to="/"><i className="fa fa-facebook"></i></Link></li>
            <li><Link className="plain-link" target="_blank" to="/"><i className="fa fa-google-plus"></i></Link></li>
            <li><Link className="plain-link" target="_blank" to="/"><i className="fa fa-twitter"></i></Link></li>
            <li><Link className="plain-link" target="_blank" to="/"><i className="fa fa-youtube"></i></Link></li>
        </ul>
    );
}

export default Social;