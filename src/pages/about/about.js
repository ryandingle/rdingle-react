import React from 'react';
import { Link } from "react-router-dom";
import { LightSpeed } from 'react-reveal';

class About extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <section className="about-area section_gap gray-bg">
                <div className="container">
                    <div className="row align-items-center justify-content-between">

                        <LightSpeed left>
                            <div className="col-lg-5 about-left">
                                <img className="img-fluid" src="img/about-img.png" alt="" />
                            </div>
                        </LightSpeed>


                        <LightSpeed right>
                            <div className="col-lg-6 col-md-12 about-right">
                                <div className="main-title text-left">
                                    <h1>about myself</h1>
                                </div>
                                <div className="mb-50 wow fadeIn" data-wow-duration=".8s">
                                    <p>
                                    inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards
                                    especially in the
                                    workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate
                                    behavior
                                    is often laughed. inappropriate behavior is often laughed off as “boys will be boys,” women face higher.
                                    </p>
                                    <p>That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is
                                    often
                                    laughed.
                                    </p>
                                </div>
                            </div>
                        </LightSpeed>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;