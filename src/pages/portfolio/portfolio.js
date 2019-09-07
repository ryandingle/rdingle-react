import React from 'react';
import { Link } from "react-router-dom";
import { Zoom, Flip, LightSpeed, Fade } from 'react-reveal';

class Portfolio extends React.Component {

    constructor(props) {
        super(props);
    
        this.handleMouseHover = this.handleMouseHover.bind(this);
    
        this.state = {
          site: [this.props.site][0],
          isHovering: false,
          isItemHover: 0
        };
    }

    handleMouseHover(e) {
        this.setState(this.toggleHoverState);
        this.setState({'isItemHover':e.currentTarget.dataset.item});
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <section className="section_gap portfolio_area" id="work">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center">
                        <div className="main-title">
                            <LightSpeed><h1>Portfolio</h1></LightSpeed>
                            <Fade><p>Check some og my works</p></Fade>
                        </div>
                        </div>
                    </div>
                    
                    <div className="row justify-content-center">
                        <div className="card-columns">

                            <Zoom>
                                <div className="card bg-light text-white items" data-item="1" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                                    <Link to="/portfolio/item" className="plain-link2">
                                        <img src="/img/saitama.jpg" className="card-img" alt="/img/saitama.jpg" style={{width: '366px', height: '366px'}} />
                                        <div className="card-img-overlay text-center">
                                            {
                                            this.state.isHovering && this.state.isItemHover == 1 
                                            ?
                                            <div>
                                                <Flip right cascade when={this.state.toggleHoverState}>
                                                <h3 className="card-title white-shadow title">This is a Sample Title</h3> 
                                                </Flip>
                                                <Flip bottom cascade when={this.state.show}>
                                                <Link to="/portfolio/item" className="primary-btn white-color white-shadow">View</Link>
                                                </Flip>
                                            </div>
                                            : ''
                                            }
                                        </div>
                                    </Link>
                                </div>
                            </Zoom>
                            
                            <Zoom delay={200}>
                                <div className="card bg-light text-white items" data-item="2" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                                    <Link to="/portfolio/item" className="plain-link2">
                                        <img src="/img/bg1.jpg" className="card-img-top" alt="..."  style={{width: '366px', height: '366px'}} />
                                        <div className="card-img-overlay text-center"> 
                                            {
                                            this.state.isHovering && this.state.isItemHover == 2 
                                            ?
                                            <div>
                                                <Flip right cascade when={this.state.toggleHoverState}>
                                                <h3 className="card-title white-shadow title">This is a Sample Title</h3> 
                                                </Flip>
                                                <Flip bottom cascade when={this.state.show}>
                                                <Link to="/portfolio/item" className="primary-btn white-color  white-shadow">View</Link>
                                                </Flip>
                                            </div>
                                            : ''
                                            }
                                        </div>
                                    </Link>
                                </div>
                            </Zoom>
                            
                            <Zoom delay={400}>
                                <div className="card bg-light text-white items" data-item="3" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                                    <Link to="/portfolio/item" className="plain-link2">
                                        <img src="/img/bg3.jpg" className="card-img-top" alt="..."  style={{width: '366px', height: '366px'}} />
                                        <div className="card-img-overlay text-center">  
                                            {
                                            this.state.isHovering && this.state.isItemHover == 3 
                                            ?
                                            <div>
                                                <Flip right cascade when={this.state.toggleHoverState}>
                                                <h3 className="card-title white-shadow title">This is a Sample Title</h3> 
                                                </Flip>
                                                <Flip bottom cascade when={this.state.show}>
                                                <Link to="/portfolio/item" className="primary-btn white-color  white-shadow">View</Link>
                                                </Flip>
                                            </div>
                                            : ''
                                            }
                                        </div>
                                    </Link>
                                </div>
                            </Zoom>
                            
                            <Zoom delay={600}>
                                <div className="card bg-light text-white items" data-item="4" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                                    <Link to="/portfolio/item" className="plain-link2">
                                        <img src="/img/saitama.jpg" className="card-img-top" alt="..."  style={{width: '366px', height: '366px'}} />
                                        <div className="card-img-overlay text-center"> 
                                            {
                                            this.state.isHovering && this.state.isItemHover == 4 
                                            ?
                                            <div>
                                                <Flip right cascade when={this.state.toggleHoverState}>
                                                <h3 className="card-title white-shadow title">This is a Sample Title</h3> 
                                                </Flip>
                                                <Flip bottom cascade when={this.state.show}>
                                                <Link to="/portfolio/item" className="primary-btn white-color  white-shadow">View</Link>
                                                </Flip>
                                            </div>
                                            : ''
                                            }
                                        </div>
                                    </Link>
                                </div>
                            </Zoom>
                            
                            <Zoom delay={800}>
                                <div className="card bg-light text-white items" data-item="5" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                                    <Link to="/portfolio/item" className="plain-link2">
                                        <img src="/img/bg1.jpg" className="card-img-top" alt="..."  style={{width: '366px', height: '366px'}} />
                                        <div className="card-img-overlay text-center"> 
                                        {
                                            this.state.isHovering && this.state.isItemHover == 5 
                                            ?
                                            <div>
                                                <Flip right cascade when={this.state.toggleHoverState}>
                                                <h3 className="card-title white-shadow title">This is a Sample Title</h3> 
                                                </Flip>
                                                <Flip bottom cascade when={this.state.show}>
                                                <Link to="/portfolio/item"  className="primary-btn white-color  white-shadow">View</Link>
                                                </Flip>
                                            </div>
                                            : ''
                                            }
                                        </div>
                                    </Link>
                                </div>
                            </Zoom>
                            
                            <Zoom delay={1000}>
                                <div className="card bg-light text-white items" data-item="6" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                                    <Link to="/portfolio/item" className="plain-link2">
                                        <img src="/img/bg3.jpg" className="card-img-top" alt="..."  style={{width: '366px', height: '366px'}} />
                                        <div className="card-img-overlay text-center"> 
                                            {
                                            this.state.isHovering && this.state.isItemHover == 6 
                                            ?
                                            <div>
                                                <Flip right cascade when={this.state.toggleHoverState}>
                                                <h3 className="card-title white-shadow title">This is a Sample Title</h3> 
                                                </Flip>
                                                <Flip bottom cascade when={this.state.show}>
                                                <Link to="/portfolio/item"  className="primary-btn white-color  white-shadow">View</Link>
                                                </Flip>
                                            </div>
                                            : ''
                                            }
                                        </div>
                                    </Link>
                                </div>
                            </Zoom>

                        </div>
                    </div>
                    <div className="text-center mt-s">
                        <Link to="#" className="primary-btn">Show More</Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;