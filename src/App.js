import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routes";
import Header from './global/header';
import Footer from './global/footer';
import SiteData from './utils/site-data';

const App = () => {
  return (
    <div>
        <Router>
          <Header site={SiteData} />
          <Routes />
          <Footer site={SiteData} />
        </Router>
    </div>
  );
}

export default App;
