import React from 'react';
import { LightSpeed, Fade } from 'react-reveal';

import API from '../../global/api';
import Preloader from '../../global/preloader';
import Sidebar from './sideBar';
import Posts from './component/posts';
import BlogPagination from '../../global/pagination';
class Blog extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
           isLoading: true,
           posts: [],
           error: null,
           search: this.props.location.search ? this.props.location.search : '',
           pages: 0
        };
    }

    componentDidMount() {
        this.getPosts(this.state.search);
        window.scrollTo(0, 0);
    }

    componentWillReceiveProps(nextProps) {
        window.scrollTo(0, 0);

        this.setState({
            isLoading:true,
            search: nextProps.location.search
        });

        this.getPosts(nextProps.location.search);
    }

    getPosts(search='') {

        API.get('blog'+search)
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

        console.log(active);

        return (
            <section className="blog_area mt-s2">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog_left_sidebar">
                                {
                                    this.state.isLoading ? 
                                    <Preloader />
                                    :
                                    <Posts Items={this.state.posts} pages={this.state.pages} history={history} />
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

export default Blog;