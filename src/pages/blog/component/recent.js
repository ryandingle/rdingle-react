import React from 'react';
import Fade from 'react-reveal';
import { Link } from "react-router-dom";
import Zoom from 'react-reveal/Zoom';
import Moment from 'react-moment';
import 'moment-timezone';

import Preloader from '../../../global/preloader';
import API from '../../../global/api';

class Recent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            data: [],
            item: this.props.item,
            slug: ''
        }
    }

    componentDidMount() {
        this.getData(this.state.item);
    }   

    getData(slug) {

        let item = '?item='+slug;

        if(!slug){item = '';}

        API.get('blog-recent'+item)
            .then(res => this.setState({
                    data: res.data,
                    isLoading: false
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

        return(
            <aside className="single_sidebar_widget popular_post_widget">
            {
                this.state.isLoading ?
                <Preloader />
                :
                <div>
                    {
                        this.state.data.length == 0 ?
                            <div>
                                <Fade right>
                                    <h3 className="widget_title">Recent Post</h3>
                                </Fade>
                                <p className="text-center">
                                        <h4>No Recent Post Yet!</h4>
                                    </p>
                            </div>
                        :
                        <div>
                            <Fade right>
                                <h3 className="widget_title">Recent Posts</h3>
                            </Fade>
                                {
                                    this.state.data.map(item =>
                                        <Zoom>
                                            <div className="media post_item">
                                                <img src="/img/blog/popular-post/post4.jpg" alt="post" />
                                                <div className="media-body">
                                                    <Link to={{ pathname: `/blog/`+item.fields.slug , slug: item.fields.slug}} >
                                                        <h3>{item.fields.title}</h3>
                                                    </Link>
                                                    <p><Moment toNow>{item.fields.published_date}</Moment></p>
                                                </div>
                                            </div>
                                        </Zoom>
                                    ) 
                                }
                        </div>
                    }
                </div>
            }

                <div className="br" />
            </aside>
        )
    }
}

export default Recent;