import React from 'react';
import { Link } from "react-router-dom";
import { LightSpeed, Fade } from 'react-reveal';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import ReactHtmlParser from 'react-html-parser';
import Moment from 'react-moment';
import 'moment-timezone';

import API from '../../global/api';
import Preloader from '../../global/preloader';
import Sidebar from './sideBar';
import NotFound from '../404';
import Tags from './component/tags';
import Categories from './component/categories';

class BlogItem extends React.Component {

    constructor(props) {
        super(props);

        const { match: { params } } = this.props;
    
        this.state = {
          site: [this.props.site][0],
          item: params.slug,
          data: [],
          next: [],
          previous: [],
          isLoading: true,
        }

    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.getData(this.state.item);
    }

    componentWillReceiveProps(nextProps) {
        window.scrollTo(0, 0);

        this.setState({
            isLoading:true
        });

        this.getData(nextProps.location.slug);
    }

    getData(slug){
        API.get('blog?item='+slug)
            .then(res => this.setState({
                    data: res.data.data,
                    next: res.data.next,
                    previous: res.data.previous,
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

        const { history } = this.props;

        return (
            <div>
                {   
                    this.state.isLoading ? 
                    <Preloader />
                    :
                        this.state.data.length === 0 ?
                            <NotFound />
                        :
                        this.state.data.map(item => 
                            <section className="blog_area single-post-area section_gap">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-lg-8 posts-list">
                                            <div className="single-post row">
                                                <div className="col-lg-12">
                                                    <Bounce top>
                                                        <div className="feature-img">
                                                            <img className="img-fluid" style={{width: '100%' }} src="/img/blog/feature-img1.jpg" alt="" />
                                                        </div>
                                                    </Bounce>
                                                </div>
                                                <div className="col-lg-3  col-md-3">
                                                    
                                                </div>
                                                <div className="col-lg-12 col-md-12 blog_details">
                                                    <Zoom left>
                                                        <h1>{item.fields.title}</h1>
                                                    </Zoom>

                                                    <hr />

                                                    <div className="blog_info text-left">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <LightSpeed left>
                                                                    <div className="post_tag">
                                                                       <Categories isRefer={true} items={item.fields.category} />
                                                                        <Tags isRefer={true} items={item.fields.tag} />
                                                                    </div>
                                                                </LightSpeed>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <LightSpeed left delay={200}>
                                                                    <ul className="blog_meta list">
                                                                        <li><Link to="/">Ryan Dingle<i className="lnr lnr-user" /></Link></li>
                                                                        <li><Link to={`/blog?item=`+item.fields.slug}><Moment toNow>{item.fields.published_date}</Moment><i className="lnr lnr-calendar-full" /></Link></li>
                                                                        {/* <li><Link to="#">1.2M Views<i className="lnr lnr-eye" /></Link></li>
                                                                        <li><Link to="#">06 Comments<i className="lnr lnr-bubble" /></Link></li> */}
                                                                    </ul>
                                                                </LightSpeed>
                                                            </div>
                                                            <div className="col-md-3">
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
                                                    </div>

                                                    <hr />

                                                    <Fade bottom>
                                                        <div className="col-md-12">{ ReactHtmlParser (item.fields.body) }</div>
                                                    </Fade>
                                                </div>
                                            </div>

                                            <div className="navigation-area">
                                                <div className="row">
                                                    {
                                                        this.state.previous && !this.state.next ?
                                                            <div className="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                                                            </div>
                                                        : null
                                                    }

                                                    {
                                                        this.state.previous ?
                                                            this.state.previous.map(item => 
                                                                <LightSpeed left>
                                                                    <div className="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                                                                        <div className="thumb">
                                                                        <Link to={{ pathname: `/blog/`+item.fields.slug , slug: item.fields.slug}}><img className="/img-fluid" src="/img/blog/prev.jpg" alt="" /></Link>
                                                                        </div>
                                                                        <div className="arrow">
                                                                        <Link to={{ pathname: `/blog/`+item.fields.slug , slug: item.fields.slug}}><span className="lnr text-white lnr-arrow-left" /></Link>
                                                                        </div>
                                                                        <div className="detials">
                                                                        <p>Prev Post</p>
                                                                        <Link to={{ pathname: `/blog/`+item.fields.slug , slug: item.fields.slug}}>
                                                                            <h4>{item.fields.title}</h4>
                                                                        </Link>
                                                                        </div>
                                                                    </div>
                                                                </LightSpeed>
                                                            )
                                                        : null
                                                    }

                                                    {
                                                        this.state.next && !this.state.previous ?
                                                            <div className="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                                                            </div>
                                                        : null
                                                    }

                                                    {
                                                        this.state.next ?
                                                            this.state.next.map(item => 
                                                                <LightSpeed right>
                                                                    <div className="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                                                                        <div className="detials">
                                                                        <p>Next Post</p>
                                                                        <Link to={{ pathname: `/blog/`+item.fields.slug , slug: item.fields.slug}} >
                                                                            <h4>{item.fields.title}</h4>
                                                                        </Link>
                                                                        </div>
                                                                        <div className="arrow">
                                                                        <Link to={{ pathname: `/blog/`+item.fields.slug , slug: item.fields.slug}}><span className="lnr text-white lnr-arrow-right" /></Link>
                                                                        </div>
                                                                        <div className="thumb">
                                                                        <Link to={{ pathname: `/blog/`+item.fields.slug , slug: item.fields.slug}}><img className="/img-fluid" src="/img/blog/next.jpg" alt="" /></Link>
                                                                        </div>
                                                                    </div>
                                                                </LightSpeed>
                                                            )
                                                        : null
                                                    }
                                                </div>
                                            </div>
                                                
                                            <div className="col-md-12 pull-right">
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
                                        </div>
                                        
                                        <Sidebar item={item.fields.slug} history={history} />
                                    
                                    </div>
                                </div>
                            </section>
                        )
                }
            </div>
        );
    }
}

export default BlogItem;