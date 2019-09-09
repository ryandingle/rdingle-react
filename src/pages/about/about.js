import React from 'react';
import { Link } from "react-router-dom";
import { LightSpeed } from 'react-reveal';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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

                    <h1 className="text-center mt-s2 mb-s2">History</h1>

                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2011 - present"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">Creative Director</h3>
                            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                            <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2010 - 2011"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">Art Director</h3>
                            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                            <p>
                            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2008 - 2010"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">Web Designer</h3>
                            <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                            <p>
                            User Experience, Visual Design
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2006 - 2008"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">Web Designer</h3>
                            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                            <p>
                            User Experience, Visual Design
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="April 2013"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                            <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                            <p>
                            Strategy, Social Media
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="November 2012"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                            <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                            <p>
                            Creative Direction, User Experience, Visual Design
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2002 - 2006"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                            <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                            <p>
                            Creative Direction, Visual Design
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        />
                        </VerticalTimeline>
                </div>
            </section>
        );
    }
}

export default About;