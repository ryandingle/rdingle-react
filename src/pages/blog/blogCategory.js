import React from 'react';
import { LightSpeed, Fade } from 'react-reveal';

import API from '../../global/api';
import Preloader from '../../global/preloader';
import Sidebar from './sideBar';
import Posts from './component/posts';
import BlogPagination from '../../global/pagination';
class BlogCategory extends React.Component {

    constructor(props) {
        super(props);

        const { match: { params } } = this.props;
    
        this.state = {
            item: params.id,
            isLoading: true,
            posts: [],
            error: null,
            pages: 0
        };
    }

    componentDidMount() {
        this.getPosts(this.state.item);
        window.scrollTo(0, 0);
    }

    componentWillReceiveProps(nextProps) {
        window.scrollTo(0, 0);

        this.setState({
            isLoading:true
        });

        this.getPosts(nextProps.location.id);
    }

    getPosts(item) {

        API.get('blog-category?item='+item)
            .then(res => this.setState({
                    posts: res.data.data,
                    pages: res.data.pages,
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
        const { history } = this.props;
        const query = new URLSearchParams(this.props.location.search);
        const active = query.get('page') ? query.get('page') : 1;

        return(
            <section className="blog_area mt-s2">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog_left_sidebar">
                                {
                                    this.state.isLoading ? 
                                    <Preloader />
                                    :
                                    <Posts Items={this.state.posts} pages={this.state.pages} />
                                }

                                <hr />

                                <LightSpeed bottom>
                                    <BlogPagination pages={this.state.pages} history={this.props.history} active={active}  />
                                </LightSpeed>
                                
                            </div>
                        </div>

                        <Sidebar item={false} history={history} />
                    </div>
                </div>
            </section>    
        );
    }
}

export default BlogCategory;