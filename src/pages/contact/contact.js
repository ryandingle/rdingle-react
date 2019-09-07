import React from 'react';
import { Fade, LightSpeed } from 'react-reveal';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      <Marker
        position={{ lat: -34.397, lng: 150.644 }}
      />
    </GoogleMap>
));

class Contact extends React.Component{
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <section className="contact_area section_gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <LightSpeed left>
                                <div className="contact_info">
                                    <div className="info_item">
                                    <i className="lnr lnr-home" />
                                    <h6>California, United States</h6>
                                    <p>Santa monica bullevard</p>
                                    </div>
                                    <div className="info_item">
                                    <i className="lnr lnr-phone-handset" />
                                    <h6><a href="#">00 (440) 9865 562</a></h6>
                                    <p>Mon to Fri 9am to 6 pm</p>
                                    </div>
                                    <div className="info_item">
                                    <i className="lnr lnr-envelope" />
                                    <h6><a href="#">me@rldwebshop.com</a></h6>
                                    <p>Send us your query anytime!</p>
                                    </div>
                                </div>
                            </LightSpeed>
                        </div>
                        <div className="col-lg-9 mb-s">
                            <form className="row contact_form" action="/contact" method="post" id="contactForm" noValidate="novalidate">
                                <Fade top>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" id="email" name="email" placeholder="Enter email address" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="subject" name="subject" placeholder="Enter Subject" />
                                        </div>
                                    </div>
                                </Fade>
                                <LightSpeed right>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <textarea className="form-control" name="message" id="message" rows={1} placeholder="Enter Message" defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="col-md-12 text-right">
                                        <button type="submit" value="submit" className="primary-btn"><span>Send Message</span></button>
                                    </div>
                                </LightSpeed>
                            </form>
                        </div>
                    </div>
                    <MapWithAMarker className="mb-s" 
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCjCGmQ0Uq4exrzdcL6rvxywDDOvfAu6eE"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        />
                </div>
            </section>
        );
    }
}

export default Contact;