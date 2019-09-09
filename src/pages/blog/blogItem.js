import React from 'react';
import { Link } from "react-router-dom";
import { LightSpeed, Fade } from 'react-reveal';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Sidebar from './sideBar';

class BlogItem extends React.Component {
    constructor(props) {
        super(props);

        const { match: { params } } = this.props;
    
        this.state = {
          site: [this.props.site][0],
          item: params.slug
        };
    }

    componentDidMount() {
        console.log(this.state.item);
        window.scrollTo(0, 0);
    }

    render() {

        return (
            <section className="blog_area single-post-area section_gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 posts-list">
                            <div className="single-post row">
                                <div className="col-lg-12">
                                    <Bounce top>
                                        <div className="feature-img">
                                            <img className="/img-fluid" src="/img/blog/feature-img1.jpg" alt="" />
                                        </div>
                                    </Bounce>
                                </div>
                                <div className="col-lg-3  col-md-3">
                                    <div className="blog_info text-right">
                                        <LightSpeed left>
                                            <div className="post_tag">
                                                <Link to="#">Food,</Link>
                                                <Link className="active" href="#">Technology,</Link>
                                                <Link to="#">Politics,</Link>
                                                <Link to="#">Lifestyle</Link>
                                            </div>
                                        </LightSpeed>

                                        <LightSpeed left delay={200}>
                                            <ul className="blog_meta list">
                                                <li><Link to="#">Mark wiens<i className="lnr lnr-user" /></Link></li>
                                                <li><Link to="#">12 Dec, 2017<i className="lnr lnr-calendar-full" /></Link></li>
                                                <li><Link to="#">1.2M Views<i className="lnr lnr-eye" /></Link></li>
                                                <li><Link to="#">06 Comments<i className="lnr lnr-bubble" /></Link></li>
                                            </ul>
                                        </LightSpeed>

                                        <LightSpeed left delay={400}>
                                            <ul className="social-links">
                                                <li><Link to="#"><i className="fa fa-facebook" /></Link></li>
                                                <li><Link to="#"><i className="fa fa-twitter" /></Link></li>
                                                <li><Link to="#"><i className="fa fa-github" /></Link></li>
                                                <li><Link to="#"><i className="fa fa-behance" /></Link></li>
                                            </ul>
                                        </LightSpeed>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-9 blog_details">
                                    <Zoom left>
                                        <h2>Astronomy Binoculars A Great Alternative</h2>
                                    </Zoom>

                                    <Fade bottom>
                                        <p className="excert">
                                            MCSE boot camps have its supporters and its detractors. Some people do not understand
                                            why you should have to spend money on boot camp when you can get the MCSE study
                                            materials yourself at a fraction.
                                        </p>
                                        <p>
                                            Boot camps have its supporters and its detractors. Some people do not understand why
                                            you should have to spend money on boot camp when you can get the MCSE study materials
                                            yourself at a fraction of the camp price. However, who has the willpower to actually
                                            sit through a self-imposed MCSE training. who has the willpower to actually sit through
                                            a self-imposed
                                        </p>
                                        <p>
                                            Boot camps have its supporters and its detractors. Some people do not understand why
                                            you should have to spend money on boot camp when you can get the MCSE study materials
                                            yourself at a fraction of the camp price. However, who has the willpower to actually
                                            sit through a self-imposed MCSE training. who has the willpower to actually sit through
                                            a self-imposed
                                        </p>
                                    </Fade>
                                </div>
                                <div className="col-lg-12">
                                    <Fade bottom>
                                        <div className="quotes">
                                            MCSE boot camps have its supporters and its detractors. Some people do not understand
                                            why you should have to spend money on boot camp when you can get the MCSE study
                                            materials yourself at a fraction of the camp price. However, who has the willpower to
                                            actually sit through a self-imposed MCSE training.
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <img className="/img-fluid" src="/img/blog/post-img1.jpg" alt="" />
                                            </div>
                                            <div className="col-6">
                                                <img className="/img-fluid" src="/img/blog/post-img2.jpg" alt="" />
                                            </div>
                                            <div className="col-lg-12 mt-25">
                                                <p>
                                                    MCSE boot camps have its supporters and its detractors. Some people do not
                                                    understand why you should have to spend money on boot camp when you can get the
                                                    MCSE study materials yourself at a fraction of the camp price. However, who has
                                                    the willpower.
                                                </p>
                                                <p>
                                                    MCSE boot camps have its supporters and its detractors. Some people do not
                                                    understand why you should have to spend money on boot camp when you can get the
                                                    MCSE study materials yourself at a fraction of the camp price. However, who has
                                                    the willpower.
                                                </p>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>
                            </div>

                            <div className="navigation-area">
                                <div className="row">
                                    <LightSpeed left>
                                        <div className="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                                            <div className="thumb">
                                            <Link to="#"><img className="/img-fluid" src="/img/blog/prev.jpg" alt="" /></Link>
                                            </div>
                                            <div className="arrow">
                                            <Link to="#"><span className="lnr text-white lnr-arrow-left" /></Link>
                                            </div>
                                            <div className="detials">
                                            <p>Prev Post</p>
                                            <Link to="#">
                                                <h4>Space The Final Frontier</h4>
                                            </Link>
                                            </div>
                                        </div>
                                    </LightSpeed>

                                    <LightSpeed right>
                                        <div className="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                                            <div className="detials">
                                            <p>Next Post</p>
                                            <Link to="#">
                                                <h4>Telescopes 101</h4>
                                            </Link>
                                            </div>
                                            <div className="arrow">
                                            <Link to="#"><span className="lnr text-white lnr-arrow-right" /></Link>
                                            </div>
                                            <div className="thumb">
                                            <Link to="#"><img className="/img-fluid" src="/img/blog/next.jpg" alt="" /></Link>
                                            </div>
                                        </div>
                                    </LightSpeed>
                                </div>
                            </div>

                            <Bounce bottom>
                                <div className="comments-area">

                                    <h4>05 Comments</h4>
                                    
                                    <div className="comment-list">
                                        <div className="single-comment justify-content-between d-flex">
                                            <div className="user justify-content-between d-flex">
                                            <div className="thumb">
                                                <img src="/img/blog/c1.jpg" alt="" />
                                            </div>
                                            <div className="desc">
                                                <h5><Link to="#">Emilly Blunt</Link></h5>
                                                <p className="date">December 4, 2017 at 3:12 pm </p>
                                                <p className="comment">
                                                Never say goodbye till the end comes!
                                                </p>
                                            </div>
                                            </div>
                                            <div className="reply-btn">
                                            <Link to="/" className="btn-reply text-uppercase">reply</Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="comment-list left-padding">
                                        <div className="single-comment justify-content-between d-flex">
                                            <div className="user justify-content-between d-flex">
                                            <div className="thumb">
                                                <img src="/img/blog/c2.jpg" alt="" />
                                            </div>
                                            <div className="desc">
                                                <h5><Link to="#">Elsie Cunningham</Link></h5>
                                                <p className="date">December 4, 2017 at 3:12 pm </p>
                                                <p className="comment">
                                                Never say goodbye till the end comes!
                                                </p>
                                            </div>
                                            </div>
                                            <div className="reply-btn">
                                            <Link to="/" className="btn-reply text-uppercase">reply</Link>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="comment-list left-padding">
                                        <div className="single-comment justify-content-between d-flex">
                                            <div className="user justify-content-between d-flex">
                                            <div className="thumb">
                                                <img src="/img/blog/c3.jpg" alt="" />
                                            </div>
                                            <div className="desc">
                                                <h5><Link to="#">Annie Stephens</Link></h5>
                                                <p className="date">December 4, 2017 at 3:12 pm </p>
                                                <p className="comment">
                                                Never say goodbye till the end comes!
                                                </p>
                                            </div>
                                            </div>
                                            <div className="reply-btn">
                                            <Link to="/" className="btn-reply text-uppercase">reply</Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="comment-list">
                                        <div className="single-comment justify-content-between d-flex">
                                            <div className="user justify-content-between d-flex">
                                            <div className="thumb">
                                                <img src="/img/blog/c4.jpg" alt="" />
                                            </div>
                                            <div className="desc">
                                                <h5><Link to="#">Maria Luna</Link></h5>
                                                <p className="date">December 4, 2017 at 3:12 pm </p>
                                                <p className="comment">
                                                Never say goodbye till the end comes!
                                                </p>
                                            </div>
                                            </div>
                                            <div className="reply-btn">
                                            <Link to="/" className="btn-reply text-uppercase">reply</Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="comment-list">
                                        <div className="single-comment justify-content-between d-flex">
                                            <div className="user justify-content-between d-flex">
                                            <div className="thumb">
                                                <img src="/img/blog/c5.jpg" alt="" />
                                            </div>
                                            <div className="desc">
                                                <h5><Link to="#">Ina Hayes</Link></h5>
                                                <p className="date">December 4, 2017 at 3:12 pm </p>
                                                <p className="comment">
                                                Never say goodbye till the end comes!
                                                </p>
                                            </div>
                                            </div>
                                            <div className="reply-btn">
                                            <Link to="/" className="btn-reply text-uppercase">reply</Link>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </Bounce>

                            <Zoom bottom>
                                <div className="comment-form">
                                    <h4>Leave a Reply</h4>
                                    <form>
                                        <div className="form-group form-inline">
                                            <div className="form-group col-lg-6 col-md-6 name">
                                            <input type="text" className="form-control" id="name" placeholder="Enter Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Name'" />
                                            </div>
                                            <div className="form-group col-lg-6 col-md-6 email">
                                            <input type="email" className="form-control" id="email" placeholder="Enter email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Subject'" />
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control mb-10" rows={5} name="message" placeholder="Messege" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Messege'" required defaultValue={""} />
                                        </div>
                                        <Link to="#" className="primary-btn primary_btn"><span>Post Comment</span></Link>
                                    </form>
                                </div>
                            </Zoom>
                        </div>
                        
                        <Sidebar />
                    </div>
                </div>
            </section>
        );
    }
}

export default BlogItem;