import React from 'react';
import { Link } from "react-router-dom";
import Social from '../global/social';
import { Bounce, Flip, LightSpeed } from 'react-reveal';

class Footer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            site: [this.props.site][0]
        };
    }

    render() {

        return (
            <footer className="footer_area section_gap">
                <Bounce>
                <div className="container">
                    <div className="row footer_inner justify-content-center">
                        <div className="col-lg-6 text-center">
                            <aside className="f_widget social_widget">
                                <div className="f_logo">
                                    <img src="/img/logo.png" alt="" />
                                </div>
                                <div className="f_title">
                                    <h4>Follow Me</h4>
                                </div>
                                <Social />
                            </aside>
                            <div className="copyright">
                                <p>
                                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://rdingle.com" target="_blank">RLD WEBSHOP</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                </Bounce>
            </footer>
        );
    }
}

export default Footer;