import React from 'react';
import Fade from 'react-reveal';
import Bounce from 'react-reveal/Bounce';
import { Link } from "react-router-dom";
import Preloader from '../../../global/preloader';
import API from '../../../global/api';

class Categories extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            data: [],
            isRefer: this.props.isRefer,
            items: [this.props.items]
        }
    }

    componentDidMount() {
        this.getData();
    }   

    getData() {
        API.get('category')
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
            <div>
                {
                    this.state.isRefer ?
                        <p>
                            {
                                this.state.items.map(item =>
                                    this.state.data.map(item2 =>
                                        item2.pk === item ?
                                        <Link to={{ pathname: `/blog/category/`+item2.pk , id: item2.pk}}>{item2.fields.title}&nbsp;<i className="fa fa-folder-o" /></Link>
                                        : null
                                    )
                                )
                            }
                        </p>
                    : 
                        <div>
                            { 
                                this.state.isLoading ?
                                    <Preloader />
                                :
                                <Fade bottom>
                                    <aside className="single_sidebar_widget post_category_widget">
                                        <h4 className="widget_title">Post Categories</h4>
                                            {
                                                this.state.data.length === 0 ?
                                                    <p className="text-center">
                                                        <h4>No Categories Yet!</h4>
                                                    </p>
                                                :
                                                    <ul className="list cat-list">
                                                        {
                                                            this.state.data.map(item =>
                                                                <li>
                                                                    <Bounce>
                                                                        <Link to={{ pathname: `/blog/category/`+item.pk , id: item.pk}} className="d-flex justify-content-between">
                                                                            <p>{item.fields.title}</p>
                                                                            <p>{item.post_count}</p>
                                                                        </Link>
                                                                    </Bounce>
                                                                </li>
                                                            ) 
                                                        }
                                                    </ul>
            
                                            }
                                            
                                        <div className="br" />
                                    </aside>
                                </Fade>
                            }
                        </div>
                }
            </div>
        )
    }
}

export default Categories;