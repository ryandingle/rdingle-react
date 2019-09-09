import React from 'react';
import { Link } from "react-router-dom";
import { LightSpeed, Fade } from 'react-reveal';
import Bounce from 'react-reveal/Bounce';

import Sidebar from './sideBar';

class Blog extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <section className="blog_area mt-s2">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog_left_sidebar">

                                <Bounce>
                                    <article className="row blog_item">
                                        <div className="col-md-3">
                                            <div className="blog_info text-right">
                                                <div className="post_tag">
                                                    <Link to="#">Food,</Link>
                                                    <Link className="active" href="#">Technology,</Link>
                                                    <Link to="#">Politics,</Link>
                                                    <Link to="#">Lifestyle</Link>
                                                </div>
                                                <ul className="blog_meta list">
                                                    <li><Link to="#">Mark wiens<i className="lnr lnr-user" /></Link></li>
                                                    <li><Link to="#">12 Dec, 2017<i className="lnr lnr-calendar-full" /></Link></li>
                                                    <li><Link to="#">1.2M Views<i className="lnr lnr-eye" /></Link></li>
                                                    <li><Link to="#">06 Comments<i className="lnr lnr-bubble" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-9">
                                            <div className="blog_post">
                                            <img src="/img/blog/main-blog/m-blog-1.jpg" alt="" />
                                                <div className="blog_details">
                                                    <Link to="/blog/item">
                                                    <h2>Astronomy Binoculars A Great Alternative</h2>
                                                    </Link>
                                                    <p>MCSE boot camps have its supporters and its detractors. Some people do not
                                                    understand why you should have to spend money on boot camp when you can get
                                                    the MCSE study materials yourself at a fraction.</p>
                                                    <Link to="/blog/item" className="primary_btn">View More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </Bounce>

                                <Bounce>
                                    <article className="row blog_item">
                                        <div className="col-md-3">
                                            <div className="blog_info text-right">
                                                <div className="post_tag">
                                                    <Link to="#">Food,</Link>
                                                    <Link className="active" href="#">Technology,</Link>
                                                    <Link to="#">Politics,</Link>
                                                    <Link to="#">Lifestyle</Link>
                                                </div>
                                                <ul className="blog_meta list">
                                                    <li><Link to="#">Mark wiens<i className="lnr lnr-user" /></Link></li>
                                                    <li><Link to="#">12 Dec, 2017<i className="lnr lnr-calendar-full" /></Link></li>
                                                    <li><Link to="#">1.2M Views<i className="lnr lnr-eye" /></Link></li>
                                                    <li><Link to="#">06 Comments<i className="lnr lnr-bubble" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-9">
                                            <div className="blog_post">
                                                <img src="/img/blog/main-blog/m-blog-2.jpg" alt="" />
                                                <div className="blog_details">
                                                    <Link to="/blog/item">
                                                    <h2>The Basics Of Buying A Telescope</h2>
                                                    </Link>
                                                    <p>MCSE boot camps have its supporters and its detractors. Some people do not
                                                    understand why you should have to spend money on boot camp when you can get
                                                    the MCSE study materials yourself at a fraction.</p>
                                                    <Link to="/blog/item" className="primary_btn">View More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </Bounce>

                                <Bounce>
                                    <article className="row blog_item">
                                        <div className="col-md-3">
                                            <div className="blog_info text-right">
                                                <div className="post_tag">
                                                    <Link to="#">Food,</Link>
                                                    <Link className="active" href="#">Technology,</Link>
                                                    <Link to="#">Politics,</Link>
                                                    <Link to="#">Lifestyle</Link>
                                                </div>
                                                <ul className="blog_meta list">
                                                    <li><Link to="#">Mark wiens<i className="lnr lnr-user" /></Link></li>
                                                    <li><Link to="#">12 Dec, 2017<i className="lnr lnr-calendar-full" /></Link></li>
                                                    <li><Link to="#">1.2M Views<i className="lnr lnr-eye" /></Link></li>
                                                    <li><Link to="#">06 Comments<i className="lnr lnr-bubble" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-9">
                                            <div className="blog_post">
                                                <img src="/img/blog/main-blog/m-blog-3.jpg" alt="" />
                                                <div className="blog_details">
                                                    <Link to="/blog/item">
                                                    <h2>The Glossary Of Telescopes</h2>
                                                    </Link>
                                                    <p>MCSE boot camps have its supporters and its detractors. Some people do not
                                                    understand why you should have to spend money on boot camp when you can get
                                                    the MCSE study materials yourself at a fraction.</p>
                                                    <Link to="/blog/item" className="primary_btn">View More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </Bounce>

                                <Bounce>
                                    <article className="row blog_item">
                                        <div className="col-md-3">
                                            <div className="blog_info text-right">
                                                <div className="post_tag">
                                                    <Link to="#">Food,</Link>
                                                    <Link className="active" href="#">Technology,</Link>
                                                    <Link to="#">Politics,</Link>
                                                    <Link to="#">Lifestyle</Link>
                                                </div>
                                                <ul className="blog_meta list">
                                                    <li><Link to="#">Mark wiens<i className="lnr lnr-user" /></Link></li>
                                                    <li><Link to="#">12 Dec, 2017<i className="lnr lnr-calendar-full" /></Link></li>
                                                    <li><Link to="#">1.2M Views<i className="lnr lnr-eye" /></Link></li>
                                                    <li><Link to="#">06 Comments<i className="lnr lnr-bubble" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-9">
                                            <div className="blog_post">
                                                <img src="/img/blog/main-blog/m-blog-4.jpg" alt="" />
                                                <div className="blog_details">
                                                    <Link to="/blog/item">
                                                    <h2>The Night Sky</h2>
                                                    </Link>
                                                    <p>MCSE boot camps have its supporters and its detractors. Some people do not
                                                    understand why you should have to spend money on boot camp when you can get
                                                    the MCSE study materials yourself at a fraction.</p>
                                                    <Link to="/blog/item" className="primary_btn">View More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </Bounce>

                                <Bounce>
                                    <article className="row blog_item">
                                        <div className="col-md-3">
                                            <div className="blog_info text-right">
                                                <div className="post_tag">
                                                    <Link to="#">Food,</Link>
                                                    <Link className="active" href="#">Technology,</Link>
                                                    <Link to="#">Politics,</Link>
                                                    <Link to="#">Lifestyle</Link>
                                                </div>
                                                <ul className="blog_meta list">
                                                    <li><Link to="#">Mark wiens<i className="lnr lnr-user" /></Link></li>
                                                    <li><Link to="#">12 Dec, 2017<i className="lnr lnr-calendar-full" /></Link></li>
                                                    <li><Link to="#">1.2M Views<i className="lnr lnr-eye" /></Link></li>
                                                    <li><Link to="#">06 Comments<i className="lnr lnr-bubble" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-9">
                                            <div className="blog_post">
                                                <img src="/img/blog/main-blog/m-blog-5.jpg" alt="" />
                                                <div className="blog_details">
                                                    <Link to="/blog/item">
                                                    <h2>Telescopes 101</h2>
                                                    </Link>
                                                    <p>MCSE boot camps have its supporters and its detractors. Some people do not
                                                    understand why you should have to spend money on boot camp when you can get
                                                    the MCSE study materials yourself at a fraction.</p>
                                                    <Link to="/blog/item" className="primary_btn">View More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </Bounce>

                                <LightSpeed bottom>
                                    <nav className="blog-pagination justify-content-center d-flex">
                                        <ul className="pagination">
                                            <li className="page-item">
                                                <Link to="#" className="page-link" aria-label="Previous">
                                                    <span aria-hidden="true">
                                                    <span className="lnr lnr-chevron-left" />
                                                    </span>
                                                </Link>
                                            </li>
                                            <li className="page-item"><Link to="#" className="page-link">01</Link></li>
                                            <li className="page-item active"><Link to="#" className="page-link">02</Link></li>
                                            <li className="page-item"><Link to="#" className="page-link">03</Link></li>
                                            <li className="page-item"><Link to="#" className="page-link">04</Link></li>
                                            <li className="page-item"><Link to="#" className="page-link">09</Link></li>
                                            <li className="page-item">
                                                <Link to="#" className="page-link" aria-label="Next">
                                                    <span aria-hidden="true">
                                                    <span className="lnr lnr-chevron-right" />
                                                    </span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </LightSpeed>
                            </div>
                        </div>

                        <Sidebar />
                    </div>
                </div>
            </section>
        );
    }
}

export default Blog;