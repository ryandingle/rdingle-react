import React from 'react';
import { Link } from "react-router-dom";
import Bounce from 'react-reveal/Bounce';
import ReactHtmlParser from 'react-html-parser';
import Moment from 'react-moment';
import 'moment-timezone';

import Tags from './tags';
import Categories from './categories';

class Posts extends React.Component{

    render() {
        const props = this.props;

        return(
            <div>
                { 
                this.props.Items.length == 0  ? 
                    <div className="mt-s text-center">
                        <h3>No Article Found.</h3>
                    </div>
                : 
                    this.props.Items.map(post => 
                        <Bounce>
                            <article className="row blog_item">
                                <div className="col-md-3">
                                    <div className="blog_info text-right">
                                        <div className="post_tag">
                                            <Categories isRefer={true} items={post.fields.category} />
                                            <Tags isRefer={true} items={post.fields.tag} />
                                        </div>
                                        <ul className="blog_meta list">
                                            <li><Link to="/">Ryan Dingle<i className="lnr lnr-user" /></Link></li>
                                            <li><Link to="/"><Moment toNow>{post.fields.published_date}</Moment><i className="lnr lnr-calendar-full" /></Link></li>
                                            {/* <li><Link to="#">1.2M Views<i className="lnr lnr-eye" /></Link></li>
                                            <li><Link to="#">06 Comments<i className="lnr lnr-bubble" /></Link></li> */}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="blog_post">
                                    {/* <img src={post.fields.feature_image} alt={post.fields.title} /> */}
                                    <img src="/img/blog/feature-img1.jpg" alt={post.fields.title} />
                                        <div className="blog_details">
                                            <Link to={`/blog/`+ post.fields.slug}>
                                            <h2>{post.fields.title}</h2>
                                            </Link>
                                            <div> { ReactHtmlParser (post.fields.body.substr(0,500)) } </div>
                                            <Link to={`/blog/`+post.fields.slug} className="primary_btn">View More <i className="fa fa-link" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </Bounce>
                    )
                }

            </div>
        );
    }
}

export default Posts;