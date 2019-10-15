import React from 'react';
import { Link } from "react-router-dom";
import { LightSpeed } from 'react-reveal';
import Preloader from '../../global/preloader';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import API from '../../global/api';
import { throwStatement, isTSAnyKeyword } from '@babel/types';

class About extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            site: [this.props.site][0],
            data: [],
            isLoading: true,
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.getData();
    }

    getData() {
        API.get('about')
            .then(res => this.setState({
                    data: res.data,
                    isLoading: false,
                })
            )
            .catch(error => this.setState({
                    isLoading: false
                })
            )
            .catch(error => {
                alert('Something went wrong. Please try again later.');
                console.log(error);
            });
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
                        {
                            this.state.data.map(item => 
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    date={item.fields.start +` - `+ item.fields.end}
                                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                >
                                    <h3 className="vertical-timeline-element-title">{item.fields.job_title}</h3>
                                    {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                                    <p>{item.fields.description}</p>
                                </VerticalTimelineElement>
                            )
                        }
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