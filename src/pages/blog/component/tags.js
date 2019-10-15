import React from 'react';
import Fade from 'react-reveal';
import { Link } from "react-router-dom";
import Preloader from '../../../global/preloader';
import API from '../../../global/api';

class Tags extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            data: [],
            isRefer: this.props.isRefer,
            items: this.props.items
        }
    }

    componentDidMount() {
        this.getData();
    }   

    getData() {
        API.get('tag')
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
                                        item2.pk == item ?
                                        <Link to={{ pathname: `/blog/tag/`+item2.pk , id: item2.pk}}><span className="badge badge-primary">{item2.fields.title}</span>&nbsp;</Link>
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
                                <aside className="single-sidebar-widget tag_cloud_widget">
                                    <h4 className="widget_title">Tag Clouds</h4>
                                    {
                                        this.state.data.length === 0 ?
                                            <p className="text-center">
                                                <h4>No Tags Yet!</h4>
                                            </p>
                                        :
                                            <ul className="list">
                                                {
                                                    this.state.data.map(item =>
                                                        <li>
                                                            <Link to={{ pathname: `/blog/tag/`+item.pk , id: item.pk}}>{item.fields.title}</Link>
                                                        </li>
                                                    ) 
                                                }
                                            </ul>
                                    }
                                </aside>
                            </Fade>
                        }
                    </div>
                }
            </div>
        )
    }
}

export default Tags;