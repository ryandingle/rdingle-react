import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';

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
            
            <div>
                <section className="container mt-s2">
                    <div className="row">
                        <section className="col-md-8">

                            <article className="mb-s2">
                                <img src="/images/blogsample.jpg" className="blog-list-img border" alt="..."/>
                                <Link to="/blog/single" className="plain-link">
                                    <h1>Once inside the facility, mysterious strange behaviors.</h1>
                                </Link>

                                <p>
                                    <i className="fa fa-folder"></i> <Link className="plain-link" to="/blog/category/cat1">Category Name</Link> &nbsp;&nbsp;&nbsp;
                                    <i className="fa fa-tag"></i> 
                                        <Link className="plain-link" to="/blog/tag/tag1">Tag1</Link>, 
                                        <Link className="plain-link" to="/blog/tag/tag2">Tag2</Link>, 
                                        <Link className="plain-link" to="/blog/tag/tag3">Tag3</Link>&nbsp;&nbsp;&nbsp;
                                    <i className="fa fa-time"></i>
                                </p>


                                <p>
                                Fresh from prison, a street racer who was framed by a wealthy business associate joins a cross country race with revenge in mind. His ex-partner, learning of the plan, places a massive bounty on his head as the race begins. An incorrigibly self-serving exiled squirrel finds himself helping his former park brethren raid a nut store to survive, that is also the front for a human gang’s bank robbery. A rebel girl signs up a group of cheerleaders to help her take down the captain of their high school football team, but a supernatural turn of events thrusts the girls into a different battle they return to Sheffield for their last UK concert.
                                </p>

                                <Link to="/blog/single"><Button color="primary" size="lg">READ POST</Button></Link>

                                <br />
                            </article>

                            <article className="mb-s2">
                                <img src="/images/blogsample.jpg" className="blog-list-img border" alt="..."/>
                                <Link to="/blog/single" className="plain-link">
                                    <h1>Once inside the facility, mysterious strange behaviors.</h1>
                                </Link>

                                <p>
                                    <i className="fa fa-folder"></i> <Link className="plain-link" to="/blog/category/cat1">Category Name</Link> &nbsp;&nbsp;&nbsp;
                                    <i className="fa fa-tag"></i> 
                                        <Link className="plain-link" to="/blog/tag/tag1">Tag1</Link>, 
                                        <Link className="plain-link" to="/blog/tag/tag2">Tag2</Link>, 
                                        <Link className="plain-link" to="/blog/tag/tag3">Tag3</Link>&nbsp;&nbsp;&nbsp;
                                    <i className="fa fa-time"></i>
                                </p>


                                <p>
                                Fresh from prison, a street racer who was framed by a wealthy business associate joins a cross country race with revenge in mind. His ex-partner, learning of the plan, places a massive bounty on his head as the race begins. An incorrigibly self-serving exiled squirrel finds himself helping his former park brethren raid a nut store to survive, that is also the front for a human gang’s bank robbery. A rebel girl signs up a group of cheerleaders to help her take down the captain of their high school football team, but a supernatural turn of events thrusts the girls into a different battle they return to Sheffield for their last UK concert.
                                </p>

                                <Link to="/blog/single"><Button color="primary" size="lg">READ POST</Button></Link>

                                <br />
                            </article>

                            <article className="mb-s2">
                                <img src="/images/blogsample.jpg" className="blog-list-img border" alt="..."/>
                                <Link to="/blog/single" className="plain-link">
                                    <h1>Once inside the facility, mysterious strange behaviors.</h1>
                                </Link>

                                <p>
                                    <i className="fa fa-folder"></i> <Link className="plain-link" to="/blog/category/cat1">Category Name</Link> &nbsp;&nbsp;&nbsp;
                                    <i className="fa fa-tag"></i> 
                                        <Link className="plain-link" to="/blog/tag/tag1">Tag1</Link>, 
                                        <Link className="plain-link" to="/blog/tag/tag2">Tag2</Link>, 
                                        <Link className="plain-link" to="/blog/tag/tag3">Tag3</Link>&nbsp;&nbsp;&nbsp;
                                    <i className="fa fa-time"></i>
                                </p>


                                <p>
                                Fresh from prison, a street racer who was framed by a wealthy business associate joins a cross country race with revenge in mind. His ex-partner, learning of the plan, places a massive bounty on his head as the race begins. An incorrigibly self-serving exiled squirrel finds himself helping his former park brethren raid a nut store to survive, that is also the front for a human gang’s bank robbery. A rebel girl signs up a group of cheerleaders to help her take down the captain of their high school football team, but a supernatural turn of events thrusts the girls into a different battle they return to Sheffield for their last UK concert.
                                </p>

                                <Link to="/blog/single"><Button color="primary" size="lg">READ POST</Button></Link>

                                <br />
                            </article>

                            <article className="mb-s2">
                                <img src="/images/blogsample.jpg" className="blog-list-img border" alt="..."/>
                                <Link to="/blog/single" className="plain-link">
                                    <h1>Once inside the facility, mysterious strange behaviors.</h1>
                                </Link>

                                <p>
                                    <i className="fa fa-folder"></i> <Link className="plain-link" to="/blog/category/cat1">Category Name</Link> &nbsp;&nbsp;&nbsp;
                                    <i className="fa fa-tag"></i> 
                                        <Link className="plain-link" to="/blog/tag/tag1">Tag1</Link>, 
                                        <Link className="plain-link" to="/blog/tag/tag2">Tag2</Link>, 
                                        <Link className="plain-link" to="/blog/tag/tag3">Tag3</Link>&nbsp;&nbsp;&nbsp;
                                    <i className="fa fa-time"></i>
                                </p>


                                <p>
                                Fresh from prison, a street racer who was framed by a wealthy business associate joins a cross country race with revenge in mind. His ex-partner, learning of the plan, places a massive bounty on his head as the race begins. An incorrigibly self-serving exiled squirrel finds himself helping his former park brethren raid a nut store to survive, that is also the front for a human gang’s bank robbery. A rebel girl signs up a group of cheerleaders to help her take down the captain of their high school football team, but a supernatural turn of events thrusts the girls into a different battle they return to Sheffield for their last UK concert.
                                </p>

                                <Link to="/blog/single"><Button color="primary" size="lg">READ POST</Button></Link>

                                <br />
                            </article>
                            
                        </section>
                        

                        <section className="col-md-4">
                            <div className="row">
                                <section className="col-md-12">
                                    <h2>Recent Posts</h2>
                                    <hr />
                                    <ul className="list-1">
                                        <li><Link className="plain-link" to="/blog/single"><i className="fa fa-arrow-right"></i>&nbsp;Zach wake up in a futuristic dystopia</Link></li>
                                        <li><Link className="plain-link" to="/blog/single"><i className="fa fa-arrow-right"></i>&nbsp;Wake up futuristic dystopia</Link></li>
                                        <li><Link className="plain-link" to="/blog/single"><i className="fa fa-arrow-right"></i>&nbsp;Zach wake up in a futuristic </Link></li>
                                        <li><Link className="plain-link" to="/blog/single"><i className="fa fa-arrow-right"></i>&nbsp;Hello up in a futuristic dystopia</Link></li>
                                        <li><Link className="plain-link" to="/blog/single"><i className="fa fa-arrow-right"></i>&nbsp;Yeah wake up in a futuristic dystopia</Link></li>
                                        <li><Link className="plain-link" to="/blog/single"><i className="fa fa-arrow-right"></i>&nbsp;Let's wake up in a dystopia</Link></li>
                                    </ul>
                                </section>

                                <section className="col-md-12 mt-s2">
                                    <h2>Categories</h2>
                                    <hr />
                                    <ul className="list-1">
                                        <li><Link className="plain-link" to="/blog/category/1"><i className="fa fa-folder"></i>&nbsp;Zach</Link></li>
                                        <li><Link className="plain-link" to="/blog/category/1"><i className="fa fa-folder"></i>&nbsp;Zachwake</Link></li>
                                        <li><Link className="plain-link" to="/blog/category/1"><i className="fa fa-folder"></i>&nbsp;futuristic</Link></li>
                                        <li><Link className="plain-link" to="/blog/category/1"><i className="fa fa-folder"></i>&nbsp;ystopia</Link></li>
                                        <li><Link className="plain-link" to="/blog/category/1"><i className="fa fa-folder"></i>&nbsp;dystopia</Link></li>
                                        <li><Link className="plain-link" to="/blog/category/1"><i className="fa fa-folder"></i>&nbsp;wake</Link></li>
                                    </ul>
                                </section>

                                <section className="col-md-12 mt-s2">
                                    <h2>Tags</h2>
                                    <hr />
                                    <ul className="list-1">
                                        <li>
                                            <Link className="plain-link" to="/blog/tag/1"><i className="fa fa-tag"></i>&nbsp;Zach</Link>&nbsp;&nbsp;
                                            <Link className="plain-link" to="/blog/tag/1"><i className="fa fa-tag"></i>&nbsp;Zach</Link>&nbsp;&nbsp;
                                            <Link className="plain-link" to="/blog/tag/1"><i className="fa fa-tag"></i>&nbsp;Zach</Link>&nbsp;&nbsp;
                                            <Link className="plain-link" to="/blog/tag/1"><i className="fa fa-tag"></i>&nbsp;Zach</Link>&nbsp;&nbsp;
                                            <Link className="plain-link" to="/blog/tag/1"><i className="fa fa-tag"></i>&nbsp;Zach</Link>&nbsp;&nbsp;
                                            <Link className="plain-link" to="/blog/tag/1"><i className="fa fa-tag"></i>&nbsp;Zach</Link>&nbsp;&nbsp;
                                            <Link className="plain-link" to="/blog/tag/1"><i className="fa fa-tag"></i>&nbsp;Zach</Link>&nbsp;&nbsp;
                                            <Link className="plain-link" to="/blog/tag/1"><i className="fa fa-tag"></i>&nbsp;Zach</Link>&nbsp;&nbsp;
                                            <Link className="plain-link" to="/blog/tag/1"><i className="fa fa-tag"></i>&nbsp;Zach</Link>&nbsp;&nbsp;
                                            <Link className="plain-link" to="/blog/tag/1"><i className="fa fa-tag"></i>&nbsp;Zach</Link>&nbsp;&nbsp;
                                        </li>
                                    </ul>
                                </section>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        );
    }
}

export default BlogItem;