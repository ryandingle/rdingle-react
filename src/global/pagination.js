import React from 'react';
import { Link } from 'react-router-dom';

class BlogPagination extends React.Component {

    navigate = (e) => {
        e.preventDefault();
        const active_page   = e.target.attributes[0].value;
        const url           = this.props.history.location.pathname+'?page='+active_page;
        
        this.props.history.push(url);
    };

    render() {
        let arr = Array.apply(null, {length: this.props.pages}).map(Number.call, Number);
        let pages = this.props.pages;
        let active = this.props.active;
        let url = this.props.history.location.pathname;
        let prev = (parseInt(active) - 1);
        let next = (parseInt(active) + 1);

        return (    

            <nav className="blog-pagination justify-content-center d-flex">
                {
                    pages == 1 ? null
                    :
                    <ul className="pagination">

                        {
                            active != 1 ?
                                <li className="page-item">
                                    <Link onClick={this.navigate} page={prev} to={{ pathname: url+`?page=`+prev , page: prev }} className="page-link" aria-label="Previous">
                                        <span page={prev} aria-hidden="true">
                                            <span page={prev} className="lnr lnr-chevron-left" /> Previous
                                        </span>
                                    </Link>
                                </li>
                            : null
                        }

                        {arr.map(item => {
                            if((item+1) == active) {
                                return (
                                    <li className="page-item active"><Link onClick={this.navigate} page={(item+1)} to={{ pathname: url+`?page=`+(item+1) , page: (item+1)}} className="page-link">{(item+1)}</Link></li>
                                )
                            }else{
                                return (
                                    <li className="page-item"><Link onClick={this.navigate} page={(item+1)} to={{ pathname: url+`?page=`+(item+1) , page: (item+1)}} className="page-link">{(item+1)}</Link></li>
                                )
                            }
                        })}

                        {
                            active != pages?
                                <li className="page-item">
                                    <Link onClick={this.navigate} page={next} to={{ pathname: url+`?page=`+next , page: next}} className="page-link" aria-label="Next">
                                        <span page={next} aria-hidden="true">
                                        Next <span page={next} className="lnr lnr-chevron-right" />
                                        </span>
                                    </Link>
                                </li>
                            : null
                        }

                    </ul>
                }
            </nav>
        )
    }
}

export default BlogPagination;