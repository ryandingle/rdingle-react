import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routes";
import Header from './global/header';
import Footer from './global/footer';
import SiteData from './utils/site-data';
import Preloader from './global/preloader';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    this.setState({'isLoading': false});
  }
  
  render() {
    return (
      <div>
          { this.state.isLoading ?
            <Preloader />
          :
            <Router>
              <Header site={SiteData} />
              <Routes />
              <Footer site={SiteData} />
            </Router>
          }
      </div>
    );
  }
}

export default App;
