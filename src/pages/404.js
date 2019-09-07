import React from 'react';
import { Bounce } from 'react-reveal';

class NotFound extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <Bounce>
                <div>
                    <div className="mt-s2">&nbsp;</div>
                    <section className="container mt-s text-center">
                        <h1 className="">OPPS !! PAGE NOT FOUND.</h1>
                        <div className="mb-s">&nbsp;</div>
                    </section>
                </div>
            </Bounce>
        );
    }
}

export default NotFound;