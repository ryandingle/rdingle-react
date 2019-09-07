import React from 'react';
import { Link } from "react-router-dom";
import { Bounce, Flip, LightSpeed } from 'react-reveal';

class Header extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
            isOpen: false,
            site: [this.props.site][0]
        };
    }
    
    render() {
        return (
            <header className="header_area navbar_fixed">
                <div className="main_menu">
                    <nav className="navbar navcontainer navbar-expand-lg navbar-light">

                        <Flip top>
                            <div className="container">
                                <Link className="navbar-brand" to="/"><b><Bounce>{this.state.site.site_title}</Bounce></b></Link>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                </button>
                                <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                    <LightSpeed right>
                                    <ul className="nav navbar-nav menu_nav justify-content-end">
                                        <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
                                        <li className="nav-item active"><Link className="nav-link" to="/about">About</Link></li>
                                        <li className="nav-item active"><Link className="nav-link" to="/portfolio">Portfolio</Link></li>
                                        <li className="nav-item active"><Link className="nav-link" to="/services" >Services</Link></li>
                                        <li className="nav-item active"><Link className="nav-link" to="/blog" >Blog</Link></li>
                                        <li className="nav-item active"><Link className="nav-link" to="/contact">Contact</Link></li>
                                    </ul>
                                    </LightSpeed>
                                </div>
                            </div>
                        </Flip>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;