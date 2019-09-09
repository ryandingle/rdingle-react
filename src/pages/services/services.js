import React from 'react';
import { Link } from "react-router-dom";
import { Fade } from 'react-reveal';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';

class Services extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {

        return (
            <section className="section_gap">
                <div className="container">

                    <div className="row align-items-center justify-content-center mt-s2">

                        <div className="col-lg-12 text-center mb-s2">
                            <Bounce><img className="img-fluid" src="/img/web-app.png" alt="" /></Bounce>
                        </div>
                            
                        <Fade bottom>
                            <div className="col-lg-12 col-md-12 mb-s">
                                <div className="main-title text-left">
                                    <h1 className="text-center">Modern Web Application Development</h1>
                                </div>
                                <div className="mb-50 wow fadeIn" data-wow-duration=".8s">
                                    <p>
                                        We offer SPA (Single Page Application) Development and Seperate Backend Development by Using Modern Technology and way to develop web application nowadys. Also we offer MPA (Multi - Page Application) or Full Stack Application Development. 
                                        Experience a modern web application that runs having compability in any kind of browsers and feel satisfaction by the speed performance of the application.
                                    </p>
                                </div>
                            </div>
                        </Fade>

                    </div>

                    <hr />

                    <div className="row align-items-center justify-content-center mt-s">

                        <div className="col-lg-12 text-center mb-s2">
                            <Bounce bottom><img className="img-fluid" src="/img/mobile-app.png" alt="" /></Bounce>
                        </div>

                        <Fade bottom>
                            <div className="col-lg-12 col-md-12 mb-s">
                                <div className="main-title text-left">
                                    <h1 className="text-center">Hybrid Mobile Application Development</h1>
                                </div>
                                <div className="mb-50 wow fadeIn" data-wow-duration=".8s">
                                    <p>
                                        We also do mobile development using the technologies that we use, a hybrid mobile app with the use of Javascript and HTML5 converted into Native Application that can run smoothly on both Android and IOS platform. A 2 in 1 Hybrid Mobile Application. 
                                        One benefit of choosing a cross platform hybrid mobile app is that you don't need to hire a developer per platform development. You can just hire a developer that can develop an application that runs on any kind of platform and that's hybrid is. 
                                        Another benefit is the time frame of development, developing a hybrid app is 50% faster that developing an native app itself. That's why one big company facebook uses thier own mobile app framewor(React Native) to handle this job. Code for ALL.
                                    </p>
                                </div>
                            </div>
                        </Fade>

                    </div>

                    <hr />

                    <div className="row align-items-center justify-content-center mt-s">
                        
                        <div className="col-lg-12 text-center mb-s2">
                            <Bounce bottom><img className="img-fluid" src="/img/support.png" alt="" /></Bounce>
                        </div>
                            
                        <Fade bottom>
                            <div className="col-lg-12 col-md-12 mb-s">
                                <div className="main-title text-left">
                                    <h1 className="text-center">Support, Fix, Optimize and Maintain for Existing Web Application</h1>
                                </div>
                                <div className="mb-50 wow fadeIn" data-wow-duration=".8s">
                                    <p>
                                        We also do Maintenance for your existing Web Application. We can add features, optimize code and debug for existing error stack trace.
                                    </p>
                                </div>
                            </div>
                        </Fade>

                    </div>

                    <hr />

                    <div className="row justify-content-center mt-s">
                        <div className="col-lg-6 text-center">
                            <div className="main-title">
                                <Fade><h1>Technologies</h1></Fade>
                            </div>
                        </div>
                    </div>

                    <div className="mt-s2">
                        <div className="row">
                            <div className="col-md-2 mb-s2">
                                <Fade><img className="img-fluid" src="/img/web-app.png" /></Fade>
                            </div>
                            <div className="col-md-2 mb-s2">
                                <Fade><img className="img-fluid" src="/img/web-app.png" /></Fade>
                            </div>
                            <div className="col-md-2 mb-s2">
                                <Fade><img className="img-fluid" src="/img/web-app.png" /></Fade>
                            </div>
                            <div className="col-md-2 mb-s2">
                                <Fade><img className="img-fluid" src="/img/web-app.png" /></Fade>
                            </div>
                            <div className="col-md-2 mb-s2">
                                <Fade><img className="img-fluid" src="/img/web-app.png" /></Fade>
                            </div>
                            <div className="col-md-2 mb-s2">
                                <Fade><img className="img-fluid" src="/img/web-app.png" /></Fade>
                            </div>
                            <div className="col-md-2 mb-s2">
                                <Fade><img className="img-fluid" src="/img/web-app.png" /></Fade>
                            </div>
                            <div className="col-md-2 mb-s2">
                                <Fade><img className="img-fluid" src="/img/web-app.png" /></Fade>
                            </div>
                            <div className="col-md-2 mb-s2">
                                <Fade><img className="img-fluid" src="/img/web-app.png" /></Fade>
                            </div>
                            <div className="col-md-2 mb-s2">
                                <Fade><img className="img-fluid" src="/img/web-app.png" /></Fade>
                            </div>
                            <div className="col-md-2 mb-s2">
                                <Fade><img className="img-fluid" src="/img/web-app.png" /></Fade>
                            </div>
                            <div className="col-md-2 mb-s2">
                                <Fade><img className="img-fluid" src="/img/web-app.png" /></Fade>
                            </div>
                            <div className="col-md-2 mb-s2">
                                <Fade><img className="img-fluid" src="/img/web-app.png" /></Fade>
                            </div>
                            <div className="col-md-2 mb-s2">
                                <Fade><img className="img-fluid" src="/img/web-app.png" /></Fade>
                            </div>
                            <div className="col-md-2 mb-s2">
                                <Fade><img className="img-fluid" src="/img/web-app.png" /></Fade>
                            </div>
                            <div className="col-md-2 mb-s2">
                                <Fade><img className="img-fluid" src="/img/web-app.png" /></Fade>
                            </div>
                            <div className="col-md-2 mb-s2">
                                <Fade><img className="img-fluid" src="/img/web-app.png" /></Fade>
                            </div>
                            <div className="col-md-2 mb-s2">
                                <Fade><img className="img-fluid" src="/img/web-app.png" /></Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;