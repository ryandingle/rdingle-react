import React from 'react';
import { Link } from "react-router-dom";
import { Fade } from 'react-reveal';

import Categroies from './component/categories';
import Tags from './component/tags';
import Recent from './component/recent';

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            search: ''
        };
    }

    updateInputValue = e => {
        this.setState({ search: e.target.value });
    }

    updateURL = (e) => {
        e.preventDefault();
        const url = 'search='+this.state.search;
        this.props.history.push(`/blog?${url}`);
    };

    render() {
        
        return (

            <div className="col-lg-4">
                <div className="blog_right_sidebar">
                    <aside className="single_sidebar_widget search_widget">
                        <Fade right>
                            <form onSubmit={this.updateURL}>
                                <div className="input-group">
                                    <input type="text" name="search" className="form-control" placeholder="Search Posts" onKeyUp={this.updateInputValue} />
                                    <span className="input-group-btn">
                                    <button className="btn btn-default" type="button"><i className="lnr lnr-magnifier" /></button>
                                    </span>
                                </div>
                            </form>
                        </Fade>
                        <div className="br" />
                    </aside>
                    
                    <Recent item={this.props.item} />

                    <Fade bottom>
                        <aside className="single_sidebar_widget ads_widget">
                            <Link to="#"><img className="/img-fluid" src="/img/blog/add.jpg" alt="" /></Link>
                            <div className="br" />
                        </aside>
                    </Fade>

                    <Categroies />
                    
                    <Fade bottom>
                        <aside className="single-sidebar-widget newsletter_widget">
                            <h4 className="widget_title">Newsletter</h4>
                            <p>
                                Here, I focus on a range of items and features that we use in life without
                                giving them a second thought.
                            </p>
                            <div className="form-group d-flex flex-row">
                                <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><i className="fa fa-envelope" aria-hidden="true" /></div>
                                </div>
                                <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Enter email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email'" />
                                </div>
                                <Link to="#" className="bbtns">Subcribe</Link>
                            </div>
                            <p className="text-bottom">You can unsubscribe at any time</p>
                            <div className="br" />
                        </aside>
                    </Fade>
                    
                    <Tags isRefer={false} items={[]} />
                </div>
            </div>
        );
    }
}

export default Sidebar;