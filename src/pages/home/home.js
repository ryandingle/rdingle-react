import React from 'react';
import { Link } from "react-router-dom";
import { Fade, Zoom, LightSpeed, Flip, Bounce, Roll } from 'react-reveal';
import RubberBand from 'react-reveal/RubberBand';

class Home extends React.Component{

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
        <div>
          <Zoom>
            <section className="banner-area" id="home" style={{backgroundImage: "url(" + "/img/bg3.jpg" + ")", backgroundSize: 'cover' }}>
              <div className="single_slide_banner">
                <div className="container">
                  <div className="row fullscreen d-flex align-items-center">
                    <div className="banner-content col-lg-12 justify-content-center">
                      <RubberBand cascade collapse delay={1000}><h1>{this.state.site.header_title}</h1></RubberBand>
                      <Zoom opposite cascade collapse delay={1200}><h3>{this.state.site.header_description}</h3></Zoom>
                      <Fade delay={1500}><Link to="/about" className="primary-btn">Know more about me ?</Link></Fade>
                    </div>
                  </div>  
                </div>
              </div>
            </section>
          </Zoom>
            
          <Fade bottom delay={1300}>
            <section className="section_gap portfolio_area" id="work">
              <div className="container">

              <div className="row justify-content-center">
                <div className="col-lg-6 text-center">
                  <div className="main-title">
                    <h1>My Works</h1>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="card-columns">

                    <Zoom>
                      <div className="card bg-light text-white items" data-item="1" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                        <Link to="/blog/item" className="plain-link2">
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
                                  <Link className="primary-btn white-color white-shadow">View</Link>
                                </Flip>
                              </div>
                              : ''
                            }
                          </div>
                        </Link>
                      </div>
                    </Zoom>
                    
                    <Zoom>
                      <div className="card bg-light text-white items" data-item="2" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                        <Link to="/blog/item" className="plain-link2">
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
                                  <Link className="primary-btn white-color  white-shadow">View</Link>
                                </Flip>
                              </div>
                              : ''
                            }
                          </div>
                        </Link>
                      </div>
                    </Zoom>
                    
                    <Zoom>
                      <div className="card bg-light text-white items" data-item="3" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                        <Link to="/blog/item" className="plain-link2">
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
                                  <Link className="primary-btn white-color  white-shadow">View</Link>
                                </Flip>
                              </div>
                              : ''
                            }
                          </div>
                        </Link>
                      </div>
                    </Zoom>
                    
                    <Zoom>
                      <div className="card bg-light text-white items" data-item="4" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                        <Link to="/blog/item" className="plain-link2">
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
                                  <Link className="primary-btn white-color  white-shadow">View</Link>
                                </Flip>
                              </div>
                              : ''
                            }
                          </div>
                        </Link>
                      </div>
                    </Zoom>
                    
                    <Zoom>
                      <div className="card bg-light text-white items" data-item="5" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                        <Link to="/blog/item" className="plain-link2">
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
                                  <Link className="primary-btn white-color  white-shadow">View</Link>
                                </Flip>
                              </div>
                              : ''
                            }
                          </div>
                        </Link>
                      </div>
                    </Zoom>
                    
                    <Zoom>
                      <div className="card bg-light text-white items" data-item="6" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                        <Link to="/blog/item" className="plain-link2">
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
                                  <Link className="primary-btn white-color  white-shadow">View</Link>
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
                  <Link to="/portfolio" className="primary-btn">Show More</Link>
                </div>
              </div>
            </section>
          </Fade>
          
          <LightSpeed left opposite>
            <section className="about-area section_gap gray-bg">
              <div className="container">
                <div className="row align-items-center justify-content-between">
                  <div className="col-lg-5 about-left">
                    <img className="img-fluid" src="img/about-img.png" alt="" />
                  </div>
                  <div className="col-lg-6 col-md-12 about-right">
                    <div className="main-title text-left">
                      <h1>about myselt</h1>
                    </div>
                    <div className="mb-50 wow fadeIn" data-wow-duration=".8s">
                      <p>
                        inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards
                        especially in the
                        workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate
                        behavior
                        is often laughed. inappropriate behavior is often laughed off as “boys will be boys,” women face higher.
                      </p>
                      <p>That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is
                        often
                        laughed.
                      </p>
                    </div>
                    <Link to="/about" className="primary-btn">More Info</Link>
                  </div>
                </div>
              </div>
            </section>
          </LightSpeed>
          
          <LightSpeed right opposite>
            <div className="section_gap testimonial_area" style={{backgroundImage: "url(" + "/img/testi-bg.jpg" + ")", backgroundSize: 'cover' }}>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-6 text-center">
                    <div className="main-title">
                      <h1>Recent Blog Posts</h1>
                    </div>
                  </div>
                </div>

                <div className="row justify-content-center">
                  <div className="card-columns">
                    
                    <Roll>
                      <div className="text-left article">
                        <img src="/img/saitama.jpg" className="card-img-top" alt="..."  style={{width: '366px', height: '200px'}} />
                        <div className="card-body">
                          <Link to="/blog/item" className="plain-link"><h5 className="card-title">In the near future, when communications go offline.</h5></Link>
                          <p>
                          Two overly imaginative pranksters named George and Harold hypnotize their principal into thinking he’s a ridiculously enthusiastic, incredibly dimwitted.
                          </p>
                        </div>
                      </div>
                    </Roll>
                    
                    <Roll>
                      <div className="text-left article">
                        <img src="/img/bg1.jpg" className="card-img-top" alt="..."  style={{width: '366px', height: '200px'}} />
                        <div className="card-body">
                          <Link to="/blog/item" className="plain-link"><h5 className="card-title">Years ago, heartbroken and officially separated.</h5></Link>
                          <p>
                          Two overly imaginative pranksters named George and Harold hypnotize their principal into thinking he’s a ridiculously enthusiastic, incredibly dimwitted.
                          </p>
                        </div>
                      </div>
                    </Roll>

                    <Roll>
                      <div className="text-left article">
                        <img src="/img/bg3.jpg" className="card-img-top" alt="..."  style={{width: '366px', height: '200px'}} />
                        <div className="card-body">
                          <Link to="/blog/item" className="plain-link"><h5 className="card-title">Once inside the facility, mysterious strange behaviors.</h5></Link>
                          <p>
                          Two overly imaginative pranksters named George and Harold hypnotize their principal into thinking he’s a ridiculously enthusiastic, incredibly dimwitted.
                          </p>
                        </div>
                      </div>
                    </Roll>
                    
                    <Roll>
                      <div className="text-left article">
                        <img src="/img/saitama.jpg" className="card-img-top" alt="..."  style={{width: '366px', height: '200px'}} />
                        <div className="card-body">
                          <Link to="/blog/item" className="plain-link"><h5 className="card-title">In the near future, when communications go offline.</h5></Link>
                          <p>
                          Two overly imaginative pranksters named George and Harold hypnotize their principal into thinking he’s a ridiculously enthusiastic, incredibly dimwitted.
                          </p>
                        </div>
                      </div>
                    </Roll>
                    
                    <Roll>
                      <div className="text-left article">
                        <img src="/img/bg1.jpg" className="card-img-top" alt="..."  style={{width: '366px', height: '200px'}} />
                        <div className="card-body">
                          <Link to="/blog/item" className="plain-link"><h5 className="card-title">Years ago, heartbroken and officially separated.</h5></Link>
                          <p>
                          Two overly imaginative pranksters named George and Harold hypnotize their principal into thinking he’s a ridiculously enthusiastic, incredibly dimwitted.
                          </p>
                        </div>
                      </div>
                    </Roll>

                    <Roll>
                      <div className="text-left article">
                        <img src="/img/bg3.jpg" className="card-img-top" alt="..."  style={{width: '366px', height: '200px'}} />
                        <div className="card-body">
                          <Link to="/blog/item" className="plain-link"><h5 className="card-title">Once inside the facility, mysterious strange behaviors.</h5></Link>
                          <p>
                          Two overly imaginative pranksters named George and Harold hypnotize their principal into thinking he’s a ridiculously enthusiastic, incredibly dimwitted.
                          </p>
                        </div>
                      </div>
                    </Roll>

                  </div>
                </div>
              </div>
            </div>
          </LightSpeed>
          
          <Bounce delay={600}>
            <section className="section_gap newsletter-area" style={{backgroundImage: "url(" + "/img/bg2.png" + ")" }}>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-6 text-center">
                    <div className="main-title white-shadow">
                      <h1>Join My Newsletter</h1>
                      <p>Subscribe to get my latest blog post, project etc..</p>
                    </div>
                  </div>
                </div>
                <div className="row newsletter_form justify-content-center">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="d-flex flex-row" id="mc_embed_signup">
                      <form className="w-100" noValidate="true" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01" method="get">
                        <div className="navbar-form">
                          <div className="input-group add-on">
                            <input className="form-control" name="EMAIL" placeholder="Your email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your email address'" required type="email" />
                            <div style={{position: 'absolute', left: '-5000px'}}>
                              <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabIndex={-1} defaultValue type="text" />
                            </div>
                            <div className="input-group-btn">
                              <button className="genric-btn text-uppercase">
                                Subscribe
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="info mt-20" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Bounce>

        </div>
    );
  }
}

export default Home;